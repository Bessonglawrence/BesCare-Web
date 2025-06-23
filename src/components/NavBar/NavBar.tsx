import React from 'react';

const tabs = [
    'Dashboard',
    'Carers',
    'Clients',
    'Manage',
    'Report',
    'Finance',
    'Admin',
];

const NavBar: React.FC = () => {
    return (
        <nav
            style={{
                display: 'flex',
                alignItems: 'center',
                padding: '0 24px',
                height: '80px',
                background: '#A5BFCC',
                boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
            }}
        >
            {/* Left: Icon */}
            <div style={{ marginRight: 32, display: 'flex', alignItems: 'center' }}>
                {/* Simple SVG icon */}
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" rx="8" fill="#1976d2" />
                    <text x="16" y="21" textAnchor="middle" fill="#fff" fontSize="16" fontFamily="Arial" fontWeight="bold">B</text>
                </svg>
            </div>

            {/* Middle: Tabs */}
            <div style={{ display: 'flex', flex: 1, justifyContent: 'center', gap: 32 }}>
                {tabs.map(tab => (
                    <button
                        key={tab}
                        style={{
                            background: 'none',
                            border: 'none',
                            fontSize: 16,
                            fontWeight: 'bold',
                            color: '#333',
                            cursor: 'pointer',
                            padding: '8px 12px',
                            borderRadius: 4,
                            transition: 'background 0.2s',
                        }}
                        onMouseOver={e => (e.currentTarget.style.background = 'lightblue')}
                        onMouseOut={e => (e.currentTarget.style.background = 'none')}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Right: Search Input */}
            <div style={{ marginLeft: 32 }}>
                <input
                    type="text"
                    placeholder="Search..."
                    style={{
                        padding: '8px 12px',
                        borderRadius: 4,
                        border: '1px solid #ccc',
                        fontSize: 14,
                        outline: 'none',
                        width: 300,
                    }}
                />
            </div>
        </nav>
    );
};

export default NavBar;