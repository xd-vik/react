import React, { createElement, useState } from 'react'
import Cards from './Cards'
import { Resturant } from '../constant'

function filterData(search,Restraun){
     const filterData =  Restraun.filter((res)=>
        res.info.name.includes(search)
     
    )
return filterData;
}

const Resturants = () => {
    const [search, getSearch] = useState("Pizza");
    const [data,setData] = useState("");
    const [Restraun, setRestraun] = useState(Resturant);
    return(
        <>
        <div className="search">
            <input 
            type="text" 
            placeholder='Search'
            className='Search-box'
            value={search}
            onChange={
                (e) =>{
                    getSearch(e.target.value)
                }
            }
            />
            <button onClick={
                ()=>{
                    const Resdata = filterData(search, Restraun)
                    setRestraun(Resdata);
                  setData(  " Results for  " + search  )
                }
            } >Search</button>
            <div>  {data} </div>
            </div>  
        <div className="Res">
        {
            Restraun.map((resturant)=>{
                return <Cards {...resturant.info} key={resturant.info.id}/>
               
            })
        }
        </div>   
        </>
  
        
    )
   
}

export default Resturants