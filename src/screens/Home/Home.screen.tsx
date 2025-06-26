import React, { useState } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import SideBar from '../../components/SideBar/SideBar';
import { carers,serviceUsers } from '../../components/Data/data';
import ServiceUsersRotas from '../ServiceUsersRotas/ServiceUsersRotas';


interface Member {
    id: number;
    name: string;
}

const serviceUsersList: Member[] = serviceUsers;

const initialMembers: Member[] = carers;

const HomeScreen: React.FC = () => {
    const [members, setMembers] = useState<Member[]>(initialMembers);
    const [serviceUsers, setServiceUsers] = useState<Member[]>(serviceUsersList);
    const [currentIndex, setCurrentIndex] = useState<number>(0);


    return (
        <>
         <NavBar />
            <SideBar carers={serviceUsers} />
        </>
    );
};

export default HomeScreen;