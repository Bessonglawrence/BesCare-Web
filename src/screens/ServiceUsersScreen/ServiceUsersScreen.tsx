import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SideNavigator from '../../components/SideBar/SideNavigator';
import { serviceUsers, ServiceUser } from '../../components/Data/data';

const serviceUsersList: ServiceUser[] = serviceUsers;

const ServiceUsersScreen = () => {
    return (
        <div>
            <NavBar />
            <SideNavigator />
            <div className="container" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', padding: '20px' }}>
                <h1>Service Users</h1>
                <p>This is the main content area for service users.</p>
                <h2>List of Service Users</h2>
                <ul>
                    {serviceUsersList.map((user) => (
                        <li key={user.id}>
                            {user.name} - {user.email}
                        </li>
                    ))}
                </ul>
            </div>
            {/* Add your content here */}
        </div>
    );
};

export default ServiceUsersScreen;