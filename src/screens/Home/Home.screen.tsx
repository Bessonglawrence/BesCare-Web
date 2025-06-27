import React, { useState } from 'react';
import SideNavigator from '../../components/SideBar/SideNavigator';
import NavBar from '../../components/NavBar/NavBar';

const HomeScreen: React.FC = () => {

    return (
        <>
         <SideNavigator />
          <NavBar />
            <div className="container" style={{ justifyContent: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', height: '100vh', padding: '20px' }}>
                {/* Main content area */}
                <h1>Welcome to the Home Screen</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to the Home Screen</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to the Home Screen</h1>
                <p>This is the main content area.</p>
                <h1>Welcome to the Home Screen</h1>
                <p>This is the main content area.</p>
               
                {/* Add your main content here */}
            </div>
        </>
    );
};

export default HomeScreen;