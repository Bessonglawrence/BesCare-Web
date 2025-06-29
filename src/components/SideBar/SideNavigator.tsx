import React from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const navItems = [
    { path: '/', label: 'Home' },
    { path: '/clients', label: 'Clients' },
    { path: '/carers', label: 'Carers' },
    { path: '/rotas', label: 'Rotas And Shifts' },
    { path: '/settings', label: 'Settings' },
    { path: '/contact', label: 'Contact' },
    { path: '/notifications', label: ' Send Notifications' },
];

const SideNavigator: React.FC = () => (
    <nav className="side-navigator" style={{
        width: 100,
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
        zIndex: 1000,
        textDecoration: 'none', // Remove underline
    }}>
        <div
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
            }}
        >
            LO
        </div>
        <button style={{ 
            textAlign: 'center', 
            marginBottom: 20, 
            alignSelf: 'center', 
            flexDirection: 'column', 
            display: 'flex', 
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            background: "transparent",
            border: 'none',
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
            transition: 'background 0.2s',
            }}
        >
            <FontAwesomeIcon icon={faPlus} color='#fff' style={{fontSize: 30}} />
        </button>
        <div style={{ textAlign: 'center', color: '#fff', marginBottom: 24, fontSize: 14, fontWeight: 500, borderBottomWidth: 0.8, borderBottomColor: 'grey', borderBottomStyle: 'solid', paddingBottom: 30, width: '45%', alignSelf: 'center' }}>
            Actions
        </div>
    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navItems.map((item) => {
            let icon;
            switch (item.path) {
                case '/rotas':
                icon = <span style={{ fontSize: 20, marginRight: 8 }}>📅</span>;
                break;
                case '/clients':
                icon = <span style={{ fontSize: 20, marginRight: 8 }}>👥</span>;
                break;
                case '/carers':
                icon = <span style={{ fontSize: 20, marginRight: 8 }}>🧑‍💼</span>;
                break;
                case '/':
                icon = <span style={{ fontSize: 20, marginRight: 8 }}>🏠</span>;
                break;
                case '/notifications':
                icon = <span style={{ fontSize: 20, marginRight: 8 }}>ℹ️</span>;
                break;
                case '/settings':
                icon = <span style={{ fontSize: 20, marginRight: 8 }}>🛠️</span>;
                break;
                case '/contact':
                icon = <span style={{ fontSize: 20, marginRight: 8 }}>✉️</span>;
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
                    className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}
                    onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.36)')}
                    onMouseOut={(e) => (e.currentTarget.style.background = (e.currentTarget as HTMLElement).classList.contains('text-blue-600') ? 'rgba(255, 255, 255, 0.2)' : 'none')}
                >
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', alignSelf: 'center'}}>
                   <span style={{ marginLeft: 12 }}>{icon}</span>
                    <span>{item.label}</span>
                    </div>
                </NavLink>
                </li>
            );
            })}
        </ul>
    </nav>
);

export default SideNavigator;