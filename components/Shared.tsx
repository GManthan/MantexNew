export function PcbBackground() {
    return (
        <div style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', opacity: 0.04 }}>
            <svg viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg"
                style={{ width: '100%', height: '100%' }} preserveAspectRatio="xMidYMid slice">
                <g stroke="#63B3ED" strokeWidth="1">
                    <line x1="0" y1="80" x2="300" y2="80" /><line x1="320" y1="80" x2="600" y2="80" />
                    <line x1="0" y1="200" x2="150" y2="200" /><line x1="150" y1="200" x2="150" y2="350" />
                    <line x1="150" y1="350" x2="400" y2="350" /><line x1="700" y1="120" x2="1200" y2="120" />
                    <line x1="800" y1="300" x2="1200" y2="300" /><line x1="0" y1="500" x2="250" y2="500" />
                    <line x1="250" y1="500" x2="250" y2="600" /><line x1="250" y1="600" x2="700" y2="600" />
                    <line x1="900" y1="550" x2="1200" y2="550" /><line x1="900" y1="550" x2="900" y2="450" />
                    <line x1="600" y1="450" x2="900" y2="450" />
                    <line x1="420" y1="260" x2="320" y2="260" /><line x1="320" y1="260" x2="320" y2="80" />
                    <line x1="480" y1="260" x2="600" y2="260" /><line x1="600" y1="260" x2="600" y2="350" />
                    <line x1="400" y1="350" x2="600" y2="350" />
                    <circle cx="300" cy="80" r="6" /><circle cx="150" cy="200" r="5" />
                    <circle cx="150" cy="350" r="5" /><circle cx="700" cy="120" r="6" />
                    <circle cx="800" cy="300" r="5" /><circle cx="250" cy="500" r="6" />
                    <circle cx="250" cy="600" r="5" /><circle cx="900" cy="550" r="6" />
                    <circle cx="900" cy="450" r="5" /><circle cx="600" cy="450" r="5" />
                    <circle cx="320" cy="260" r="4" /><circle cx="600" cy="260" r="4" />
                    <rect x="420" y="240" width="60" height="40" rx="2" />
                    <rect x="430" y="234" width="10" height="6" rx="1" /><rect x="452" y="234" width="10" height="6" rx="1" />
                    <rect x="430" y="280" width="10" height="6" rx="1" /><rect x="452" y="280" width="10" height="6" rx="1" />
                    <rect x="414" y="250" width="6" height="8" rx="1" /><rect x="414" y="264" width="6" height="8" rx="1" />
                    <rect x="480" y="250" width="6" height="8" rx="1" /><rect x="480" y="264" width="6" height="8" rx="1" />
                    <rect x="580" y="77" width="20" height="6" rx="1" /><rect x="620" y="77" width="20" height="6" rx="1" />
                    <line x1="600" y1="80" x2="620" y2="80" />
                    <rect x="1100" y="280" width="12" height="40" rx="1" />
                    <rect x="1116" y="284" width="6" height="6" rx="1" /><rect x="1116" y="296" width="6" height="6" rx="1" />
                    <rect x="1116" y="308" width="6" height="6" rx="1" />
                </g>
            </svg>
        </div>
    )
}

export function Divider() {
    return (
        <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, var(--border), transparent)' }} />
    )
}
