import React, { ReactNode } from 'react';

interface StatsCardProps {
    header: string;
    children: ReactNode;
}

const StatsCard: React.FC<StatsCardProps> = ({ header, children }) => {
    return (
        <div
            style={{
                width: 240,
                height: 240,
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                background: '#fff',
                flexDirection: 'column',
                alignItems: 'center',
                padding: 24,
                borderWidth: 3,
                borderColor: 'gray',
                position: 'fixed',
                top: 100,
            }}
        >
            <h3 style={{ margin: 0, marginBottom: 16, fontSize: 20, fontWeight: 600 }}>
                {header}
            </h3>
            <div style={{ flex: 1, width: '100%' }}>{children}</div>
        </div>
    );
};

export default StatsCard;