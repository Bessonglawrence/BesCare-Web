import React,{useState, FormEvent} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SideNavigator from '../../components/SideBar/SideNavigator';
import { serviceUsers, ServiceUser } from '../../components/Data/data';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const serviceUsersList: ServiceUser[] = serviceUsers;


const initialFormState = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    nextOfKin: '',
    nextOfKinNumber: '',
    nextOfKinEmail: '',
    medications: '',
    careTypes: ''
};

const ServiceUsersScreen = () => {
    const [form, setForm] = useState(initialFormState);
    const [showModal, setShowModal] = useState(false);

    // Dummy handler for form submission
    const handleAddUser = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Add logic to handle form submission here
        setShowModal(false);
        setForm(initialFormState);
    };

    const [currentPage, setCurrentPage] = useState(1);
    const usersPerPage = 10;
    const totalPages = Math.ceil(serviceUsersList.length / usersPerPage);

    // Only show users for the current page
    const paginatedUsers = serviceUsersList.slice(
        (currentPage - 1) * usersPerPage,
        currentPage * usersPerPage
    );
    return (
        <div>
            <NavBar />
            <SideNavigator />
            <div className="container" style={{justifyContent: 'center',marginTop: '10rem', display: 'flex', flexDirection: 'column',marginLeft: '3rem', height: '100vh', padding: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%', maxWidth: 800, marginLeft: '8rem' }}>
                    <button
                        style={{
                            borderRadius: '8px',
                            backgroundColor: '#e3f0fc',
                            color: '#1769aa',
                            border: 'none',
                            padding: '10px 20px',
                            cursor: 'pointer',
                            fontWeight: 600,
                            fontSize: '16px'
                        }}
                        onClick={() => setShowModal(true)}
                    >
                        <FontAwesomeIcon icon={faPlus} color="#1769aa" style={{ fontSize: 30, marginRight: '8px', marginBottom: '-5px' }} />
                       Add Service User
                    </button>
                    
                </div>
               
                {showModal && (
                    <div
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'rgba(0,0,0,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 1000
                        }}
                    >
                    <div
                        style={{
                            background: '#fff',
                            borderRadius: '12px',
                            padding: '32px',
                            minWidth: '350px',
                            boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
                            position: 'relative',
                            transform: showModal ? 'translateY(0)' : 'translateY(100%)',
                            opacity: showModal ? 1 : 0,
                            transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s'
                        }}
                    >
                        <h2>Add Service User</h2>
                        <form
                            onSubmit={handleAddUser}
                            style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}
                        >
                            <input
                                type="text"
                                placeholder="First Name"
                                value={form.firstName}
                                onChange={e => setForm({ ...form, firstName: e.target.value })}
                                required
                                style={{ height: '40px' }}
                            />
                            <input
                                type="text"
                                placeholder="Last Name"
                                value={form.lastName}
                                onChange={e => setForm({ ...form, lastName: e.target.value })}
                                required
                                style={{ height: '40px' }}
                            />
                            <input
                                type="email"
                                placeholder="Email"
                                value={form.email}
                                onChange={e => setForm({ ...form, email: e.target.value })}
                                required
                                style={{ height: '40px' }}
                            />
                            <input
                                type="tel"
                                placeholder="Phone Number"
                                value={form.phone}
                                onChange={e => setForm({ ...form, phone: e.target.value })}
                                style={{ height: '40px' }}
                            />
                            <input
                                type="text"
                                placeholder="Address"
                                value={form.address}
                                onChange={e => setForm({ ...form, address: e.target.value })}
                                style={{ height: '40px' }}
                            />
                            <input
                                type="text"
                                placeholder="Next of Kin"
                                value={form.nextOfKin}
                                onChange={e => setForm({ ...form, nextOfKin: e.target.value })}
                                style={{ height: '40px' }}
                            />
                            <input
                                type="tel"
                                placeholder="Next of Kin Number"
                                value={form.nextOfKinNumber}
                                onChange={e => setForm({ ...form, nextOfKinNumber: e.target.value })}
                                style={{ height: '40px' }}
                            />
                            <input
                                type="email"
                                placeholder="Next of Kin Email"
                                value={form.nextOfKinEmail}
                                onChange={e => setForm({ ...form, nextOfKinEmail: e.target.value })}
                                style={{ height: '40px' }}
                            />
                            <input
                                type="text"
                                placeholder="Medications"
                                value={form.medications}
                                onChange={e => setForm({ ...form, medications: e.target.value })}
                                style={{ height: '40px' }}
                            />
                            <input
                                type="text"
                                placeholder="Types of Care Needed"
                                value={form.careTypes}
                                onChange={e => setForm({ ...form, careTypes: e.target.value })}
                                style={{ height: '40px' }}
                            />
                            <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '10px' }}>
                                <button
                                    type="button"
                                    style={{
                                        background: 'transparent',
                                        border: '1px solid #1769aa',
                                        color: '#1769aa',
                                        borderRadius: '6px',
                                        padding: '8px 16px',
                                        cursor: 'pointer'
                                    }}
                                    onClick={() => setShowModal(false)}
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    style={{
                                        background: '#1769aa',
                                        color: '#fff',
                                        border: 'none',
                                        borderRadius: '6px',
                                        padding: '8px 16px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                    </div>
                )}
                {/* Pagination Controls */}
                <div style={{ display: 'flex', justifyContent: 'flex-end', margin: '16px 0' }}>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                        disabled={currentPage === 1}
                        style={{
                            marginRight: '8px',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            border: '1px solid #1769aa',
                            background: currentPage === 1 ? '#e3f0fc' : '#fff',
                            color: '#1769aa',
                            cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
                        }}
                    >
                        Previous
                    </button>
                    <span style={{ alignSelf: 'center', fontWeight: 500 }}>
                        Page {currentPage} of {totalPages}
                    </span>
                    <button
                        onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                        disabled={currentPage === totalPages}
                        style={{
                            marginLeft: '8px',
                            padding: '6px 12px',
                            borderRadius: '4px',
                            border: '1px solid #1769aa',
                            background: currentPage === totalPages ? '#e3f0fc' : '#fff',
                            color: '#1769aa',
                            cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
                        }}
                    >
                        Next
                    </button>
                </div>
                <ul>
                    {paginatedUsers.map((user) => (
                        <li key={user.id} style={{ 
                            background: '#f7fafd', 
                            borderRadius: '8px', 
                            marginBottom: '12px', 
                            padding: '16px', 
                            boxShadow: '0 1px 4px rgba(23,105,170,0.05)', 
                            listStyle: 'none',
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', flex: 4, marginRight: '10rem' }}>
                                <img
                                    src={user.profilePicture}
                                    alt={`${user.name}'s avatar`}
                                    style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '18px' }}
                                />
                                <div style={{ fontWeight: 600, fontSize: '18px', color: '#1769aa', marginTop: '10px',}}>
                                    {user.name}
                                </div>
                            </div>
                            <div style={{ color: '#555', fontSize: '15px', justifySelf: 'flex-start', flex: 4, textAlign: 'left' }}>
                                Email: {user.email}
                            </div>
                            <div style={{ color: '#555', fontSize: '15px', justifySelf: 'center', flex: 4 }}>
                                Phone: {user.phoneNumber}
                            </div>
                            <div style={{ color: '#888', fontSize: '14px', flex: 4, textAlign: 'right', alignSelf: 'flex-start' }}>
                                Address: {user.address}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Add your content here */}
        </div>
    );
};

export default ServiceUsersScreen;