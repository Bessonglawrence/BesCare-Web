import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';

interface Member {
    id: number;
    name: string;
}

const initialMembers: Member[] = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'Diana' },
];

const HomeScreen: React.FC = () => {
    const [members, setMembers] = useState<Member[]>(initialMembers);
    const [currentIndex, setCurrentIndex] = useState<number>(0);

    const handleNext = () => {
        setCurrentIndex((prev) => (prev + 1) % members.length);
    };

    return (
        <>
         <NavBar />
           <div style={{ padding: 32, maxWidth: 400, margin: '0 auto' }}>
                <h1>Rotarring System</h1>
                <div style={{ margin: '24px 0', fontSize: 24 }}>
                    Current: <strong>{members[currentIndex].name}</strong>
                </div>
                <button onClick={handleNext} style={{ padding: '8px 16px', fontSize: 16 }}>
                    Next
                </button>
                <div style={{ marginTop: 32 }}>
                    <h2>Members</h2>
                    <ul>
                        {members.map((member, idx) => (
                            <li key={member.id} style={{ fontWeight: idx === currentIndex ? 'bold' : 'normal' }}>
                                {member.name}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
          </>
    );
};

export default HomeScreen;