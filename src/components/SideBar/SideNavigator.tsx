import React from 'react';
import { NavLink } from 'react-router-dom';

const navItems = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/contact', label: 'Contact' },
];

const SideNavigator: React.FC = () => (
    <nav className="side-navigator" style={{
        width: 125,
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
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
            {navItems.map((item) => (
                <li key={item.path}>
                    <NavLink
                        to={item.path}
                        end
                        style={({ isActive }) => ({
                            display: 'block',
                            padding: '12px 16px',
                            color: '#fff',
                            textDecoration: 'none',
                            transition: 'background 0.2s, color 0.2s',
                            background: isActive ? 'rgba(255, 255, 255, 0.2)' : undefined,
                        })}
                        className={({ isActive }) => isActive ? 'text-blue-600 font-semibold' : 'text-gray-700 hover:text-blue-600'}
                        onMouseOver={(e) => (e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)')}
                        onMouseOut={(e) => (e.currentTarget.style.background = (e.currentTarget as HTMLElement).classList.contains('text-blue-600') ? 'rgba(255, 255, 255, 0.2)' : 'none')}
                    >
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </ul>
    </nav>
);

export default SideNavigator;