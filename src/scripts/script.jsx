import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Script() {
    const location = useLocation();

    const [toggle,setToggle]=useState(false) 
    const [typo,setTypo]=useState([])

    useEffect(()=>{console.log(typo)},[typo])
    useEffect(()=>{
//         const sheet = new CSSStyleSheet();
        
//         document.querySelector('body').addEventListener("keydown", function(event) {
//             let p=[...typo , event.key ]
//             console.log(p)
//             setTypo([...typo , event.key ])
//             if (event.key=='F4') {
//                     sheet.replaceSync(`
//                     *[optico='true']{
//                     outline: 1px solid #32278381;
//                     box-shadow: #32278381 0px 0px  10px;
//                         transition: all .5s 0s;
//                         z-index: 99;
//                     filter: blur(50px);
//                     }
//                     *[optico='true']:hover{
//                     outline: 1px solid #32278381;
//                     /* transform: scale3d(1.15, 1.05, 1.8) translate3d(0.3rem, 0.25rem, 10rem); */
//                     /* transform: scale3d(1.175, 1.075, 1.8) translate3d(.5rem, 0.2rem, 10rem); */

//                     box-shadow: #32278381 0px 0px  10px;
//                         transition: all .5s 0s;
//                         z-index: 99;
//                         backdrop-filter: blur(3px);
//                     filter: blur(0px);
// }
// `);
//             document.adoptedStyleSheets = [sheet];  
//                 setToggle(!toggle)    
//         }
//         if (event.key=='F4'){
//             sheet.replaceSync(``)
//             document.adoptedStyleSheets = [sheet];  
//         }
            
//         });

    },[location])
  return (
    <div>script  {toggle?11:'ads'}</div>
  )
}
