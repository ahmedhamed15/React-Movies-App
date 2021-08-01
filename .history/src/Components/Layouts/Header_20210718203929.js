import React from 'react';

import Logo from '../../assets/images/logo.png';

const Header = () => {
    return (
         <header className="header row">
             <div className="col">
                 <img src={Logo} alt="" />
             </div>
             <div className="col">
                 <Link to="/search"> Search </Link>
             </div>
         </header>
    )
}

export default Header
