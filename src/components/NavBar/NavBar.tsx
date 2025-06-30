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
                    flex-wrap: nowrap;
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
                    flex-wrap: nowrap;
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
                    max-width: 100vw;
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
                    flex-wrap: nowrap;
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
                    padding: 4px 8px;
                }
                .navbar-action-btn.logout {
                    color: #d32f2f;
                }
                .navbar-action-icon {
                    font-size: 18px;
                }
                /* Responsive: Keep desktop layout on all screens */
                @media (max-width: 900px) {
                    .navbar {
                        flex-direction: row;
                        height: 80px;
                        padding: 10px 2vw;
                        align-items: center;
                    }
                    .navbar-logo {
                        margin-right: 12px;
                        margin-bottom: 0;
                        justify-content: flex-start;
                    }
                    .navbar-logo-img {
                        margin-left: 0;
                        width: 140px;
                        max-height: 80px;
                    }
                    .navbar-right {
                        flex-direction: row;
                        align-items: center;
                        width: 100%;
                        margin-left: 0;
                        gap: 8px;
                    }
                    .search-input {
                        width: 180px;
                        min-width: 0;
                        font-size: 15px;
                        margin-left: 2rem;
                        margin-bottom: 0;
                    }
                    .search-icon {
                        margin-left: -28px;
                        margin-right: 8px;
                        font-size: 22px;
                        align-self: center;
                    }
                    .navbar-actions {
                        margin-left: auto;
                        margin-top: 0;
                        justify-content: flex-end;
                        gap: 10px;
                        flex-wrap: nowrap;
                    }
                }
                @media (max-width: 600px) {
                    .navbar {
                        padding: 8px 1vw;
                        min-height: unset;
                        height: 60px;
                    }
                    .navbar-logo-img {
                        width: 90px;
                        max-height: 40px;
                    }
                    .search-input {
                        width: 100px;
                        font-size: 13px;
                        margin-left: 1rem;
                        margin-bottom: 0;
                    }
                    .search-icon {
                        font-size: 18px;
                        margin-right: 6px;
                    }
                    .navbar-action-btn {
                        font-size: 12px;
                        padding: 2px 4px;
                    }
                    .navbar-action-icon {
                        font-size: 13px;
                    }
                    .navbar-actions {
                        gap: 6px;
                    }
                }
            `}</style>
        </nav>
    );
};

export default NavBar;