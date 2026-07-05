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
                    <filter
                        id="container-glass"
                        x="0%"
                        y="0%"
                        width="100%"
                        height="100%"
                        colorInterpolationFilters="sRGB"
                    >
                        <feTurbulence
                            type="fractalNoise"
                            baseFrequency="0.05 0.05"
                            numOctaves="1"
                            seed="1"
                            result="turbulence"
                        />
                        <feGaussianBlur in="turbulence" stdDeviation="2" result="blurredNoise" />
                        <feDisplacementMap
                            in="SourceGraphic"
                            in2="blurredNoise"
                            scale="42"
                            xChannelSelector="R"
                            yChannelSelector="B"
                            result="displaced"
                        />
                        <feGaussianBlur in="displaced" stdDeviation="2" result="finalBlur" />
                        <feComposite in="finalBlur" in2="finalBlur" operator="over" />
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
