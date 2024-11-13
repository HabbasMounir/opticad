/* eslint-disable react/no-unknown-property */
import { Link } from 'react-router-dom'
import style from './sideBar.module.css'
import logo from "./../../assets/largLogo.svg"
import {  Users } from '../../assets/svgComponents/svg'
import LinkBlock from './LinkBlock'
export default function Sidebar() {

    let nav=
    [
        {
            Link:'home',
        },
        {
            Link:'client',
            droped:[
                'mes clients',
                'mes dus clients',
                'mes suivis'
            ]
        },
        {
            Link:'client',
            droped:[
                'mes clients',
                'mes dus clients',
                'mes suivis'
            ]
        },
        {
            Link:'client',
            droped:[
                'mes clients',
                'mes dus clients',
                'mes suivis'
            ]
        },
        {
            Link:'client',
            droped:[
                'mes clients',
                'mes dus clients',
                'mes suivis'
            ]
        },
        {
            Link:'client',
            droped:[
                'mes clients',
                'mes dus clients',
                'mes suivis'
            ]
        }

    ]

  return (
    <nav  className={style.sideNav}>

    <span optico='true' className={style.Logoblock}>
    <img className={style.logo} src={logo}  alt="" />
    
    </span>
    <nav optico='true' className={style.nav}>
        
        {nav.map((a,i)=><>
            <LinkBlock bLink={a.Link} bto={a.to} key={i}/>
            {a.droped&&
            <span  className={style.droped}>
            {a.droped?.map((b,i)=>{ 
                let to=b.replaceAll(' ','_')
    return <Link to={`${a.Link}/${to}`} key={i}>{b}</Link>
            }
        )}
        </span> }
        </>
        )}



 

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