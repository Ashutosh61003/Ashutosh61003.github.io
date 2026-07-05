import { useState } from 'react';
import './Folder.css';

const darkenColor = (hex, percent) => {
    let color = hex.startsWith('#') ? hex.slice(1) : hex;
    if (color.length === 3) {
        color = color.split('').map((value) => value + value).join('');
    }

    const number = Number.parseInt(color, 16);
    const r = Math.max(0, Math.min(255, Math.floor(((number >> 16) & 0xff) * (1 - percent))));
    const g = Math.max(0, Math.min(255, Math.floor(((number >> 8) & 0xff) * (1 - percent))));
    const b = Math.max(0, Math.min(255, Math.floor((number & 0xff) * (1 - percent))));

    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
};

const Folder = ({ color = '#168eea', size = 1, items = [], className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const papers = items.slice(0, 3);
    while (papers.length < 3) papers.push(null);

    const folderStyle = {
        '--folder-color': color,
        '--folder-back-color': darkenColor(color, 0.08),
        '--paper-1': darkenColor('#ffffff', 0.1),
        '--paper-2': darkenColor('#ffffff', 0.05),
        '--paper-3': '#ffffff'
    };

    return (
        <div className={`folder-wrap ${className}`.trim()} style={{ transform: `scale(${size})` }}>
            <div
                className={`folder ${isOpen ? 'is-open' : ''}`}
                style={folderStyle}
                tabIndex={0}
                role="button"
                aria-label={isOpen ? 'Close portfolio folder' : 'Open portfolio folder'}
                aria-pressed={isOpen}
                onClick={() => setIsOpen((open) => !open)}
                onKeyDown={(event) => {
                    if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault();
                        setIsOpen((open) => !open);
                    }
                }}
            >
                <div className="folder__back">
                    {papers.map((item, index) => (
                        <div className={`paper paper-${index + 1}`} key={index}>
                            {item}
                        </div>
                    ))}
                    <div className="folder__front" />
                    <div className="folder__front right" />
                </div>
            </div>
        </div>
    );
};

export default Folder;
