// SVG Sprites for Crossroads Game
const Sprites = {
    // Main Character - Diane
    diane_neutral: `
        <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <!-- Body -->
            <ellipse cx="100" cy="200" rx="50" ry="80" fill="#e94560"/>
            <!-- Head -->
            <circle cx="100" cy="80" r="40" fill="#f5d5c4"/>
            <!-- Hair -->
            <path d="M 60 70 Q 60 40 100 40 Q 140 40 140 70 L 140 90 Q 100 80 60 90 Z" fill="#8b4513"/>
            <!-- Eyes -->
            <circle cx="85" cy="75" r="5" fill="#2c3e50"/>
            <circle cx="115" cy="75" r="5" fill="#2c3e50"/>
            <!-- Mouth (neutral) -->
            <line x1="90" y1="95" x2="110" y2="95" stroke="#2c3e50" stroke-width="2"/>
            <!-- Arms -->
            <rect x="50" y="180" width="15" height="60" fill="#f5d5c4" transform="rotate(-20 57 180)"/>
            <rect x="135" y="180" width="15" height="60" fill="#f5d5c4" transform="rotate(20 143 180)"/>
            <!-- Legs -->
            <rect x="75" y="270" width="20" height="80" fill="#34495e"/>
            <rect x="105" y="270" width="20" height="80" fill="#34495e"/>
        </svg>
    `,

    diane_happy: `
        <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="200" rx="50" ry="80" fill="#e94560"/>
            <circle cx="100" cy="80" r="40" fill="#f5d5c4"/>
            <path d="M 60 70 Q 60 40 100 40 Q 140 40 140 70 L 140 90 Q 100 80 60 90 Z" fill="#8b4513"/>
            <circle cx="85" cy="75" r="5" fill="#2c3e50"/>
            <circle cx="115" cy="75" r="5" fill="#2c3e50"/>
            <!-- Smile -->
            <path d="M 85 90 Q 100 100 115 90" stroke="#2c3e50" stroke-width="2" fill="none"/>
            <rect x="50" y="180" width="15" height="60" fill="#f5d5c4" transform="rotate(-30 57 180)"/>
            <rect x="135" y="180" width="15" height="60" fill="#f5d5c4" transform="rotate(30 143 180)"/>
            <rect x="75" y="270" width="20" height="80" fill="#34495e"/>
            <rect x="105" y="270" width="20" height="80" fill="#34495e"/>
        </svg>
    `,

    diane_worried: `
        <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="200" rx="50" ry="80" fill="#e94560"/>
            <circle cx="100" cy="80" r="40" fill="#f5d5c4"/>
            <path d="M 60 70 Q 60 40 100 40 Q 140 40 140 70 L 140 90 Q 100 80 60 90 Z" fill="#8b4513"/>
            <circle cx="85" cy="75" r="6" fill="#2c3e50"/>
            <circle cx="115" cy="75" r="6" fill="#2c3e50"/>
            <!-- Worried mouth -->
            <path d="M 85 100 Q 100 95 115 100" stroke="#2c3e50" stroke-width="2" fill="none"/>
            <!-- Worried eyebrows -->
            <path d="M 75 65 L 90 63" stroke="#2c3e50" stroke-width="2"/>
            <path d="M 110 63 L 125 65" stroke="#2c3e50" stroke-width="2"/>
            <rect x="50" y="180" width="15" height="60" fill="#f5d5c4"/>
            <rect x="135" y="180" width="15" height="60" fill="#f5d5c4"/>
            <rect x="75" y="270" width="20" height="80" fill="#34495e"/>
            <rect x="105" y="270" width="20" height="80" fill="#34495e"/>
        </svg>
    `,

    diane_dead: `
        <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <!-- Lying down -->
            <ellipse cx="100" cy="150" rx="80" ry="40" fill="#e94560"/>
            <circle cx="60" cy="130" r="35" fill="#f5d5c4"/>
            <path d="M 30 120 Q 30 95 60 95 Q 90 95 90 120" fill="#8b4513"/>
            <!-- X eyes -->
            <line x1="50" y1="125" x2="58" y2="133" stroke="#2c3e50" stroke-width="2"/>
            <line x1="58" y1="125" x2="50" y2="133" stroke="#2c3e50" stroke-width="2"/>
            <line x1="62" y1="125" x2="70" y2="133" stroke="#2c3e50" stroke-width="2"/>
            <line x1="70" y1="125" x2="62" y2="133" stroke="#2c3e50" stroke-width="2"/>
            <!-- Tombstone in background -->
            <rect x="140" y="80" width="40" height="60" rx="20" ry="20" fill="#7f8c8d"/>
            <text x="160" y="120" font-size="30" text-anchor="middle" fill="#2c3e50">RIP</text>
        </svg>
    `,

    // Mark - The Husband
    mark: `
        <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="200" rx="55" ry="85" fill="#3498db"/>
            <circle cx="100" cy="80" r="42" fill="#f5d5c4"/>
            <rect x="70" y="50" width="60" height="35" fill="#2c3e50"/>
            <circle cx="85" cy="80" r="4" fill="#2c3e50"/>
            <circle cx="115" cy="80" r="4" fill="#2c3e50"/>
            <!-- Beard -->
            <path d="M 70 100 Q 100 110 130 100" fill="#2c3e50"/>
            <rect x="50" y="185" width="15" height="60" fill="#f5d5c4"/>
            <rect x="135" y="185" width="15" height="60" fill="#f5d5c4"/>
            <rect x="75" y="270" width="22" height="80" fill="#2c3e50"/>
            <rect x="103" y="270" width="22" height="80" fill="#2c3e50"/>
        </svg>
    `,

    // Kids
    kids: `
        <svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg">
            <!-- Kid 1 -->
            <circle cx="80" cy="60" r="25" fill="#f5d5c4"/>
            <ellipse cx="80" cy="130" rx="30" ry="50" fill="#f39c12"/>
            <circle cx="72" cy="58" r="3" fill="#2c3e50"/>
            <circle cx="88" cy="58" r="3" fill="#2c3e50"/>
            <path d="M 75 68 Q 80 72 85 68" stroke="#2c3e50" stroke-width="1.5" fill="none"/>
            <rect x="60" y="115" width="10" height="40" fill="#f5d5c4"/>
            <rect x="90" y="115" width="10" height="40" fill="#f5d5c4"/>

            <!-- Kid 2 -->
            <circle cx="170" cy="65" r="28" fill="#f5d5c4"/>
            <ellipse cx="170" cy="140" rx="35" ry="55" fill="#9b59b6"/>
            <path d="M 145 60 Q 145 40 170 40 Q 195 40 195 60" fill="#e67e22"/>
            <circle cx="160" cy="62" r="3" fill="#2c3e50"/>
            <circle cx="180" cy="62" r="3" fill="#2c3e50"/>
            <path d="M 162 75 Q 170 80 178 75" stroke="#2c3e50" stroke-width="1.5" fill="none"/>
            <rect x="145" y="125" width="12" height="45" fill="#f5d5c4"/>
            <rect x="178" y="125" width="12" height="45" fill="#f5d5c4"/>
        </svg>
    `,

    // Dr. Chen - Therapist
    dr_chen: `
        <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="200" rx="50" ry="80" fill="#ecf0f1"/>
            <circle cx="100" cy="80" r="40" fill="#f5d5c4"/>
            <rect x="65" y="45" width="70" height="50" fill="#2c3e50"/>
            <!-- Glasses -->
            <circle cx="85" cy="75" r="12" fill="none" stroke="#2c3e50" stroke-width="2"/>
            <circle cx="115" cy="75" r="12" fill="none" stroke="#2c3e50" stroke-width="2"/>
            <line x1="97" y1="75" x2="103" y2="75" stroke="#2c3e50" stroke-width="2"/>
            <circle cx="85" cy="75" r="3" fill="#2c3e50"/>
            <circle cx="115" cy="75" r="3" fill="#2c3e50"/>
            <path d="M 90 95 Q 100 98 110 95" stroke="#2c3e50" stroke-width="2" fill="none"/>
            <!-- Clipboard -->
            <rect x="130" y="180" width="25" height="35" fill="#95a5a6" transform="rotate(15 142 197)"/>
            <rect x="50" y="180" width="15" height="60" fill="#f5d5c4"/>
            <rect x="135" y="180" width="15" height="60" fill="#f5d5c4"/>
            <rect x="75" y="270" width="20" height="80" fill="#34495e"/>
            <rect x="105" y="270" width="20" height="80" fill="#34495e"/>
        </svg>
    `,

    // Stephanie - Marketing Boss
    stephanie: `
        <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="200" rx="48" ry="78" fill="#2c3e50"/>
            <circle cx="100" cy="80" r="38" fill="#f5d5c4"/>
            <path d="M 65 75 Q 65 45 100 50 Q 135 45 135 75 L 135 85" fill="#c0392b"/>
            <circle cx="88" cy="77" r="4" fill="#2c3e50"/>
            <circle cx="112" cy="77" r="4" fill="#2c3e50"/>
            <!-- Lipstick -->
            <ellipse cx="100" cy="95" rx="8" ry="5" fill="#e74c3c"/>
            <!-- Power pose arms -->
            <rect x="45" y="180" width="15" height="50" fill="#f5d5c4" transform="rotate(-45 52 180)"/>
            <rect x="140" y="180" width="15" height="50" fill="#f5d5c4" transform="rotate(45 148 180)"/>
            <rect x="75" y="270" width="20" height="80" fill="#2c3e50"/>
            <rect x="105" y="270" width="20" height="80" fill="#2c3e50"/>
        </svg>
    `,

    // Alex - Marketing Colleague (Forbidden Romance)
    alex: `
        <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="200" rx="52" ry="82" fill="#16a085"/>
            <circle cx="100" cy="80" r="40" fill="#f5d5c4"/>
            <path d="M 70 60 Q 80 50 100 55 Q 120 50 130 60" fill="#34495e"/>
            <circle cx="87" cy="78" r="4" fill="#2c3e50"/>
            <circle cx="113" cy="78" r="4" fill="#2c3e50"/>
            <!-- Charming smile -->
            <path d="M 85 92 Q 100 100 115 92" stroke="#2c3e50" stroke-width="2" fill="none"/>
            <!-- Holding coffee -->
            <rect x="135" y="190" width="8" height="15" fill="#8b4513"/>
            <ellipse cx="139" cy="190" rx="6" ry="4" fill="#8b4513"/>
            <rect x="50" y="185" width="15" height="60" fill="#f5d5c4"/>
            <rect x="135" y="185" width="15" height="60" fill="#f5d5c4"/>
            <rect x="75" y="270" width="20" height="80" fill="#2c3e50"/>
            <rect x="105" y="270" width="20" height="80" fill="#34495e"/>
        </svg>
    `,

    // James - University Department Head
    james: `
        <svg viewBox="0 0 200 300" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="100" cy="200" rx="53" ry="83" fill="#8e44ad"/>
            <circle cx="100" cy="80" r="40" fill="#f5d5c4"/>
            <path d="M 75 70 Q 80 50 100 52 Q 120 50 125 70" fill="#95a5a6"/>
            <!-- Reading glasses on chain -->
            <circle cx="85" cy="77" r="10" fill="none" stroke="#7f8c8d" stroke-width="1.5"/>
            <circle cx="115" cy="77" r="10" fill="none" stroke="#7f8c8d" stroke-width="1.5"/>
            <circle cx="85" cy="77" r="3" fill="#2c3e50"/>
            <circle cx="115" cy="77" r="3" fill="#2c3e50"/>
            <line x1="95" y1="77" x2="105" y2="77" stroke="#7f8c8d" stroke-width="1.5"/>
            <line x1="90" y1="95" x2="110" y2="95" stroke="#2c3e50" stroke-width="2"/>
            <!-- Book in hand -->
            <rect x="45" y="195" width="18" height="25" fill="#e67e22"/>
            <rect x="50" y="185" width="15" height="60" fill="#f5d5c4"/>
            <rect x="135" y="185" width="15" height="60" fill="#f5d5c4"/>
            <rect x="75" y="270" width="20" height="80" fill="#34495e"/>
            <rect x="105" y="270" width="20" height="80" fill="#34495e"/>
        </svg>
    `,

    // Scenes
    office: `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#34495e"/>
            <!-- Desk -->
            <rect x="50" y="180" width="300" height="15" fill="#8b4513"/>
            <rect x="60" y="195" width="10" height="80" fill="#8b4513"/>
            <rect x="330" y="195" width="10" height="80" fill="#8b4513"/>
            <!-- Computer -->
            <rect x="150" y="140" width="100" height="70" fill="#2c3e50"/>
            <rect x="160" y="150" width="80" height="50" fill="#3498db"/>
            <!-- Window -->
            <rect x="280" y="50" width="80" height="100" fill="#5dade2"/>
            <rect x="318" y="50" width="2" height="100" fill="#2c3e50"/>
            <rect x="280" y="98" width="80" height="2" fill="#2c3e50"/>
        </svg>
    `,

    classroom: `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#ecf0f1"/>
            <!-- Blackboard -->
            <rect x="50" y="50" width="300" height="150" fill="#2c3e50"/>
            <text x="200" y="100" font-size="20" fill="#fff" text-anchor="middle">Philosophy 101</text>
            <!-- Chalk -->
            <rect x="310" y="185" width="30" height="8" fill="#95a5a6"/>
            <!-- Desks -->
            <rect x="80" y="220" width="60" height="40" fill="#8b4513"/>
            <rect x="160" y="220" width="60" height="40" fill="#8b4513"/>
            <rect x="240" y="220" width="60" height="40" fill="#8b4513"/>
        </svg>
    `,

    home: `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#f39c12"/>
            <!-- Couch -->
            <rect x="100" y="180" width="200" height="80" fill="#e74c3c"/>
            <rect x="90" y="170" width="220" height="15" fill="#c0392b"/>
            <!-- TV -->
            <rect x="150" y="80" width="100" height="70" fill="#2c3e50"/>
            <rect x="160" y="90" width="80" height="50" fill="#3498db"/>
            <!-- Picture frame -->
            <rect x="50" y="70" width="60" height="80" fill="#8b4513"/>
            <rect x="55" y="75" width="50" height="70" fill="#f5d5c4"/>
        </svg>
    `,

    cafe: `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#d35400"/>
            <!-- Table -->
            <ellipse cx="200" cy="200" rx="80" ry="30" fill="#8b4513"/>
            <!-- Coffee cups -->
            <rect x="170" y="180" width="20" height="25" rx="3" fill="#fff"/>
            <ellipse cx="180" cy="180" rx="12" ry="5" fill="#6f4e37"/>
            <rect x="210" y="180" width="20" height="25" rx="3" fill="#fff"/>
            <ellipse cx="220" cy="180" rx="12" ry="5" fill="#6f4e37"/>
            <!-- Menu board -->
            <rect x="50" y="50" width="120" height="100" fill="#2c3e50"/>
            <text x="110" y="80" font-size="14" fill="#fff" text-anchor="middle">TODAY'S</text>
            <text x="110" y="100" font-size="14" fill="#fff" text-anchor="middle">SPECIAL</text>
        </svg>
    `,

    airport: `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#bdc3c7"/>
            <!-- Departure board -->
            <rect x="100" y="50" width="200" height="80" fill="#2c3e50"/>
            <text x="200" y="80" font-size="16" fill="#f39c12" text-anchor="middle">DEPARTURES</text>
            <text x="200" y="105" font-size="12" fill="#fff" text-anchor="middle">BALI - ON TIME</text>
            <!-- Suitcase -->
            <rect x="280" y="200" width="60" height="70" rx="5" fill="#e74c3c"/>
            <rect x="305" y="185" width="10" height="20" fill="#c0392b"/>
            <!-- Airplane symbol -->
            <path d="M 80 180 L 120 180 L 140 200 L 120 200 L 100 220 L 90 220 L 100 200 L 70 200 L 60 210 L 55 210 L 60 190 L 55 170 L 60 170 L 70 180 Z" fill="#34495e"/>
        </svg>
    `,

    time_loop: `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#0f0f0f"/>
            <!-- Spiral/Vortex -->
            <circle cx="200" cy="150" r="100" fill="none" stroke="#9b59b6" stroke-width="3"/>
            <circle cx="200" cy="150" r="75" fill="none" stroke="#8e44ad" stroke-width="3"/>
            <circle cx="200" cy="150" r="50" fill="none" stroke="#7d3c98" stroke-width="3"/>
            <circle cx="200" cy="150" r="25" fill="none" stroke="#6c3483" stroke-width="3"/>
            <!-- Clock hands -->
            <line x1="200" y1="150" x2="200" y2="100" stroke="#e74c3c" stroke-width="4"/>
            <line x1="200" y1="150" x2="230" y2="150" stroke="#e74c3c" stroke-width="3"/>
            <!-- Arrows forming loop -->
            <path d="M 300 150 Q 300 50 200 50" stroke="#f39c12" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
            <path d="M 100 150 Q 100 250 200 250" stroke="#f39c12" stroke-width="3" fill="none" marker-end="url(#arrowhead)"/>
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="10" refX="5" refY="5" orient="auto">
                    <polygon points="0 0, 10 5, 0 10" fill="#f39c12"/>
                </marker>
            </defs>
        </svg>
    `,

    mysterious_door: `
        <svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg">
            <rect width="400" height="300" fill="#2c3e50"/>
            <!-- Door -->
            <rect x="150" y="80" width="100" height="180" rx="5" fill="#8b4513"/>
            <circle cx="230" cy="170" r="5" fill="#f39c12"/>
            <!-- Light from under door -->
            <path d="M 150 260 L 140 280 L 260 280 L 250 260 Z" fill="#f39c12" opacity="0.5"/>
            <!-- Question marks -->
            <text x="100" y="150" font-size="40" fill="#f39c12" opacity="0.7">?</text>
            <text x="280" y="120" font-size="40" fill="#f39c12" opacity="0.7">?</text>
            <text x="200" y="50" font-size="50" fill="#f39c12" opacity="0.9">?</text>
        </svg>
    `
};

// Helper function to get sprite by name
function getSprite(spriteName) {
    return Sprites[spriteName] || Sprites.diane_neutral;
}
