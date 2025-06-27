import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import SideBar from '../../components/SideBar/SideBar'
import { carers, Carer } from '../../components/Data/data'


const carersList: Carer[] = carers
export default function CarersScreen() {
  return (
    <div className="container">
      <NavBar />
      <SideBar carers={carersList} />
      {/* Add your carers UI here */}
    </div>
  )
}
