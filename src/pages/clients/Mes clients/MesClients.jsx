import React, { useEffect, useState } from 'react'
import Style from './page.module.css'
export default function MesClients() {

const [recherche,setRecherche]=useState()
const [clientTable,setClientTable]=useState([])
const [rslected,setRSlected]=useState('Nom')

const [Pagination,setPagination]=useState({
    st:0,end:5,steps:5
})
    let meClient =
    [
{ id:1,Nom:'wsddsdf asod1',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:2,Nom:'wssfdsdfdd asod2',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:3,Nom:'wssdfdd asod3',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:4,Nom:'aasawasdd asod4',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:5,Nom:'aaawasdd asod5',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:6,Nom:'aaawasdd asod6',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:7,Nom:'aaawasdd asod8',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:8,Nom:'aaawasdd asod8',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:9,Nom:'aaawasdd asod8',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:10,Nom:'aaawasdd afsod8',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:11,Nom:'aaawasdd asfsod8',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:12,Nom:'aaawasdd asdfssod8',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:13,Nom:'aaawasdd dfsdfasdfsdfsod8',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:14,Nom:'aaawasdd sdffsfdasod8',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:15,Nom:'aaawasdd afsdfsod8',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:16,Nom:'aaawasdd asdfsdfsdfsod8',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:17,Nom:'aaawasdd asosfddsfd8',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:18,Nom:'aaawasdd asdfsdsod8',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:20,Nom:'aaawasdd asodsdf8f',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:21,Nom:'aaawasdd assdfsdfod8',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:22,Nom:'aaawasdd assdfsdfosdfd8',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:23,Nom:'aaawasdd asod8sdfsdf',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
{ id:44,Nom:'aaawasdd assdfsdfod8',Prénom:'adasd ',Adresse:'setids',Ville:'dasd', Téléphone:'ds',dvente:'sd'},
  ]






useEffect(()=>{
    setClientTable([])
    setClientTable(meClient?.filter((u,i) =>recherche?u[rslected]?.includes(recherche):u )
    .filter((c,i)=>
        i>=Pagination.st&&i<=Pagination.end?c:""
         )
        ) 

},[meClient,Pagination,recherche,rslected])












    function inputhandle(e){
        setRecherche(e.target.value)
    }
    function Paginationhandler(v){
        let p=Pagination
        switch (v) {
            case 0:
                setPagination({ st:0,end:p.steps-1,steps:p.steps })
              break;
            case "prev":
                setPagination({ 
                    st:p.st>0?p.st-p.steps:0,
                    end:p.end>p.steps?p.end-p.steps:p.end,
                    steps:p.steps })
              break;
            case "next":
                setPagination({ 
                    st:p.st<meClient.length-meClient.length % p.steps? p.st+p.steps:meClient.length-meClient.length % p.steps,
                    end:p.end<meClient.length-p.steps?p.end+p.steps:meClient.length-1,
                    steps:p.steps })
              break;
            case "last":
                setPagination({ 
                    st:meClient.length-meClient.length % p.steps,
                    end:meClient.length-1,
                    steps:p.steps })
              break;

            
            }        
    }
   
    function slecthandle(e){
        setRSlected(e.target.value)
    }






  return (
    <main className={Style.page}>
        MesClients
        <div   className={Style.panel}>
			<div  optico='true' className={Style.Recherche}>
               <label >
               Recherche :
               <select onChange={slecthandle}> 
               <option value="Nom">Nom</option>
               <option value="Prénom">Prénom</option>
               <option value="Adresse">Adresse</option>
               <option value="Ville">Ville</option>
               <option value="Téléphone">Téléphone</option>
               <option value="dvente">Dernière vente</option>
               </select>  
<input  value={recherche} onChange={inputhandle} type="text" />
               </label>
            </div>
       
            <div optico='true' className={Style.Pagination}>
    <span onClick={()=>Paginationhandler(0)}>first</span>
    <span onClick={()=>Paginationhandler("prev")}>prev</span>
    <span>0</span>
    <span>1</span>
    <span>3</span>
    <span onClick={()=>Paginationhandler("next")}>next</span>
    <span onClick={()=>Paginationhandler("last")}>last</span>

            </div>

      </div>
	<table optico='true'  className={Style.table}>
		<thead  >
			<tr optico='true'>
				<th>Nom</th>
				<th>Prénom</th>
				<th>Adresse</th>
				<th>Ville</th>
				<th>Téléphone</th>
				<th>Dernière vente</th>
			</tr>
            {Pagination.st } :{Pagination.end} : {Pagination.steps}
		</thead >

        <tbody optico='true' >
			{/* {meClient.map((c)=>
            <tr key={c.id}>
            <td>{c.Nom}</td>
            <td>{c.Prénom}</td>
            <td>{c.Adresse}</td>
            <td>{c.Ville}</td>
            <td>{c.Téléphone}</td>
            <td>{c.dvente}</td>
        </tr>
            )} */}
            
			{/* {meClient?.filter((u,i) =>recherche?u[rslected]?.includes(recherche):u ).map((c,i)=>
           i>=Pagination.st&&i<=Pagination.end?<tr key={c.id}>
            <td>{c.Nom}   is   {i}</td>
            <td>{c.Prénom}</td>
            <td>{c.Adresse}</td>
            <td>{c.Ville}</td>
            <td>{c.Téléphone}</td>
            <td>{i}</td>
        </tr>: ""
            )} */}
			{clientTable.map((c,i)=>
           <tr key={c.id}>
            <td>{c.Nom}   is   {i}</td>
            <td>{c.Prénom}</td>
            <td>{c.Adresse}</td>
            <td>{c.Ville}</td>
            <td>{c.Téléphone}</td>
            <td>{i}</td>
        </tr>
            )}

		</tbody>

















</table>
    </main>
  )
}
