import React, { useState } from 'react';
import{ Link } from 'react-router-dom';
import './Navbar.css';
import  Dropdown  from './Dropdown';


const Navbar = () => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true)
    }
  };

  const onMouseLeave = () => {
    if(window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false)
    }
  };
  return(
    <>
      <nav className='navbar'>
        <Link to='/' className='navbar-logo'>
          ALFATEX-GAMES <i className='fas fa-dice'/>
        </Link>
        <div className='menu-icon' onClick={handleClick}>
          <i class={click ? 'fas fa-times' : 'fa fa-bars'} />
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li className='nav-item'>
            <Link to= '/' className= 'nav-links' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-item'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
            <Link to= '/recomendaciones' className= 'nav-links' onClick={closeMobileMenu}>
              Recomendaciones <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-item'>
            <Link to= '/proximamente' className= 'nav-links' onClick={closeMobileMenu}>
              Proximamente
            </Link>
          </li>
          <li className='nav-item'>
            <Link to= '/contacto' className= 'nav-links' onClick={closeMobileMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
  export default Navbar;