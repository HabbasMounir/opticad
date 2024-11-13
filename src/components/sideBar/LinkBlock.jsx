import React, { useEffect, useState } from 'react'
import { Home, Users } from '../../assets/svgComponents/svg'
import style from './sideBar.module.css'
import { Link } from 'react-router-dom'

export default function LinkBlock({bLink,bto}) {
    const [block,SetBlock]=useState()
    const [to,sryTo]=useState(bto?bto.replaceAll(' ','_'):bLink.replaceAll(' ','_'))
    
    useEffect(()=>{

        switch (bLink) {
            case "home":
                SetBlock(<Home/>)
              break;
            case "client":
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
