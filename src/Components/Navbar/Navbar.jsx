
// import React from 'react'
// import './Navbar.css'
// import menu_icon from '../../assets/menu.png';
// import logo from '../../assets/YouLogo.png';
// import search_icon from '../../assets/search.png';
// import upload_icon from '../../assets/upload.png';
// import more_icon from '../../assets/more.png';
// import notification_icon from '../../assets/notification.png';
// import profile_icon from '../../assets/laksh.jpg';
// import { Link } from 'react-router-dom'

// const Navbar = ({setSidebar}) => {
//   return (
//     <nav className="flex-div">
//       <div className="nav-left flex-div">
//         <img className="menu-icon" onClick={()=>setSidebar(prev=>prev===false?true:false)} src={menu_icon} alt="Menu" />
//          <Link to='/'><img className="logo" src={logo} alt="" /></Link>
//       </div>

//       <div className="nav-middle flex-div">
//         <div className='search-box flex-div'>
//         <input type="text" placeholder="Search" />
//         <img src={search_icon} alt="Search" /> 
//         </div>
//       </div>

//       <div className="nav-right flex-div">
//         <img src={upload_icon} alt="Upload" />
//         <img src={more_icon} alt="More" />
//         <img src={notification_icon} alt="Notification" />
//         <img src={profile_icon} alt="Profile" />
//       </div>
//     </nav>
//   )
// }

// export default Navbar

import React, { useState } from 'react';
import './Navbar.css';
import menu_icon from '../../assets/menu.png';
import logo from '../../assets/YouLogo.png';
import search_icon from '../../assets/search.png';
import upload_icon from '../../assets/upload.png';
import more_icon from '../../assets/more.png';
import notification_icon from '../../assets/notification.png';
import profile_icon from '../../assets/laksh.jpg';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = ({ setSidebar }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      navigate(`/search/${searchQuery}`);
    }
  };

  return (
    <nav className="flex-div">
      <div className="nav-left flex-div">
        <img
          className="menu-icon"
          onClick={() => setSidebar(prev => !prev)}
          src={menu_icon}
          alt="Menu"
        />
        <Link to='/'><img className="logo" src={logo} alt="YouTube Logo" /></Link>
      </div>

      <div className="nav-middle flex-div">
        <form className='search-box flex-div' onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">
            <img src={search_icon} alt="Search" />
          </button>
        </form>
      </div>

      <div className="nav-right flex-div">
        <img src={upload_icon} alt="Upload" />
        <img src={more_icon} alt="More Options" />
        <img src={notification_icon} alt="Notifications" />
        <img src={profile_icon} alt="Profile" />
      </div>
    </nav>
  );
};

export default Navbar;

