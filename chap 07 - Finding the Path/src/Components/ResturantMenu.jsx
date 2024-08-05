import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_URL } from "../constant";
import "../App.css"

const ResturantMenu = () =>{
    const {resid} = useParams();
    const [resturant,setResturant] = useState();
    const [resdis,setResdis] = useState();

    useEffect(()=>{
        ResturantMenus();
    },[])


   async function ResturantMenus() {
    const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=25.59080&lng=85.13480&restaurantId=" + resid);
    const json = await data.json();
    const resda = await json.data.cards[2].card.card.info;
    const resdb = await json.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
    setResturant(resda);
     setResdis(resdb)
    console.log(resdb[0].card.info.name);

   }

    return(
        <div className="ress">
        <div>
            <h2>Resturant id : {resid}</h2>
             <h2>Resturant Name : {resturant.name}</h2>
             <img className="res-img" src={ IMG_URL + resturant.cloudinaryImageId } alt="IMAGE" />
             <h2> Cost for two {resturant.costForTwoMessage}</h2>
        <h2> Rating {resturant.avgRating} </h2>
        </div>
        <div className="resmenu">
            <h1>Menu</h1>
            <ul>
                {Object.values(resdis).map((item)=>(<li>{item.card.info.name}</li>))}
            </ul>
        </div>
        </div>
    )
}

export default ResturantMenu;
