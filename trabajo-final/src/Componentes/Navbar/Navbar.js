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
    console.log('entre')
    if(window.innerWidth < 972) {
      setDropdown(false);
    } else {
      setDropdown(true)
    }
  };

  const onMouseLeave = () => {
    if(window.innerWidth < 972) {
      setDropdown(false);
    } else {
      setDropdown(false)
    }
  };
  return(
    <>
      <nav className='navbarat'>
        <Link to='/' className='navbar-logoat' onClick={closeMobileMenu} id='logo'>
          ALFATEX-GAMES <i className='fas fa-dice'/>
        </Link>
        <div className='menu-iconat' onClick={handleClick}>
          <i class={click ? 'fas fa-times' : 'fa fa-bars'} />
        </div>
        <ul className={click ? 'nav-menuat activeat' : 'nav-menuat'}>
          <li className='nav-itemat'>
            <Link to= '/' className= 'nav-linksat' onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className='nav-itemat'
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}>
            <Link to= '/recomendaciones' className= 'nav-linksat' onClick={closeMobileMenu}>
              Recomendaciones <i className='fas fa-caret-down' />
            </Link>
            {dropdown && <Dropdown />}
          </li>
          <li className='nav-itemat'>
            <Link to= '/proximamente' className= 'nav-linksat' onClick={closeMobileMenu}>
              Proximamente
            </Link>
          </li>
          <li className='nav-itemat'>
            <Link to= '/contacto' className= 'nav-linksat' onClick={closeMobileMenu}>
              Contacto
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
  export default Navbar;