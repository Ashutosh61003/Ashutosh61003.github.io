import React, { useEffect, useMemo, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { Check, Loader2, SendHorizontal, X } from 'lucide-react';
import './SlideSendButton.css';

const DRAG_LIMIT = 168;
const DRAG_THRESHOLD = 0.86;

const SlideSendButton = ({ status = 'idle', onComplete, disabled = false }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [completed, setCompleted] = useState(false);
    const dragX = useMotionValue(0);
    const springX = useSpring(dragX, { stiffness: 420, damping: 42, mass: 0.8 });
    const fillWidth = useTransform(springX, (value) => value + 48);

    const label = useMemo(() => {
        if (status === 'sending') return 'Sending';
        if (status === 'sent') return 'Sent';
        if (status === 'error') return 'Try again';
        return 'Slide to send';
    }, [status]);

    useEffect(() => {
        if (status === 'idle') {
            setCompleted(false);
            dragX.set(0);
        }

        if (status === 'sent' || status === 'sending' || status === 'error') {
            setCompleted(true);
            dragX.set(DRAG_LIMIT);
        }
    }, [dragX, status]);

    const handleDragEnd = () => {
        setIsDragging(false);
        if (completed || disabled) return;

        const progress = dragX.get() / DRAG_LIMIT;
        if (progress >= DRAG_THRESHOLD) {
            const accepted = onComplete?.();
            if (accepted === false) {
                dragX.set(0);
                return;
            }
            setCompleted(true);
            dragX.set(DRAG_LIMIT);
            return;
        }

        dragX.set(0);
    };

    const handleDrag = (_event, info) => {
        if (completed || disabled) return;
        dragX.set(Math.max(0, Math.min(info.offset.x, DRAG_LIMIT)));
    };

    const handleClick = () => {
        if (disabled || status === 'sending') return;
        const accepted = onComplete?.();
        if (accepted !== false) {
            setCompleted(true);
            dragX.set(DRAG_LIMIT);
        }
    };

    return (
        <div className={`slide-send ${status !== 'idle' ? `is-${status}` : ''} ${completed ? 'is-completed' : ''}`}>
            <motion.div className="slide-send-fill" style={{ width: fillWidth }} />
            <span className="slide-send-label">{label}</span>
            <motion.button
                type="button"
                className="slide-send-handle"
                drag={completed || disabled ? false : 'x'}
                dragConstraints={{ left: 0, right: DRAG_LIMIT }}
                dragElastic={0.04}
                dragMomentum={false}
                style={{ x: springX }}
                onDragStart={() => setIsDragging(true)}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                onClick={handleClick}
                disabled={disabled || status === 'sending'}
                aria-label="Send message"
            >
                {status === 'sending' && <Loader2 className="slide-spin" size={20} />}
                {status === 'sent' && <Check size={20} />}
                {status === 'error' && <X size={20} />}
                {status === 'idle' && <SendHorizontal size={20} />}
            </motion.button>
            <span className={`slide-send-hint ${isDragging ? 'is-active' : ''}`} aria-hidden="true">
                drag
            </span>
        </div>
    );
};

export default SlideSendButton;
