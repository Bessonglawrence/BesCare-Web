import React from 'react';

interface Carer {
    id: number;
    name: string;
    avatarUrl?: string;
}

interface SideBarProps {
    carers: Carer[];
    onCarerSelect?: (carer: Carer) => void;
}

const SideBar: React.FC<SideBarProps> = ({ carers, onCarerSelect }) => {
    return (
        <aside style={{ width: 250, background: '#f5f5f5', padding: 16 }}>
            <h2 style={{ marginBottom: 24 }}>Carers</h2>
            <ul style={{ listStyle: 'none', padding: 0 }}>
                {carers.map(carer => (
                    <li
                        key={carer.id}
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            padding: '8px 0',
                            cursor: onCarerSelect ? 'pointer' : 'default'
                        }}
                        onClick={() => onCarerSelect && onCarerSelect(carer)}
                    >
                        {carer.avatarUrl ? (
                            <img
                                src={carer.avatarUrl}
                                alt={carer.name}
                                style={{ width: 32, height: 32, borderRadius: '50%', marginRight: 12 }}
                            />
                        ) : (
                            <div
                                style={{
                                    width: 32,
                                    height: 32,
                                    borderRadius: '50%',
                                    background: '#ccc',
                                    marginRight: 12,
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    fontWeight: 'bold',
                                    color: '#fff'
                                }}
                            >
                                {carer.name.charAt(0).toUpperCase()}
                            </div>
                        )}
                        <a
                            href={`/carers/${carer.id}`}
                            style={{ color: 'inherit', textDecoration: 'none' }}
                            onClick={e => {
                                if (onCarerSelect) {
                                    e.preventDefault();
                                    onCarerSelect(carer);
                                }
                            }}
                            onMouseOver={e => (e.currentTarget.style.color = 'lightblue')}
                            onMouseOut={e => (e.currentTarget.style.color = 'inherit')}
                        >
                            {carer.name}
                        </a>
                        <span 
                        style={{ marginLeft: 'auto', color: '#bbb', fontSize: 18, display: 'flex', alignItems: 'center' }}
                        onMouseOver={e => (e.currentTarget.style.color = 'lightblue')}
                        onMouseOut={e => (e.currentTarget.style.color = 'inherit')}
                        >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
                                <path d="M8 5l4 5-4 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default SideBar;