import React, { createElement } from "react";
import ReactDOM from "react-dom/client";
import './App.css';

const Header= ()=>{
    return(
        <>
        <div id="nav">
            <div className="logo">
                <img className="logoimg" src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_800,h_800/portal/c/logo_2022.jpeg" alt=""  />
            </div>
            <div className="menus">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
        </>
    )
}

const Resturants = [
    {
        "info": {
        "id": "725082",
        "name": "Pizza Hut",
        "cloudinaryImageId": "490629b70f89da8a5b93fc199ece335e",
        "locality": "Kankar Bagh",
        "areaName": "Patna",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Pizzas"
        ],
        "avgRating": 4,
        "parentId": "721",
        "avgRatingString": "4.0",
        "totalRatingsString": "500+",
        "sla": {
        "deliveryTime": 39,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-03-14 23:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-kankar-bagh-patna-patna-725082",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "622617",
        "name": "Wow! Momo",
        "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
        "locality": "City Centre Mall",
        "areaName": "Lodipur",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "Tibetan",
        "Healthy Food",
        "Asian",
        "Chinese",
        "Snacks",
        "Continental",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "1776",
        "avgRatingString": "4.1",
        "totalRatingsString": "500+",
        "sla": {
        "deliveryTime": 42,
        "lastMileTravel": 3.8,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "3.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-03-14 22:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/wow-momo-city-centre-mall-lodipur-patna-622617",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "126292",
        "name": "UBQ by Barbeque Nation",
        "cloudinaryImageId": "wbdvil5g2dvy1logvqrg",
        "locality": "Patna One Mall",
        "areaName": "Fraser Road",
        "costForTwo": "₹300 for two",
        "cuisines": [
        "North Indian",
        "Barbecue",
        "Biryani",
        "Kebabs",
        "Mughlai",
        "Desserts"
        ],
        "avgRating": 4,
        "parentId": "10804",
        "avgRatingString": "4.0",
        "totalRatingsString": "5K+",
        "sla": {
        "deliveryTime": 47,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "45-50 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-03-14 23:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/ubq-by-barbeque-nation-one-mall-fraser-road-patna-126292",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "583128",
        "name": "Chicago Pizza",
        "cloudinaryImageId": "vuglxzksaeffwthyawch",
        "locality": "Old Jakkanpur",
        "areaName": "Lodipur",
        "costForTwo": "₹450 for two",
        "cuisines": [
        "Pizzas",
        "Snacks"
        ],
        "avgRating": 3.9,
        "parentId": "60277",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 44,
        "lastMileTravel": 4.4,
        "serviceability": "SERVICEABLE",
        "slaString": "40-45 mins",
        "lastMileTravelString": "4.4 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-03-14 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/chicago-pizza-old-jakkanpur-lodipur-patna-583128",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "524423",
        "name": "La Pino'z Pizza",
        "cloudinaryImageId": "tnjwc1hltzaudqyilpzq",
        "locality": "Malahi Pakadi Chowk",
        "areaName": "Kankarbagh",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Pizzas",
        "Pastas",
        "Italian",
        "Desserts",
        "Beverages"
        ],
        "avgRating": 4,
        "parentId": "4961",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
        "deliveryTime": 35,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-03-15 02:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹199"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-malahi-pakadi-chowk-kankarbagh-patna-524423",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "253169",
        "name": "Bikaner Sweets and Pastry Shop",
        "cloudinaryImageId": "gd1wohldbsmjuv5mstp7",
        "locality": "Ghrounda",
        "areaName": "Kankarbagh",
        "costForTwo": "₹449 for two",
        "cuisines": [
        "Bakery",
        "Sweets"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "45906",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 2.9,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.9 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-03-14 22:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "pureveg",
        "imageId": "v1695133679/badges/Pure_Veg111.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/bikaner-sweets-and-pastry-shop-ghrounda-kankarbagh-patna-253169",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "88781",
        "name": "Sujata Family Restaurant",
        "cloudinaryImageId": "np13tsnfrxylkrk1ykm5",
        "locality": "Fraser Road Area",
        "areaName": "Fraser Road",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "North Indian",
        "Biryani",
        "Kebabs"
        ],
        "avgRating": 3.9,
        "parentId": "196672",
        "avgRatingString": "3.9",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 3.5,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "3.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-03-14 23:45:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "₹125 OFF",
        "subHeader": "ABOVE ₹249",
        "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/sujata-family-restaurant-area-fraser-road-patna-88781",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "81235",
        "name": "KFC",
        "cloudinaryImageId": "f01666ac73626461d7455d9c24005cd4",
        "locality": "Bankman Colony",
        "areaName": "Kankarbagh",
        "costForTwo": "₹450 for two",
        "cuisines": [
        "Burgers",
        "Biryani",
        "American",
        "Snacks",
        "Fast Food"
        ],
        "avgRating": 4.3,
        "parentId": "547",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-03-14 23:59:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹179"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-bankman-colony-kankarbagh-patna-81235",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "620953",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "092e58460657922e098a8afd5db838fe",
        "locality": "Karbighiya",
        "areaName": "Kankarbagh",
        "costForTwo": "₹400 for two",
        "cuisines": [
        "Pizzas",
        "Italian",
        "Pastas",
        "Desserts"
        ],
        "avgRating": 4.3,
        "parentId": "2456",
        "avgRatingString": "4.3",
        "totalRatingsString": "500+",
        "sla": {
        "deliveryTime": 30,
        "serviceability": "SERVICEABLE",
        "slaString": "30 mins",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-03-15 01:00:00",
        "opened": true
        },
        "badges": {
        "textExtendedBadges": [
        {
        "iconId": "Ratnesh_Badges/free%20del%20icon.png",
        "shortDescription": "Free Delivery",
        "fontColor": "#7E808C"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {
        "badgeObject": [
        {
        "attributes": {
        "description": "",
        "fontColor": "#7E808C",
        "iconId": "Ratnesh_Badges/free%20del%20icon.png",
        "shortDescription": "Free Delivery"
        }
        }
        ]
        }
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "20% OFF",
        "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-karbighiya-kankarbagh-patna-620953",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "707051",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "cloudinaryImageId": "b96645b1734207da9fe120af350c9dea",
        "locality": "Radha Enterprise",
        "areaName": "Kankarbagh",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Desserts",
        "Ice Cream",
        "Ice Cream Cakes"
        ],
        "avgRating": 4.7,
        "veg": true,
        "parentId": "582",
        "avgRatingString": "4.7",
        "totalRatingsString": "500+",
        "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 3,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.0 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-03-15 00:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-radha-enterprise-kankarbagh-patna-707051",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "712098",
        "name": "NIC Ice Creams",
        "cloudinaryImageId": "85825a6d74b1059a63a9b688de9f67ce",
        "locality": "Hanuman Nagar",
        "areaName": "Kailash Puri Road",
        "costForTwo": "₹120 for two",
        "cuisines": [
        "Ice Cream",
        "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "6249",
        "avgRatingString": "4.6",
        "totalRatingsString": "500+",
        "sla": {
        "deliveryTime": 33,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-03-15 01:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "ITEMS",
        "subHeader": "AT ₹169"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/nic-ice-creams-hanuman-nagar-kailash-puri-road-patna-712098",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "246443",
        "name": "Harilal's",
        "cloudinaryImageId": "cb3elcisgcyajxfsom43",
        "locality": "Gayatri Mandir Road",
        "areaName": "Kankarbagh",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Sweets",
        "Bakery",
        "North Indian"
        ],
        "avgRating": 4.4,
        "veg": true,
        "parentId": "472621",
        "avgRatingString": "4.4",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 36,
        "lastMileTravel": 2.8,
        "serviceability": "SERVICEABLE",
        "slaString": "35-40 mins",
        "lastMileTravelString": "2.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-03-14 22:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "pureveg",
        "imageId": "v1695133679/badges/Pure_Veg111.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/harilals-gayatri-mandir-road-kankarbagh-patna-246443",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "594671",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
        "locality": "People Cooperative Colony",
        "areaName": "Kankarbagh",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Desserts",
        "Ice Cream"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "5588",
        "avgRatingString": "4.5",
        "totalRatingsString": "100+",
        "sla": {
        "deliveryTime": 30,
        "lastMileTravel": 3.7,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-03-15 00:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-people-cooperative-colony-kankarbagh-patna-594671",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "579715",
        "name": "GetAWay-Ice Creams & Desserts",
        "cloudinaryImageId": "8194c8fed09497bce3714d2586653545",
        "locality": "Ashok Nagar",
        "areaName": "Kankarbagh",
        "costForTwo": "₹200 for two",
        "cuisines": [
        "Ice Cream",
        "Desserts",
        "Healthy Food",
        "Sweets"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "354819",
        "avgRatingString": "4.3",
        "totalRatingsString": "100+",
        "sla": {
        "deliveryTime": 28,
        "lastMileTravel": 1.5,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "1.5 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-03-15 00:00:00",
        "opened": true
        },
        "badges": {
        "imageBadges": [
        {
        "imageId": "v1695133679/badges/Pure_Veg111.png",
        "description": "pureveg"
        }
        ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {
        "badgeObject": [
        {
        "attributes": {
        "description": "pureveg",
        "imageId": "v1695133679/badges/Pure_Veg111.png"
        }
        }
        ]
        },
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "50% OFF",
        "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/getaway-ice-creams-and-desserts-ashok-nagar-kankarbagh-patna-579715",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "88759",
        "name": "Biryani House",
        "cloudinaryImageId": "17fd6f0dbf61eca50f091fc91af6e22f",
        "locality": "Salimpur Ahra",
        "areaName": "Golambar",
        "costForTwo": "₹350 for two",
        "cuisines": [
        "Biryani",
        "Mughlai"
        ],
        "avgRating": 3.9,
        "parentId": "134",
        "avgRatingString": "3.9",
        "totalRatingsString": "10K+",
        "sla": {
        "deliveryTime": 32,
        "lastMileTravel": 3.8,
        "serviceability": "SERVICEABLE",
        "slaString": "30-35 mins",
        "lastMileTravelString": "3.8 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-03-14 21:45:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "30% OFF",
        "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/biryani-house-salimpur-ahra-golambar-patna-88759",
        "type": "WEBLINK"
        }
        },
        {
        "info": {
        "id": "667782",
        "name": "Vadilal Ice Creams",
        "cloudinaryImageId": "3fb0b5c56d29759520d69213ba4fef8f",
        "locality": "Lohiya nagar",
        "areaName": "Kankarbagh",
        "costForTwo": "₹250 for two",
        "cuisines": [
        "Ice Cream",
        "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "11745",
        "avgRatingString": "4.6",
        "totalRatingsString": "100+",
        "sla": {
        "deliveryTime": 29,
        "lastMileTravel": 3.7,
        "serviceability": "SERVICEABLE",
        "slaString": "25-30 mins",
        "lastMileTravelString": "3.7 km",
        "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
        "nextCloseTime": "2024-03-14 22:00:00",
        "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
        "entityBadges": {
        "imageBased": {},
        "textBased": {},
        "textExtendedBadges": {}
        }
        },
        "aggregatedDiscountInfoV3": {
        "header": "10% OFF",
        "subHeader": "UPTO ₹40"
        },
        "differentiatedUi": {
        "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
        "differentiatedUiMediaDetails": {
        "mediaType": "ADS_MEDIA_ENUM_IMAGE",
        "lottie": {},
        "video": {}
        }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {}
        },
        "analytics": {},
        "cta": {
        "link": "https://www.swiggy.com/restaurants/vadilal-ice-creams-lohiya-nagar-kankarbagh-patna-667782",
        "type": "WEBLINK"
        }
        }
]

const Cards = ({name,cuisines,avgRating,cloudinaryImageId})=>{
    return(
        <div className="cards">
            
            <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="" />
        <h2>{name}</h2>
        <h3>{cuisines.join(", ")}</h3>
        <h4>Ratings : {avgRating} ⭐</h4>
        </div>
    )
}

const Resturant = () => {
    return(
        
        <div className="Res">
        {
            Resturants.map((resturant)=>{
                return <Cards {...resturant.info}/>
            })
        }
        </div>
       
        
        
    )
   
}

const Footer  = () =>{
    return(
        <div className="footer">
            <p>Made By Vivek In context of Namaste React Assignment</p>
        </div>
    )
}


const AppLayout = () =>{
    return(
        <>
        <Header/>
        <Resturant/>
       <Footer/>
        </>
        
    )
}


const root =  ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)