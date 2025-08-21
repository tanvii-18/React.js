import React from 'react'
import "../style/home.css"
import { RiSearchLine } from "react-icons/ri";
import { IoNotifications } from "react-icons/io5";

function Search() {
  return (
    <div className='top-navbar'>
    <div className='searchBox'>
     <span className='searchicon'><RiSearchLine /></span> <input type="text" placeholder='search here...'/>
    </div>

    <div className="user-login">
      <IoNotifications style={{fontSize:"22px", marginTop:"0.5rem"}}/>
      <button>LogIn</button>
    </div>
    </div>
  )
}

export default Search
