import React from "react";
import ReactDOM from "react-dom/client";
import './App.css';
import userIcon from './user.png';
import logo from './logo.png';
import searchIcon from './search.png'


// RECONCILATION
// const newDiv = (
//   <div>
//     <ul>
//       <li key={1234}>NewVik</li>
//       <li key={1233} >Viks</li>
//     </ul>
//     <ul>
//       <li key={1222}>viksindian</li>
//       <li key={1234}>NewVik</li>
//       <li key={1233}>Viks</li>
//     </ul>
//   </div>
// );

// COMPONENT

// FUNCTIONAL COMPONENT


// const Title = () => {
//     return (
//         <h2>This is the title</h2>
//     )
// }

// const Heading = () => {
//     return(
//         <div>

//             <h1>Vivek Kushwaha</h1>
//             <Title/>
//             <p>Hii , I am a Student</p>
//         </div>
//     );
// };

// ASSIGNMENT CODE 

const Header = () => {
    return (
        <>
        <header>
            <div className="left">
                <img src={logo} alt="logo" srcset="" />
            </div>
            <div className="searchBar">
                <input className="search" type="text" placeholder="search .." / >
                <img  className="searchIcon" src={searchIcon} alt="" />
            </div>
            <div className="right">
                <img src={userIcon} alt="" srcset="" />
            </div>
        </header>
        </>
    );
};



const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header/>);
