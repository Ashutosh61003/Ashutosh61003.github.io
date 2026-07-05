import { useCallback, useLayoutEffect, useRef } from 'react';
import Lenis from 'lenis';
import './ScrollStack.css';

export const ScrollStackItem = ({ children, itemClassName = '' }) => (
    <div className={`scroll-stack-card ${itemClassName}`.trim()}>{children}</div>
);

const ScrollStack = ({
    children,
    className = '',
    itemDistance = 100,
    itemScale = 0.03,
    itemStackDistance = 30,
    stackPosition = '20%',
    scaleEndPosition = '10%',
    baseScale = 0.85,
    rotationAmount = 0,
    blurAmount = 0,
    useWindowScroll = false,
    onStackComplete
}) => {
    const scrollerRef = useRef(null);
    const stackCompletedRef = useRef(false);
    const animationFrameRef = useRef(null);
    const lenisRef = useRef(null);
    const cardsRef = useRef([]);
    const lastTransformsRef = useRef(new Map());
    const isUpdatingRef = useRef(false);

    const calculateProgress = useCallback((scrollTop, start, end) => {
        if (scrollTop < start) return 0;
        if (scrollTop > end) return 1;
        return (scrollTop - start) / (end - start);
    }, []);

    const parsePercentage = useCallback((value, containerHeight) => {
        if (typeof value === 'string' && value.includes('%')) {
            return (parseFloat(value) / 100) * containerHeight;
        }
        return parseFloat(value);
    }, []);

    const getScrollData = useCallback(() => {
        if (useWindowScroll) {
            return {
                scrollTop: window.scrollY,
                containerHeight: window.innerHeight
            };
        }

        const scroller = scrollerRef.current;
        return {
            scrollTop: scroller.scrollTop,
            containerHeight: scroller.clientHeight
        };
    }, [useWindowScroll]);

    const getElementOffset = useCallback(
        (element) => {
            if (useWindowScroll) {
                const rect = element.getBoundingClientRect();
                return rect.top + window.scrollY;
            }
            return element.offsetTop;
        },
        [useWindowScroll]
    );

    const updateCardTransforms = useCallback(() => {
        if (!cardsRef.current.length || isUpdatingRef.current) return;

        isUpdatingRef.current = true;

        const { scrollTop, containerHeight } = getScrollData();
        const stackPositionPx = parsePercentage(stackPosition, containerHeight);
        const scaleEndPositionPx = parsePercentage(scaleEndPosition, containerHeight);
        const endElement = useWindowScroll
            ? document.querySelector('.scroll-stack-end')
            : scrollerRef.current?.querySelector('.scroll-stack-end');
        const endElementTop = endElement ? getElementOffset(endElement) : 0;

        cardsRef.current.forEach((card, i) => {
            if (!card) return;

            const cardTop = getElementOffset(card);
            const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
            const triggerEnd = cardTop - scaleEndPositionPx;
            const pinStart = cardTop - stackPositionPx - itemStackDistance * i;
            const pinEnd = endElementTop - containerHeight / 2;
            const scaleProgress = calculateProgress(scrollTop, triggerStart, triggerEnd);
            const targetScale = baseScale + i * itemScale;
            const scale = 1 - scaleProgress * (1 - targetScale);
            const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

            let blur = 0;
            if (blurAmount) {
                let topCardIndex = 0;
                for (let j = 0; j < cardsRef.current.length; j += 1) {
                    const jCardTop = getElementOffset(cardsRef.current[j]);
                    const jTriggerStart = jCardTop - stackPositionPx - itemStackDistance * j;
                    if (scrollTop >= jTriggerStart) topCardIndex = j;
                }

                if (i < topCardIndex) {
                    blur = Math.max(0, (topCardIndex - i) * blurAmount);
                }
            }

            let translateY = 0;
            const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;

            if (isPinned) {
                translateY = scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
            } else if (scrollTop > pinEnd) {
                translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
            }

            const nextTransform = {
                translateY: Math.round(translateY * 100) / 100,
                scale: Math.round(scale * 1000) / 1000,
                rotation: Math.round(rotation * 100) / 100,
                blur: Math.round(blur * 100) / 100
            };
            const lastTransform = lastTransformsRef.current.get(i);
            const changed =
                !lastTransform ||
                Math.abs(lastTransform.translateY - nextTransform.translateY) > 0.1 ||
                Math.abs(lastTransform.scale - nextTransform.scale) > 0.001 ||
                Math.abs(lastTransform.rotation - nextTransform.rotation) > 0.1 ||
                Math.abs(lastTransform.blur - nextTransform.blur) > 0.1;

            if (changed) {
                card.style.transform = `translate3d(0, ${nextTransform.translateY}px, 0) scale(${nextTransform.scale}) rotate(${nextTransform.rotation}deg)`;
                card.style.filter = nextTransform.blur > 0 ? `blur(${nextTransform.blur}px)` : '';
                lastTransformsRef.current.set(i, nextTransform);
            }

            if (i === cardsRef.current.length - 1) {
                if (isPinned && !stackCompletedRef.current) {
                    stackCompletedRef.current = true;
                    onStackComplete?.();
                } else if (!isPinned && stackCompletedRef.current) {
                    stackCompletedRef.current = false;
                }
            }
        });

        isUpdatingRef.current = false;
    }, [
        baseScale,
        blurAmount,
        calculateProgress,
        getElementOffset,
        getScrollData,
        itemScale,
        itemStackDistance,
        onStackComplete,
        parsePercentage,
        rotationAmount,
        scaleEndPosition,
        stackPosition,
        useWindowScroll
    ]);

    const handleScroll = useCallback(() => {
        updateCardTransforms();
    }, [updateCardTransforms]);

    const setupLenis = useCallback(() => {
        if (useWindowScroll) {
            window.addEventListener('scroll', handleScroll, { passive: true });
            return undefined;
        }

        const options = {
            duration: 1.08,
            easing: (t) => Math.min(1, 1.001 - 2 ** (-10 * t)),
            smoothWheel: true,
            touchMultiplier: 1.4,
            infinite: false,
            wheelMultiplier: 1,
            lerp: 0.12,
            syncTouch: true,
            syncTouchLerp: 0.075
        };

        const lenis = new Lenis({
            ...options,
            wrapper: scrollerRef.current,
            content: scrollerRef.current?.querySelector('.scroll-stack-inner'),
            gestureOrientation: 'vertical',
            normalizeWheel: true
        });

        lenis.on('scroll', handleScroll);

        const raf = (time) => {
            lenis.raf(time);
            animationFrameRef.current = requestAnimationFrame(raf);
        };
        animationFrameRef.current = requestAnimationFrame(raf);
        lenisRef.current = lenis;
    }, [handleScroll, useWindowScroll]);

    useLayoutEffect(() => {
        const scroller = scrollerRef.current;
        if (!scroller) return undefined;

        const cards = Array.from(
            useWindowScroll
                ? scroller.querySelectorAll('.scroll-stack-card')
                : scroller.querySelectorAll('.scroll-stack-card')
        );
        cardsRef.current = cards;
        const transformsCache = lastTransformsRef.current;

        cards.forEach((card, i) => {
            card.style.marginBottom = i < cards.length - 1 ? `${itemDistance}px` : '0';
            card.style.willChange = 'transform, filter';
            card.style.transformOrigin = 'top center';
            card.style.backfaceVisibility = 'hidden';
            card.style.transform = 'translateZ(0)';
            card.style.webkitTransform = 'translateZ(0)';
            card.style.perspective = '1000px';
            card.style.webkitPerspective = '1000px';
        });

        setupLenis();
        updateCardTransforms();
        window.addEventListener('resize', updateCardTransforms);

        return () => {
            if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
            if (lenisRef.current) lenisRef.current.destroy();
            if (useWindowScroll) window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('resize', updateCardTransforms);
            stackCompletedRef.current = false;
            cardsRef.current = [];
            transformsCache.clear();
            isUpdatingRef.current = false;
        };
    }, [
        itemDistance,
        setupLenis,
        updateCardTransforms,
        useWindowScroll
    ]);

    return (
        <div className={`scroll-stack-scroller ${className}`.trim()} ref={scrollerRef}>
            <div className="scroll-stack-inner">
                {children}
                <div className="scroll-stack-end" />
            </div>
        </div>
    );
};

export default ScrollStack;
