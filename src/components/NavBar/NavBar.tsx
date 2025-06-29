import React from 'react';
import { NavLink } from 'react-router-dom';

const tabs = [
    { name: 'Carers', path: '/carers' },
    { name: 'Service Users', path: '/service-users' },
    { name: 'Rotas', path: '/rotas' },
];

const NavBar: React.FC = () => {
    return (
        <nav className="navbar">
            {/* Left: Icon */}
            <div className="navbar-logo">
            <img
                src="/BesCare.png"
                alt="Logo"
                className="navbar-logo-img"
            />
            </div>

            {/* Right: Search Input */}
        <div className="navbar-right">
            <input
                type="text"
                placeholder="Search here..."
                className="search-input"
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
                className="search-icon"
            >🔍</span>
            <div className="navbar-actions">
                <button
                className="navbar-action-btn help"
                onMouseOver={e => (e.currentTarget.style.color = 'rgba(25, 118, 210, 0.36)')}
                onMouseOut={e => (e.currentTarget.style.color = '#1976d2')}
                >
                <span role="img" aria-label="help" className="navbar-action-icon">❓</span>
                Help
                </button>
                <button
                className="navbar-action-btn setting"
                onMouseOver={e => (e.currentTarget.style.color = 'rgba(25, 118, 210, 0.36)')}
                onMouseOut={e => (e.currentTarget.style.color = '#1976d2')}
                >
                <span role="img" aria-label="settings" className="navbar-action-icon">⚙️</span>
                Setting
                </button>
                <button
                className="navbar-action-btn logout"
                onMouseOver={e => (e.currentTarget.style.color = 'rgba(237, 84, 84, 0.36)')}
                onMouseOut={e => (e.currentTarget.style.color = '#d32f2f')}
                >
                <span role="img" aria-label="logout" className="navbar-action-icon">🚪</span>
                Logout
                </button>
            </div>
            </div>
            <style>{`
            .navbar {
                display: flex;
                width: 100%;
                align-items: center;
                height: 80px;
                padding: 12px 5vw;
                background: white;
                position: fixed;
                top: 0;
                left: 0;
                z-index: 100;
                box-sizing: border-box;
            }
            .navbar-logo {
                margin-right: 24px;
                display: flex;
                align-items: center;
            }
            .navbar-logo-img {
                width: 190px;
                height: auto;
                max-height: 140px;
                margin-left: 3rem;
            }
            .navbar-right {
                margin-left: 16px;
                display: flex;
                align-items: center;
                flex: 1;
                min-width: 0;
            }
            .search-input {
                padding: 8px 12px;
                border-radius: 4px;
                border: 1.5px solid #ccc;
                font-size: 16px;
                outline: none;
                width: 300px;
                height: 32px;
                transition: border-color 0.3s;
                font-weight: bold;
                color: #333;
                margin-left: 8rem;
            }
            .search-icon {
                margin-left: -28px;
                margin-right: 12px;
                font-size: 24px;
                color: #888;
                cursor: pointer;
                background: transparent;
                z-index: 1;
                display: flex;
                align-items: center;
            }
            .navbar-actions {
                display: flex;
                align-items: center;
                gap: 16px;
                margin-left: auto;
            }
            .navbar-action-btn {
                background: none;
                border: none;
                color: #1976d2;
                font-size: 15px;
                cursor: pointer;
                display: flex;
                align-items: center;
                gap: 4px;
                transition: color 0.2s;
            }
            .navbar-action-btn.logout {
                color: #d32f2f;
            }
            .navbar-action-icon {
                font-size: 18px;
            }
            @media (max-width: 900px) {
                .navbar {
                flex-direction: column;
                height: auto;
                padding: 10px 2vw;
                }
                .navbar-logo {
                margin-right: 0;
                margin-bottom: 8px;
                }
                .navbar-right {
                flex-direction: column;
                align-items: stretch;
                width: 100%;
                margin-left: 0;
                }
                .navbar-actions {
                margin-left: 0;
                margin-top: 8px;
                justify-content: flex-end;
                }
            }
            @media (max-width: 600px) {
                .navbar {
                padding: 8px 1vw;
                }
                .navbar-logo-img {
                width: 110px;
                max-height: 40px;
                }
                .search-input {
                width: 120px;
                font-size: 14px;
                }
                .search-icon {
                font-size: 20px;
                margin-left: -22px;
                margin-right: 8px;
                }
                .navbar-action-btn {
                font-size: 13px;
                }
                .navbar-action-icon {
                font-size: 15px;
                }
            }
            `}</style>
        </nav>
    );
};

export default NavBar;