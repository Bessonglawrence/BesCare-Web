import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import { serviceUsers, ServiceUser } from '../../components/Data/data';

const serviceUsersList: ServiceUser[] = serviceUsers;

const ServiceUsersScreen = () => {
    return (
        <div>
            <NavBar />
            <SideBar carers={serviceUsersList} />
            {/* Add your content here */}
        </div>
    );
};

export default ServiceUsersScreen;