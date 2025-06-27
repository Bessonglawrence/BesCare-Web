import React from 'react';
import { NavLink } from 'react-router-dom';

const tabs = [
    { name: 'Carers', path: '/carers' },
    { name: 'Service Users', path: '/service-users' },
    { name: 'Rotas', path: '/rotas' },
];

const NavBar: React.FC = () => {
    return (
        <nav
            style={{
            display: 'flex',
            width: '88%',
            alignItems: 'center',
            height: '80px',
            padding: '18px 20px',
            marginLeft: 140,
            background: 'white',
            position: 'fixed',   
            top: 0,  
            marginBottom: 20,       
        }}
        >
            {/* Left: Icon */}
            <div style={{ marginRight: 32, display: 'flex', alignItems: 'center' }}>
                <img
                    src="/BesCare.png"
                    alt="Logo"
                    style={{ width: 260, height: 200, marginRight: 8 }}
                />
            </div>

            {/* Right: Search Input */}
            <div style={{ marginLeft: 32, display: 'flex', alignItems: 'center', flex: 1 }}>
                <input
                    type="text"
                    placeholder="Search here..."
                    autoFocus
                    className="search-input"
                    style={{
                        padding: '8px 12px',
                        borderRadius: 4,
                        border: '1.5px solid #ccc',
                        fontSize: 18,
                        outline: 'none',
                        width: 350,
                        height: 28,
                        transition: 'border-color 0.3s',
                        borderWidth: 1.5,
                        fontWeight: 'bold',
                        color: '#333',
                        marginLeft: 200,
                    }}
                    onFocus={e => (e.currentTarget.style.borderColor = '#90caf9')}
                    onBlur={e => (e.currentTarget.style.borderColor = '#ccc')}
                />
                <span
                    onClick={() => alert('Search functionality not implemented yet')}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            alert('Search functionality not implemented yet');
                        }
                    }}
                    role="img"
                    aria-label="search"
                    style={{
                        marginLeft: -32,
                        marginRight: 16,
                        fontSize: 30,
                        marginTop: 6,
                        color: '#888',
                        cursor: 'pointer',
                        background: 'transparent',
                        zIndex: 1,
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >🔍</span>
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: 25, marginLeft: 'auto', gap: 24, marginRight: 80 }}>
                    <button style={{
                        background: 'none',
                        border: 'none',
                        color: '#1976d2',
                        fontSize: 16,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                    }}>
                        <span role="img" aria-label="help" style={{ fontSize: 20 }}>❓</span>
                        Help
                    </button>
                    <button style={{
                        background: 'none',
                        border: 'none',
                        color: '#1976d2',
                        fontSize: 16,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                    }}>
                        <span role="img" aria-label="settings" style={{ fontSize: 20 }}>⚙️</span>
                        Setting
                    </button>
                    <button style={{
                        background: 'none',
                        border: 'none',
                        color: '#d32f2f',
                        fontSize: 16,
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        gap: 4,
                    }}>
                        <span role="img" aria-label="logout" style={{ fontSize: 20 }}>🚪</span>
                        Logout
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;