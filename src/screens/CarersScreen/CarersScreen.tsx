import React,{useState, FormEvent} from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SideNavigator from '../../components/SideBar/SideNavigator';
import { Carer, carers, regions } from '../../components/Data/data';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const carersList: Carer[] = carers;
const regionsList = regions;


const initialFormState = {
    firstName: '',
    title: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    postCode: '',
    nextOfKin: '',
    nextOfKinNumber: '',
    nextOfKinEmail: '',
    employmentType: '', 
    dateOfBirth: '',
    startDate: '',
    region: '',
};

const CarersScreen = () => {
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
    const totalPages = Math.ceil(carersList.length / usersPerPage);

    // Only show users for the current page
    const paginatedUsers = carersList.slice(
        (currentPage - 1) * usersPerPage,
        currentPage * usersPerPage
    );
    return (
        <div>
            <NavBar />
            <SideNavigator />
            <div className="container" style={{marginLeft: '3rem', padding: '20px', marginTop: '2rem'}}>
                
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
                        minWidth: '700px',
                        boxShadow: '0 2px 16px rgba(0,0,0,0.15)',
                        position: 'relative',
                        transform: showModal ? 'translateY(0)' : 'translateY(100%)',
                        opacity: showModal ? 1 : 0,
                        transition: 'transform 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.3s',
                        display: 'flex',
                        gap: '32px',
                        alignItems: 'flex-start'
                      }}
                    >
                      {/* Map section */}
                      <div style={{ minWidth: '300px', minHeight: '400px', borderRadius: '10px', overflow: 'hidden', boxShadow: '0 1px 8px rgba(23,105,170,0.08)' }}>
                          <iframe
                              title="Service User Location"
                              width="400"
                              height="684"
                              style={{ border: 0 }}
                              loading="lazy"
                              allowFullScreen
                              referrerPolicy="no-referrer-when-downgrade"
                              src={
                                  form.address
                                      ? `https://www.google.com/maps?q=${encodeURIComponent(form.address)}&output=embed`
                                      : "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1982.031226287753!2d-0.1357!3d51.5005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604cbf1f1b1b7%3A0x2e8e6e2b1b1b1b1b!2sWestminster%2C%20London!5e0!3m2!1sen!2suk!4v1710000000000!5m2!1sen!2suk"
                              }
                          />
                      </div>

                      <form
                        onSubmit={handleAddUser}
                        style={{
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '18px',
                          background: 'linear-gradient(120deg,rgb(234, 240, 248) 0%, #f7fafd 100%)',
                          borderRadius: '16px',
                          padding: '28px 24px',
                          boxShadow: '0 4px 24px rgba(23,105,170,0.10)',
                          marginTop: '12px'
                        }}
                      >
                        <h2 style={{ margin: 0, fontSize: '24px', color: '#1769aa', fontWeight: 600, textAlign: 'center' }}>ADD CARER</h2>
                        {/* Form fields */}

                        <div style={{ display: 'flex', gap: '16px' }}>
                          <select
                            value={form.title || ''}
                            onChange={e => setForm({ ...form, title: e.target.value })}
                            required
                            style={{
                              flex: 0.7,
                              height: '44px',
                              borderRadius: '8px',
                              border: '1.5px solid #b3d3f6',
                              padding: '0 14px',
                              fontSize: '16px',
                              background: '#fff',
                              boxShadow: '0 1px 4px rgba(23,105,170,0.04)'
                            }}
                          >
                            <option value="">Title</option>
                            <option value="Mr">Mr</option>
                            <option value="Mrs">Mrs</option>
                            <option value="Miss">Miss</option>
                          </select>
                          <input
                            type="text"
                            placeholder="First Name"
                            value={form.firstName}
                            onChange={e => setForm({ ...form, firstName: e.target.value })}
                            required
                            style={{
                              flex: 1,
                              height: '44px',
                              borderRadius: '8px',
                              border: '1.5px solid #b3d3f6',
                              padding: '0 14px',
                              fontSize: '16px',
                              background: '#fff',
                              boxShadow: '0 1px 4px rgba(23,105,170,0.04)'
                            }}
                          />
                          <input
                            type="text"
                            placeholder="Last Name"
                            value={form.lastName}
                            onChange={e => setForm({ ...form, lastName: e.target.value })}
                            required
                            style={{
                              flex: 1,
                              height: '44px',
                              borderRadius: '8px',
                              border: '1.5px solid #b3d3f6',
                              padding: '0 14px',
                              fontSize: '16px',
                              background: '#fff',
                              boxShadow: '0 1px 4px rgba(23,105,170,0.04)'
                            }}
                          />
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                          <input
                            type="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={e => setForm({ ...form, email: e.target.value })}
                            required
                            style={{
                              flex: 1,
                              height: '44px',
                              borderRadius: '8px',
                              border: '1.5px solid #b3d3f6',
                              padding: '0 14px',
                              fontSize: '16px',
                              background: '#fff',
                              boxShadow: '0 1px 4px rgba(23,105,170,0.04)'
                            }}
                          />
                          <input
                            type="tel"
                            placeholder="Phone Number"
                            value={form.phone}
                            onChange={e => setForm({ ...form, phone: e.target.value })}
                            style={{
                              flex: 1,
                              height: '44px',
                              borderRadius: '8px',
                              border: '1.5px solid #b3d3f6',
                              padding: '0 14px',
                              fontSize: '16px',
                              background: '#fff',
                              boxShadow: '0 1px 4px rgba(23,105,170,0.04)'
                            }}
                          />
                        </div>
                        <div style={{ display: 'flex', gap: '16px' }}>
                          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <label style={{ fontSize: '14px', color: '#1769aa', marginBottom: '4px' }}>Date of Birth</label>
                            <input
                              type="date"
                              value={form.dateOfBirth}
                              onChange={e => setForm({ ...form, dateOfBirth: e.target.value })}
                              required
                              style={{
                                height: '44px',
                                borderRadius: '8px',
                                border: '1.5px solid #b3d3f6',
                                padding: '0 14px',
                                fontSize: '16px',
                                background: '#fff',
                                boxShadow: '0 1px 4px rgba(23,105,170,0.04)'
                              }}
                            />
                          </div>
                          <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
                            <label style={{ fontSize: '14px', color: '#1769aa', marginBottom: '4px' }}>Start Date</label>
                            <input
                              type="date"
                              value={form.startDate}
                              onChange={e => setForm({ ...form, startDate: e.target.value })}
                              required
                              style={{
                                height: '44px',
                                borderRadius: '8px',
                                border: '1.5px solid #b3d3f6',
                                padding: '0 14px',
                                fontSize: '16px',
                                background: '#fff',
                                boxShadow: '0 1px 4px rgba(23,105,170,0.04)'
                              }}
                            />
                          </div>
                        </div>
                        <select
                          value={form.employmentType}
                          onChange={e => setForm({ ...form, employmentType: e.target.value })}
                          style={{
                            height: '44px',
                            borderRadius: '8px',
                            border: '1.5px solid #b3d3f6',
                            padding: '0 14px',
                            fontSize: '16px',
                            background: '#fff',
                            boxShadow: '0 1px 4px rgba(23,105,170,0.04)'
                          }}
                        >
                          <option value="">Employment Type</option>
                          <option value="Full Time">Full Time</option>
                          <option value="Part Time">Part Time</option>
                          <option value="Bank Worker">Bank Worker</option>
                          <option value="Special Arrangement">Special Arrangement</option>
                        </select>

                        <div style={{ display: 'flex', gap: '16px' }}>
                          <input
                            type="text"
                            placeholder="Next of Kin"
                            value={form.nextOfKin}
                            onChange={e => setForm({ ...form, nextOfKin: e.target.value })}
                            style={{
                              flex: 1,
                              height: '44px',
                              borderRadius: '8px',
                              border: '1.5px solid #b3d3f6',
                              padding: '0 14px',
                              fontSize: '16px',
                              background: '#fff',
                              boxShadow: '0 1px 4px rgba(23,105,170,0.04)'
                            }}
                          />
                          <input
                            type="tel"
                            placeholder="Next of Kin Number"
                            value={form.nextOfKinNumber}
                            onChange={e => setForm({ ...form, nextOfKinNumber: e.target.value })}
                            style={{
                              flex: 1,
                              height: '44px',
                              borderRadius: '8px',
                              border: '1.5px solid #b3d3f6',
                              padding: '0 14px',
                              fontSize: '16px',
                              background: '#fff',
                              boxShadow: '0 1px 4px rgba(23,105,170,0.04)'
                            }}
                          />
                          <input
                            type="email"
                            placeholder="Next of Kin Email"
                            value={form.nextOfKinEmail}
                            onChange={e => setForm({ ...form, nextOfKinEmail: e.target.value })}
                            style={{
                              flex: 1,
                              height: '44px',
                              borderRadius: '8px',
                              border: '1.5px solid #b3d3f6',
                              padding: '0 14px',
                              fontSize: '16px',
                              background: '#fff',
                              boxShadow: '0 1px 4px rgba(23,105,170,0.04)'
                            }}
                          />
                        </div>

                        <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end' }}>
                          <input
                            type="text"
                            placeholder="Address"
                            value={form.address}
                            onChange={e => setForm({ ...form, address: e.target.value })}
                            style={{
                              flex: 1,
                              height: '44px',
                              borderRadius: '8px',
                              border: '1.5px solid #b3d3f6',
                              padding: '0 14px',
                              fontSize: '16px',
                              background: '#fff',
                              boxShadow: '0 1px 4px rgba(23,105,170,0.04)'
                            }}
                          />
                        </div>

                        <div>
                          <input
                            type="text"
                            placeholder="Post Code"
                            value={form.postCode || ''}
                            onChange={e => setForm({ ...form, postCode: e.target.value })}
                            style={{
                              width: '95%',
                              height: '44px',
                              borderRadius: '8px',
                              border: '1.5px solid #b3d3f6',
                              padding: '0 14px',
                              fontSize: '16px',
                              background: '#fff',
                              boxShadow: '0 1px 4px rgba(23,105,170,0.04)'
                            }}
                          />
                        </div>
                        <div style={{ fontSize: '14px', color: '#555', }}>
                            <select
                              value={form.region}
                              onChange={e => setForm({ ...form, region: e.target.value })}
                              style={{
                                width: '100%',
                                height: '44px',
                                borderRadius: '8px',
                                border: '1.5px solid #b3d3f6',
                                padding: '0 14px',
                                fontSize: '16px',
                                background: '#fff',
                                boxShadow: '0 1px 4px rgba(23,105,170,0.04)'
                              }}
                            >
                              <option value="">Select Region</option>
                              {regionsList.map(region => (
                                <option key={region.id} value={region.code}>
                                  {region.name}
                                </option>
                              ))}
                            </select>
                          </div>

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
                {/* Pagination Controls and add service user */} 

                <div style={{ display: 'flex', alignItems: 'center', marginTop: '4rem', justifyContent: 'space-between', width: '90%', marginLeft: '8rem' }}>
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
                        <FontAwesomeIcon icon={faPlus} color="#1769aa" style={{ fontSize: 30, marginRight: '8px', marginBottom: '-5px', }} />
                       Add Carer
                    </button>
                    <span style={{ fontSize: '18px', color: '#1769aa', fontStyle: 'italic' }}>
                        Total Carers: {carersList.length}
                    </span>
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

export default CarersScreen;