import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { useGesture } from '@use-gesture/react';
import './DomeGallery.css';

const DEFAULT_IMAGES = [
  {
    src: 'https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=1200&q=90',
    title: 'TaskFlow AI',
    category: 'AI productivity'
  },
  {
    src: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=90',
    title: 'Pulse',
    category: 'Analytics'
  },
  {
    src: 'https://images.unsplash.com/photo-1559028006-448665bd7c7f?auto=format&fit=crop&w=1200&q=90',
    title: 'Universe',
    category: 'Learning platform'
  }
];

const DEFAULTS = {
  maxVerticalRotationDeg: 5,
  dragSensitivity: 20,
  enlargeTransitionMs: 300,
  segments: 35
};

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const wrapAngleSigned = (degrees) => {
  const angle = (((degrees + 180) % 360) + 360) % 360;
  return angle - 180;
};

function buildItems(pool, segments) {
  const xCols = Array.from({ length: segments }, (_, index) => -(segments - 1) + index * 2);
  const yRows = Array.from({ length: segments }, (_, index) => -(segments - 1) + index * 2);

  const coords = xCols.flatMap((x, column) => {
    const stagger = column % 2 === 0 ? 0 : 1;
    return yRows.map((y) => ({ x, y: y + stagger, sizeX: 1.55, sizeY: 1.55 }));
  });

  const normalized = pool.length
    ? pool.map((image) => (typeof image === 'string' ? { src: image, alt: '' } : image))
    : DEFAULT_IMAGES;

  return coords.map((coord, index) => ({
    ...coord,
    ...normalized[index % normalized.length]
  }));
}

export default function DomeGallery({
  images = DEFAULT_IMAGES,
  fit = 0.5,
  fitBasis = 'auto',
  minRadius = 600,
  maxRadius = Infinity,
  padFactor = 0.25,
  overlayBlurColor = 'rgba(22, 142, 234, 0.88)',
  maxVerticalRotationDeg = DEFAULTS.maxVerticalRotationDeg,
  dragSensitivity = DEFAULTS.dragSensitivity,
  enlargeTransitionMs = DEFAULTS.enlargeTransitionMs,
  segments = DEFAULTS.segments,
  dragDampening = 2,
  openedImageWidth = '440px',
  openedImageHeight = '440px',
  imageBorderRadius = '30px',
  openedImageBorderRadius = '34px',
  grayscale = false
}) {
  const rootRef = useRef(null);
  const mainRef = useRef(null);
  const sphereRef = useRef(null);
  const rotationRef = useRef({ x: 0, y: 0 });
  const startRotationRef = useRef({ x: 0, y: 0 });
  const movedRef = useRef(false);
  const inertiaRef = useRef(null);
  const [openedItem, setOpenedItem] = useState(null);

  const items = useMemo(() => buildItems(images, segments), [images, segments]);

  const applyTransform = useCallback((xDeg, yDeg) => {
    if (!sphereRef.current) return;
    sphereRef.current.style.transform = `translateZ(calc(var(--radius) * -1)) rotateX(${xDeg}deg) rotateY(${yDeg}deg)`;
  }, []);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const resizeObserver = new ResizeObserver((entries) => {
      const rect = entries[0].contentRect;
      const width = Math.max(1, rect.width);
      const height = Math.max(1, rect.height);
      const minDimension = Math.min(width, height);
      const maxDimension = Math.max(width, height);
      const aspect = width / height;

      let basis;
      switch (fitBasis) {
        case 'min':
          basis = minDimension;
          break;
        case 'max':
          basis = maxDimension;
          break;
        case 'width':
          basis = width;
          break;
        case 'height':
          basis = height;
          break;
        default:
          basis = aspect >= 1.3 ? width : minDimension;
      }

      const heightGuard = height * 1.35;
      const radius = Math.round(clamp(Math.min(basis * fit, heightGuard), minRadius, maxRadius));
      const viewerPad = Math.max(8, Math.round(minDimension * padFactor));

      root.style.setProperty('--radius', `${radius}px`);
      root.style.setProperty('--viewer-pad', `${viewerPad}px`);
      root.style.setProperty('--overlay-blur-color', overlayBlurColor);
      root.style.setProperty('--tile-radius', imageBorderRadius);
      root.style.setProperty('--enlarge-radius', openedImageBorderRadius);
      root.style.setProperty('--image-filter', grayscale ? 'grayscale(1)' : 'none');
      applyTransform(rotationRef.current.x, rotationRef.current.y);
    });

    resizeObserver.observe(root);
    return () => resizeObserver.disconnect();
  }, [
    applyTransform,
    fit,
    fitBasis,
    grayscale,
    imageBorderRadius,
    maxRadius,
    minRadius,
    openedImageBorderRadius,
    overlayBlurColor,
    padFactor
  ]);

  const stopInertia = useCallback(() => {
    if (!inertiaRef.current) return;
    cancelAnimationFrame(inertiaRef.current);
    inertiaRef.current = null;
  }, []);

  const startInertia = useCallback(
    (velocityX, velocityY) => {
      let xVelocity = clamp(velocityX, -1.4, 1.4) * 58;
      let yVelocity = clamp(velocityY, -1.4, 1.4) * 58;
      const dampening = clamp(dragDampening, 0, 2);
      const friction = 0.9 + dampening * 0.035;

      const step = () => {
        xVelocity *= friction;
        yVelocity *= friction;

        if (Math.abs(xVelocity) < 0.03 && Math.abs(yVelocity) < 0.03) {
          inertiaRef.current = null;
          return;
        }

        const nextX = wrapAngleSigned(rotationRef.current.x + yVelocity / 190);
        const nextY = wrapAngleSigned(rotationRef.current.y + xVelocity / 190);
        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY);
        inertiaRef.current = requestAnimationFrame(step);
      };

      stopInertia();
      inertiaRef.current = requestAnimationFrame(step);
    },
    [applyTransform, dragDampening, stopInertia]
  );

  useGesture(
    {
      onDragStart: () => {
        if (openedItem) return;
        stopInertia();
        movedRef.current = false;
        startRotationRef.current = { ...rotationRef.current };
      },
      onDrag: ({ movement, velocity = [0, 0], direction = [0, 0], last }) => {
        if (openedItem) return;

        const [moveX, moveY] = movement;
        if (Math.abs(moveX) + Math.abs(moveY) > 8) {
          movedRef.current = true;
        }

        const nextX = wrapAngleSigned(startRotationRef.current.x + moveY / dragSensitivity);
        const nextY = wrapAngleSigned(startRotationRef.current.y + moveX / dragSensitivity);
        rotationRef.current = { x: nextX, y: nextY };
        applyTransform(nextX, nextY);

        if (last) {
          const [velocityX, velocityY] = velocity;
          const [directionX, directionY] = direction;
          startInertia(velocityX * directionX, velocityY * directionY);
          window.setTimeout(() => {
            movedRef.current = false;
          }, 90);
        }
      }
    },
    { target: mainRef, eventOptions: { passive: true } }
  );

  useEffect(() => {
    if (!openedItem) return undefined;
    document.body.classList.add('dg-scroll-lock');
    const closeOnEscape = (event) => {
      if (event.key === 'Escape') {
        setOpenedItem(null);
      }
    };
    window.addEventListener('keydown', closeOnEscape);
    return () => {
      document.body.classList.remove('dg-scroll-lock');
      window.removeEventListener('keydown', closeOnEscape);
    };
  }, [openedItem]);

  useEffect(() => () => stopInertia(), [stopInertia]);

  const openTile = (item) => {
    if (movedRef.current) return;
    setOpenedItem(item);
  };

  useEffect(() => {
    const main = mainRef.current;
    if (!main) return undefined;

    const handleWheel = (event) => {
      if (openedItem) return;
      event.preventDefault();
      stopInertia();

      const nextX = wrapAngleSigned(rotationRef.current.x + event.deltaY / 18);
      const nextY = wrapAngleSigned(rotationRef.current.y - event.deltaX / 18);

      rotationRef.current = { x: nextX, y: nextY };
      applyTransform(nextX, nextY);
    };

    main.addEventListener('wheel', handleWheel, { passive: false });
    return () => main.removeEventListener('wheel', handleWheel);
  }, [applyTransform, openedItem, stopInertia]);

  return (
    <div
      ref={rootRef}
      className="sphere-root"
      style={{
        '--segments-x': segments,
        '--segments-y': segments,
        '--overlay-blur-color': overlayBlurColor,
        '--tile-radius': imageBorderRadius,
        '--enlarge-radius': openedImageBorderRadius,
        '--image-filter': grayscale ? 'grayscale(1)' : 'none',
        '--enlarge-width': openedImageWidth,
        '--enlarge-height': openedImageHeight,
        '--enlarge-duration': `${enlargeTransitionMs}ms`
      }}
      data-enlarging={openedItem ? 'true' : 'false'}
    >
      <main ref={mainRef} className="sphere-main" aria-label="Draggable project dome gallery">
        <div className="stage">
          <div ref={sphereRef} className="sphere">
            {items.map((item, index) => (
              <div
                key={`${item.x},${item.y},${index}`}
                className="item"
                data-src={item.src}
                data-offset-x={item.x}
                data-offset-y={item.y}
                data-size-x={item.sizeX}
                data-size-y={item.sizeY}
                style={{
                  '--offset-x': item.x,
                  '--offset-y': item.y,
                  '--item-size-x': item.sizeX,
                  '--item-size-y': item.sizeY
                }}
              >
                <button
                  className="item__image"
                  type="button"
                  aria-label={`Open ${item.title || item.alt || 'project'}`}
                  onClick={() => openTile(item)}
                >
                  <img src={item.src} draggable={false} alt={item.alt || item.title || ''} />
                  {(item.title || item.category) && (
                    <span className="item__label">
                      {item.category && <small>{item.category}</small>}
                      {item.title && <strong>{item.title}</strong>}
                    </span>
                  )}
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="overlay" />
        <div className="overlay overlay--blur" />
        <div className="edge-fade edge-fade--top" />
        <div className="edge-fade edge-fade--bottom" />

        <div className="viewer">
          <button
            className="scrim"
            type="button"
            aria-label="Close project preview"
            onClick={() => setOpenedItem(null)}
          />

          {openedItem && (
            <article className="enlarge" aria-label={`${openedItem.title || 'Project'} preview`}>
              <img src={openedItem.src} alt={openedItem.alt || openedItem.title || ''} />
              <div className="enlarge__copy">
                {openedItem.category && <span>{openedItem.category}</span>}
                <h2>{openedItem.title || openedItem.alt || 'Project'}</h2>
                {openedItem.description && <p>{openedItem.description}</p>}
              </div>
            </article>
          )}
        </div>
      </main>
    </div>
  );
}
