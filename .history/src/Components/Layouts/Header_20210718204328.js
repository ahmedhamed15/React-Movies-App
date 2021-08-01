import React from 'react';
import {Link, NavLink} from 'react-router-dom'; 
import Logo from '../../assets/images/logo.png';

const Header = () => {
    return (
         <header className="header">
             <div className-="container">
                 <div className="row">
                    <div className="col">
                        <NavLink to="/"> <img src={Logo} alt="" /> </NavLink>
                    </div>
                    <div className="col">
                        <Link to="/search"> Search </Link>
                    </div>
                 </div>
             </div>
         </header>
    )
}

export default Header
