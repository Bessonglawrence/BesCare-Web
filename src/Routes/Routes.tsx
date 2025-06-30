import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CarersRota from './screens/CarersRota/CarersRota';
import CarerRota from '../screens/CarerRotas/CarerRotas';
import CarersDetails from '../screens/CarersDetails/CarersDetails';
import CarersScreen from '../screens/CarersScreen/CarersScreen';
import ServiceUsersScreen from '../screens/ServiceUsersScreen/ServiceUsersScreen';
import ServiceUsersDetails from '../screens/ServiceUsersDetails/ServiceUsersDetails';
import ServiceUsersRotas from '../screens/ServiceUsersRotas/ServiceUsersRotas';
import HomeScreen from '../screens/Home/Home.screen';
//import CarersRota from '../pages/CarersRota';
import Settings from '../screens/Settings/Settings';

const AppRoutes: React.FC = () => (
    <Router>
        <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/carers" element={<CarersScreen />} />
            <Route path="/carers/:id" element={<CarersDetails />} />
            <Route path="/carers/:id/rota" element={<CarerRota />} />
            <Route path="/clients" element={<ServiceUsersScreen />} />
            <Route path="/service-users/:id" element={<ServiceUsersDetails />} />
            <Route path="/rotas" element={<ServiceUsersRotas />} />
            <Route path="/settings" element={<Settings />} />
            {/* Add more routes as needed */}
        </Routes>
    </Router>
);

export default AppRoutes;