import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { carers, Carer } from '../../components/Data/data'
import SideNavigator from '../../components/SideBar/SideNavigator'


const carersList: Carer[] = carers
export default function CarersScreen() {
  return (
    <div className="container">
      <NavBar />
      <SideNavigator />
      <h1>Carers List</h1>
      <ul>
        {carersList.map((carer) => (
          <li key={carer.id}>
            {carer.name} - {carer.email}
          </li>
        ))}
      </ul>
    </div>
  )
}
