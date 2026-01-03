import React from 'react';
import './LiquidFilter.css';

const LiquidFilter = () => {
    return (
        <>
            <svg className="svg-filters">
                <defs>
                    <filter id="liquid">
                        <feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur" />
                        <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7" result="liquid" />
                        <feComposite in="SourceGraphic" in2="liquid" operator="atop" />
                    </filter>
                </defs>
            </svg>
            {/* 
        How to use: 
        Add class "liquid-target" to any container with blobs to apply this filter.
        .liquid-target { filter: url(#liquid); }
      */}
        </>
    );
};

export default LiquidFilter;
