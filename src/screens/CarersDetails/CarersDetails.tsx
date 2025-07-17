import React from 'react';
import { useParams } from 'react-router-dom';
import SideNavigator from '../../components/SideBar/SideNavigator';
import NavBar from '../../components/NavBar/NavBar';

const CarersDetails = () => {
    const { id } = useParams<{ id: string }>();
    return (
        <div>
            <h1>Carers Details</h1>
            {/* Add your carers details content here */}
        </div>
    );
};

export default CarersDetails;