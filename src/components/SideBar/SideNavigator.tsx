import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const navItems = [
    { path: '/', label: 'Home' },
    { path: '/clients', label: 'Clients' },
    { path: '/carers', label: 'Carers' },
    { path: '/rotas', label: 'Rotas And Shifts' },
    { path: '/settings', label: 'Settings' },
    { path: '/contact', label: 'Contact' },
    { path: '/notifications', label: ' Send Notifications' },
];

const SideNavigator: React.FC = () => {
    const [mobileOpen, setMobileOpen] = useState(false);

    // Detect mobile view (optional: you can use a custom hook or window.matchMedia)
    const isMobile = typeof window !== 'undefined' && window.innerWidth <= 600;

    return (
        <>
            <style>
                {`
                    @media (max-width: 900px) {
                        .side-navigator {
                            max-width: 70px !important;
                            padding: 16px 0 !important;
                        }
                        .side-navigator .sidebar-logo {
                            width: 36px !important;
                            height: 36px !important;
                            font-size: 16px !important;
                            margin-bottom: 12px !important;
                        }
                        .side-navigator .notification-button,
                        .side-navigator .action-btn {
                            width: 36px !important;
                            height: 36px !important;
                        }
                        .side-navigator .action-label {
                            font-size: 12px !important;
                            padding-bottom: 16px !important;
                            margin-bottom: 12px !important;
                        }
                        .side-navigator ul li span {
                            font-size: 10px !important;
                        }
                        .side-navigator ul li .nav-icon {
                            font-size: 16px !important;
                        }
                    }
                    @media (max-width: 600px) {
                        .side-navigator {
                            display: ${mobileOpen ? 'flex' : 'none'} !important;
                            flex-direction: column !important;
                            width: 70vw !important;
                            max-width: 260px !important;
                            height: 100vh !important;
                            padding: 0 !important;
                            bottom: auto;
                            top: 0;
                            left: 0;
                            right: auto;
                            box-shadow: 2px 0 8px rgba(182, 197, 219, 0.62);
                            z-index: 2000;
                            background: rgba(5, 21, 53, 0.98);
                        }
                        .hamburger-menu {
                            display: flex !important;
                        }
                        .side-navigator .sidebar-logo,
                        .side-navigator .notification-button,
                        .side-navigator .action-btn,
                        .side-navigator .action-label {
                            margin: 0 8px !important;
                        }
                        .side-navigator ul {
                            display: flex !important;
                            flex-direction: column !important;
                            width: 100% !important;
                            justify-content: flex-start !important;
                        }
                        .side-navigator ul li {
                            display: flex !important;
                            align-items: center !important;
                        }
                        .side-navigator ul li .nav-icon {
                            margin-right: 0 !important;
                        }
                    }
                    @media (min-width: 601px) {
                        .hamburger-menu {
                            display: none !important;
                        }
                        .side-navigator {
                            display: flex !important;
                        }
                    }
                `}
            </style>
            {/* Hamburger menu button */}
            <button
                className="hamburger-menu"
                aria-label="Open navigation"
                style={{
                    position: 'fixed',
                    top: 18,
                    left: 18,
                    zIndex: 2100,
                    background: 'rgba(5, 21, 53, 0.94)',
                    border: 'none',
                    borderRadius: 6,
                    width: 44,
                    height: 44,
                    display: isMobile ? 'flex' : 'none',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    boxShadow: '0 2px 8px rgba(37, 99, 235, 0.15)',
                }}
                onClick={() => setMobileOpen((open) => !open)}
            >
                <span
                    style={{
                        display: 'block',
                        width: 24,
                        height: 2,
                        background: '#fff',
                        margin: '4px 0',
                        borderRadius: 2,
                        transition: 'all 0.2s',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.12)',
                    }}
                />
                <span
                    style={{
                        display: 'block',
                        width: 24,
                        height: 2,
                        background: '#fff',
                        margin: '4px 0',
                        borderRadius: 2,
                        transition: 'all 0.2s',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.12)',
                    }}
                />
                <span
                    style={{
                        display: 'block',
                        width: 24,
                        height: 2,
                        background: '#fff',
                        margin: '4px 0',
                        borderRadius: 2,
                        transition: 'all 0.2s',
                        boxShadow: '0 1px 2px rgba(0,0,0,0.12)',
                    }}
                />
            </button>
            {/* Overlay for mobile menu */}
            {isMobile && mobileOpen && (
                <div
                    onClick={() => setMobileOpen(false)}
                    style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        background: 'rgba(0,0,0,0.25)',
                        zIndex: 1999,
                    }}
                />
            )}
            <nav
                className="side-navigator"
                style={{
                    width: '100vw',
                    maxWidth: 100,
                    background: 'rgba(5, 21, 53, 0.94)',
                    color: '#fff',
                    height: '100vh',
                    padding: '32px 0',
                    boxSizing: 'border-box',
                    display: 'flex',
                    flexDirection: 'column',
                    boxShadow: '1px 0 8px rgba(182, 197, 219, 0.62)',
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: 2000,
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                }}
            >
                <div
                    className="sidebar-logo"
                    style={{
                        width: 48,
                        height: 48,
                        borderRadius: '50%',
                        background: 'lightblue',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        fontSize: 20,
                        color: '#053b6e',
                        margin: '0 auto 24px auto',
                        letterSpacing: 2,
                        userSelect: 'none',
                        cursor: 'pointer',
                        transition: 'all 0.2s',
                    }}
                >
                    LO
                </div>
                <button
                    style={{
                        textAlign: 'center',
                        marginBottom: 20,
                        alignSelf: 'center',
                        flexDirection: 'column',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        cursor: 'pointer',
                        background: 'transparent',
                        border: 'none',
                        transition: 'all 0.2s',
                    }}
                    aria-label="Notifications"
                    onClick={() => alert('Notifications clicked!')}
                    className="notification-button"
                    title="Notifications"
                >
                    <span style={{ fontSize: 32 }}>🔔</span>
                    <span style={{ fontSize: 14, color: '#fff' }}>Notifications</span>
                </button>
                <button
                    aria-label="Actions"
                    className="action-btn"
                    style={{
                        background: 'linear-gradient(135deg,rgb(88, 127, 212) 60%,rgb(86, 135, 213) 100%)',
                        border: 'none',
                        borderRadius: '50%',
                        width: 48,
                        height: 48,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        margin: '0 auto 8px auto',
                        boxShadow: '0 2px 8px rgba(37, 99, 235, 0.15)',
                        cursor: 'pointer',
                        outline: 'none',
                        transition: 'background 0.2s, width 0.2s, height 0.2s',
                    }}
                >
                    <FontAwesomeIcon icon={faPlus} color="#fff" style={{ fontSize: 30 }} />
                </button>
                <div
                    className="action-label"
                    style={{
                        textAlign: 'center',
                        color: '#fff',
                        marginBottom: 24,
                        fontSize: 14,
                        fontWeight: 500,
                        borderBottomWidth: 0.8,
                        borderBottomColor: 'grey',
                        borderBottomStyle: 'solid',
                        paddingBottom: 30,
                        width: '45%',
                        alignSelf: 'center',
                        transition: 'all 0.2s',
                    }}
                >
                    Actions
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, transition: 'all 0.2s' }}>
                    {navItems.map((item) => {
                        let icon;
                        switch (item.path) {
                            case '/rotas':
                                icon = (
                                    <span className="nav-icon" style={{ fontSize: 20, marginRight: 8 }}>
                                        📅
                                    </span>
                                );
                                break;
                            case '/clients':
                                icon = (
                                    <span className="nav-icon" style={{ fontSize: 20, marginRight: 8 }}>
                                        👥
                                    </span>
                                );
                                break;
                            case '/carers':
                                icon = (
                                    <span className="nav-icon" style={{ fontSize: 20, marginRight: 8 }}>
                                        🧑‍💼
                                    </span>
                                );
                                break;
                            case '/':
                                icon = (
                                    <span className="nav-icon" style={{ fontSize: 20, marginRight: 8 }}>
                                        🏠
                                    </span>
                                );
                                break;
                            case '/notifications':
                                icon = (
                                    <span className="nav-icon" style={{ fontSize: 20, marginRight: 8 }}>
                                        ℹ️
                                    </span>
                                );
                                break;
                            case '/settings':
                                icon = (
                                    <span className="nav-icon" style={{ fontSize: 20, marginRight: 8 }}>
                                        🛠️
                                    </span>
                                );
                                break;
                            case '/contact':
                                icon = (
                                    <span className="nav-icon" style={{ fontSize: 20, marginRight: 8 }}>
                                        ✉️
                                    </span>
                                );
                                break;
                            default:
                                icon = null;
                        }
                        return (
                            <li key={item.path}>
                                <NavLink
                                    to={item.path}
                                    end
                                    style={({ isActive }) => ({
                                        fontSize: 12,
                                        fontWeight: isActive ? 'bold' : 'normal',
                                        color: isActive ? '#fff' : '#ccc',
                                        textAlign: 'center',
                                        display: 'block',
                                        padding: '12px 16px',
                                        textDecoration: 'none',
                                        transition: 'background 0.2s, color 0.2s',
                                        background: isActive ? 'rgba(255, 255, 255, 0.2)' : undefined,
                                    })}
                                    className={({ isActive }) =>
                                        isActive
                                            ? 'text-blue-600 font-semibold'
                                            : 'text-gray-700 hover:text-blue-600'
                                    }
                                    onMouseOver={(e) =>
                                        (e.currentTarget.style.background =
                                            'rgba(255, 255, 255, 0.36)')
                                    }
                                    onMouseOut={(e) =>
                                        (e.currentTarget.style.background = (
                                            e.currentTarget as HTMLElement
                                        ).classList.contains('text-blue-600')
                                            ? 'rgba(255, 255, 255, 0.2)'
                                            : 'none')
                                    }
                                    onClick={() => {
                                        if (isMobile) setMobileOpen(false);
                                    }}
                                >
                                    <div
                                        style={{
                                            display: 'flex',
                                            flexDirection: 'column',
                                            alignItems: 'center',
                                            alignSelf: 'center',
                                        }}
                                    >
                                        <span style={{ marginLeft: 12 }}>{icon}</span>
                                        <span>{item.label}</span>
                                    </div>
                                </NavLink>
                            </li>
                        );
                    })}
                </ul>
            </nav>
        </>
    );
};

export default SideNavigator;