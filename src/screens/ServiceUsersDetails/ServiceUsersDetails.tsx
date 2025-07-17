import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import { serviceUsers } from '../../components/Data/data';
import { useParams } from 'react-router-dom';
import { carers } from '../../components/Data/data';
import SideNavigator from '../../components/SideBar/SideNavigator';

const ServiceUsersDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const user = serviceUsers.find(u => u.id === Number(id));

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div style={{ minHeight: '100vh',}}>
            <NavBar />
            <SideNavigator />
            <div style={{
                marginLeft: '8rem',
                marginTop: '3rem',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'flex-start',
                minHeight: '80vh',
            }}>
                <div style={{
                    background: '#fff',
                    borderRadius: '18px',
                    boxShadow: '0 6px 32px rgba(23,105,170,0.13)',
                    maxWidth: 520,
                    width: '100%',
                    padding: 0,
                    overflow: 'hidden',
                    position: 'relative',
                    marginTop: '4rem',
                }}>
                    {/* Header with background */}
                    <div style={{
                        background: 'linear-gradient(90deg, #1769aa 0%, #42a5f5 100%)',
                        padding: '2.5rem 2rem 1.5rem 2rem',
                        display: 'flex',
                        alignItems: 'center',
                        position: 'relative',
                    }}>
                        <img src={user.profilePicture} alt={user.name} style={{
                            width: 90,
                            height: 90,
                            borderRadius: '50%',
                            border: '4px solid #fff',
                            boxShadow: '0 2px 8px rgba(23,105,170,0.12)',
                            marginRight: '2rem',
                            background: '#fff',
                        }} />
                        <div>
                            <h2 style={{ color: '#fff', margin: 0, fontSize: 28, fontWeight: 700, letterSpacing: 1 }}>{user.name}</h2>
                            <div style={{ color: '#e3f0fc', fontSize: 16, marginTop: 4, fontWeight: 500 }}>
                                <span role="img" aria-label="gender" style={{ marginRight: 8 }}>👤</span>{user.gender} &nbsp;|&nbsp; <span role="img" aria-label="dob" style={{ marginRight: 8 }}>🎂</span>DOB: {user.dateOfBirth}
                            </div>
                            <div style={{ color: '#e3f0fc', fontSize: 15, marginTop: 2 }}>
                                <span role="img" aria-label="active" style={{ marginRight: 8 }}>✔️</span>Active: <b>{user.isActive ? 'Yes' : 'No'}</b>
                            </div>
                        </div>
                    </div>
                    {/* Details section */}
                    <div style={{ padding: '2rem 2.5rem 2.5rem 2.5rem', background: '#fff' }}>
                        <div style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center' }}>
                            <span role="img" aria-label="address" style={{ marginRight: 10, fontSize: 20, color: '#1769aa' }}>🏠</span>
                            <span style={{ fontWeight: 500, color: '#1769aa', minWidth: 90 }}>Address:</span>
                            <span style={{ marginLeft: 10, color: '#444' }}>{user.address}</span>
                        </div>
                        <div style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center' }}>
                            <span role="img" aria-label="email" style={{ marginRight: 10, fontSize: 20, color: '#1769aa' }}>✉️</span>
                            <span style={{ fontWeight: 500, color: '#1769aa', minWidth: 90 }}>Email:</span>
                            <span style={{ marginLeft: 10, color: '#444' }}>{user.email}</span>
                        </div>
                        <div style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center' }}>
                            <span role="img" aria-label="phone" style={{ marginRight: 10, fontSize: 20, color: '#1769aa' }}>📞</span>
                            <span style={{ fontWeight: 500, color: '#1769aa', minWidth: 90 }}>Phone:</span>
                            <span style={{ marginLeft: 10, color: '#444' }}>{user.phoneNumber}</span>
                        </div>
                        <div style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center' }}>
                            <span role="img" aria-label="next of kin" style={{ marginRight: 10, fontSize: 20, color: '#1769aa' }}>👨‍👩‍👧‍👦</span>
                            <span style={{ fontWeight: 500, color: '#1769aa', minWidth: 90 }}>Next of Kin:</span>
                            <span style={{ marginLeft: 10, color: '#444' }}>{user.nextOfKin} ({user.nextOfKinPhoneNumber})</span>
                        </div>
                        <div style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center' }}>
                            <span role="img" aria-label="care types" style={{ marginRight: 10, fontSize: 20, color: '#1769aa' }}>🩺</span>
                            <span style={{ fontWeight: 500, color: '#1769aa', minWidth: 90 }}>Care Types:</span>
                            <span style={{ marginLeft: 10, color: '#444' }}>{user.careList && user.careList.length > 0 ? user.careList.join(', ') : 'N/A'}</span>
                        </div>
                        <div style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center' }}>
                            <span role="img" aria-label="medications" style={{ marginRight: 10, fontSize: 20, color: '#1769aa' }}>💊</span>
                            <span style={{ fontWeight: 500, color: '#1769aa', minWidth: 90 }}>Medications:</span>
                            <span style={{ marginLeft: 10, color: '#444' }}>{user.medicationList && user.medicationList.length > 0 ? user.medicationList.join(', ') : 'N/A'}</span>
                        </div>
                        {user.allergies && (
                            <div style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'center' }}>
                                <span role="img" aria-label="allergies" style={{ marginRight: 10, fontSize: 20, color: '#1769aa' }}>⚠️</span>
                                <span style={{ fontWeight: 500, color: '#1769aa', minWidth: 90 }}>Allergies:</span>
                                <span style={{ marginLeft: 10, color: '#444' }}>{user.allergies.join(', ')}</span>
                            </div>
                        )}
                        {user.emergencyContact && user.emergencyContact.length > 0 && (
                            <div style={{ marginBottom: '1.2rem', display: 'flex', alignItems: 'flex-start' }}>
                                <span role="img" aria-label="emergency" style={{ marginRight: 10, fontSize: 20, color: '#1769aa', marginTop: 2 }}>🚨</span>
                                <span style={{ fontWeight: 500, color: '#1769aa', minWidth: 90, marginTop: 2 }}>Emergency:</span>
                                <ul style={{ margin: 0, marginLeft: 10, color: '#444', paddingLeft: 18 }}>
                                    {user.emergencyContact.map((ec, idx) => (
                                        <li key={idx} style={{ marginBottom: 2 }}>{ec.name} ({ec.phoneNumber})</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceUsersDetails;