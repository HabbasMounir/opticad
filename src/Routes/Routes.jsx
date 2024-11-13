import React from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'
import MesClients from '../pages/clients/Mes clients/MesClients'

export default function Routemap() {
  return (
 <Routes>


   <Route path='/client/mes_clients' element={<MesClients/>}/>
   <Route path="*" element={'*'} />
 </Routes> 
 )
}
