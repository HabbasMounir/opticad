/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom'
import style from './sideBar.module.css'
import logo from "./../../assets/largLogo.svg"
import { Home, Users } from '../../assets/svgComponents/svg'
export default function Sidebar() {
  return (
    <nav  className={style.sideNav}>

    <span optico='true' className={style.Logoblock}>
    <img className={style.logo} src={logo}  alt="" />
    
    </span>
    <nav optico='true' className={style.nav}>
    <span  className={style.block}>
    <Home/> home
    </span>
    <span  className={style.block}>
    <Home/> home
    </span>
    <span  className={style.droped}>
        <span>Mes clients</span> 
        <span>Mes dus clients</span> 
        <span>Mes dus clients</span> 
        <span>Mes suivis</span> 
        <span>Mes suivis</span> 
        <span>Mes devis</span> 
    </span>
    <span  className={style.block}>
    <Home/> hodsdme225
    </span>
    <span className={style.droped}>
        <span>Mes clients</span> 
        <span>Mes dus clients</span> 
        <span>Mes dus clients</span> 
        <span>Mes suivis</span> 
        <span>Mes suivis</span> 
        <span>Mes devis</span> 
    </span><span className={style.block}>
    <Home/> home24524
    </span>
    <span className={style.droped}>
        <span>Mes clients</span> 
        <span>Mes dus clients</span> 
        <span>Mes dus clients</span> 
        <span>Mes suivis</span> 
        <span>Mes suivis</span> 
        <span>Mes devis</span> 
    </span><span className={style.block}>
    <Home/> home
    </span>
    <span className={style.droped}>
        <span>Mes clients</span> 
        <span>Mes dus clients</span> 
        <span>Mes dus clients</span> 
        <span>Mes suivis</span> 
        <span>Mes suivis</span> 
        <span>Mes devis</span> 
    </span>

    </nav>

    <span className={style.block}>
    <Users/> planing
    </span>
    <span className={style.block}>
    <Users/> Users
    </span>
    <span className={style.block}>
    <Users/> Users
    </span>


      </nav>

  )
}