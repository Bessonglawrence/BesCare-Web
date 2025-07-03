import react,{useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import SideNavigator from '../../components/SideBar/SideNavigator';
import NavBar from '../../components/NavBar/NavBar';


export default function SendNotification() {    
    const [notification, setNotification] = useState('');
    const [isSending, setIsSending] = useState(false);
    const navigate = useNavigate();

    const handleSendNotification = async () => {
        if (!notification.trim()) {
            alert('Please enter a notification message.');
            return;
        }

        setIsSending(true);
        try {
            // Simulate sending notification
            await new Promise(resolve => setTimeout(resolve, 2000));
            alert('Notification sent successfully!');
            setNotification(''); // Clear the notification input
            //navigate('/'); // Redirect to home or another screen after sending
        } catch (error) {
            console.error('Error sending notification:', error);
            alert('Failed to send notification. Please try again.');
        } finally {
            setIsSending(false);
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', padding: '20px', width: '95%', marginLeft: '4rem' }}>
            <SideNavigator />
            <NavBar />
            <div className="container" style={{ padding: '20px', marginTop: '60px', width: '90%', alignSelf: 'center', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                <h1>Send Notification</h1>
                <textarea
                    value={notification}
                    onChange={(e) => setNotification(e.target.value)}
                    placeholder="Enter your notification message here..."
                    rows={4}
                    style={{ width: '100%', padding: '10px', fontSize: '16px' }}
                />
                <button
                    onClick={handleSendNotification}
                    disabled={isSending}
                    style={{
                        marginTop: '16px',
                        padding: '12px 28px',
                        fontSize: '17px',
                        background: isSending
                            ? 'linear-gradient(90deg, #bdbdbd 0%, #e0e0e0 100%)'
                            : 'linear-gradient(90deg, #1976d2 0%, #42a5f5 100%)',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '8px',
                        boxShadow: '0 2px 8px rgba(25, 118, 210, 0.15)',
                        cursor: isSending ? 'not-allowed' : 'pointer',
                        transition: 'background 0.3s, box-shadow 0.3s, transform 0.2s',
                        fontWeight: 600,
                        letterSpacing: '0.5px',
                        outline: 'none',
                        opacity: isSending ? 0.7 : 1,
                    }}
                >
                    {isSending ? 'Sending...' : 'Send Notification'}
                </button>
            </div>
        </div>
    );
}