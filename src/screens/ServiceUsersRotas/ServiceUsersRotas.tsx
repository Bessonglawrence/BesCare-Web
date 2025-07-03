import React from 'react';
import SideNavigator from '../../components/SideBar/SideNavigator';
import NavBar from '../../components/NavBar/NavBar';

export default function ServiceUsersRotas() {
  return (
    <div>
      <SideNavigator />
        <NavBar />
        <div className="container" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', marginTop: '60px' }}>
            {/* Main content area */}
        </div>
        <h1>Welcome to the Service Users Rotas Screen</h1>        
        <h1>Service Users Rotas</h1>
    </div>
  )
}
