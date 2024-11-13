import React, { useEffect, useState } from 'react'
import { Home, Users } from '../../assets/svgComponents/svg'
import style from './sideBar.module.css'
import { Link } from 'react-router-dom'

export default function DropedBlock({bLink,to}) {
    const [block,SetBlock]=useState(bLink)
    useEffect(()=>{
        switch (bLink) {
            case "home":
                SetBlock(<Home/>)
              break;
            case "users":
                SetBlock(<Users/>)
              break;
            case "das":
                SetBlock(<Home/>)
              break;
            
            }
    }
   ,[] )
  return (
    <Link to={to} className={style.block}>
        {block} {bLink}
        </Link>
  )
}