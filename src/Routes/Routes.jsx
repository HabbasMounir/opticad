import Home from '@/pages/home/page'
import React from 'react'
import { Routes,Route, useLocation } from 'react-router-dom'

export default function Routemap() {
  return (
 <Routes>

<Route path='/' element={<Home/>}/>

   <Route path='/projects' element={"<ArticleList/>"}/>
   <Route path="*" element={'*'} />
 </Routes> 
 )
}
