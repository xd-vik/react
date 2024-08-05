import React, { createElement, useEffect, useState } from 'react'
import Cards from './Cards'
import { Resturant } from '../constant'
import SimEffect from './simEffect';
import { Link } from "react-router-dom";


 function filterData(search,Restraun){
     const filterData =  Restraun.filter((res)=>
        res.info.name.toLowerCase().includes(search.toLowerCase())

    )
return filterData;
}

const Resturants = () => {
    const [search, getSearch] = useState("Pizza");
    const [data,setData] = useState("");
    const [Restraun, setRestraun] = useState([]);
    const [filterRes , setFilterRes ] = useState([]);

   useState(
    getResturants
   )

    async function getResturants(){
        const data =  await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();

        setRestraun(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setFilterRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    if(!Restraun) return null;

    function sync (){
        if(filterRes?.length ===    0){
           return <h1>Not matched with {search} </h1>
        }
        else <span> Results for  {search} </span>
    }

    return (Restraun.length === 0 ? ( <SimEffect/> ) :(
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
                    setFilterRes(Resdata);
                    setData(sync());
                }
            } >Search</button>
            <div>  {data} </div>
            </div>
        <div className="Res">
        {
            filterRes.map((resturant)=>{
                return( <Link to={"/resmenu/" + resturant.info.id}>  <Cards {...resturant.info} key={resturant.info.id}/> </Link>

                )

            })
        }
        </div>
        </>


    )
    )
}

export default Resturants
