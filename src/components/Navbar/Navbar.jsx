import React from 'react'
import './Navbar.css'
import logo from '../../assets/logo.svg'
import {Link} from 'react-scroll'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'
import { useRef } from 'react'

const Navbar = () => {


const menuRef = useRef();


  const openMenu = () => {
    menuRef.current.style.right= "0";
  }

  const closeMenu = () => {

    menuRef.current.style.right= "-350px";
  }



  return (


    <div className='navbar'>
      <h1>Saikat.</h1>
        {/* <img src={logo} alt="" /> */}
        <img src={menu_open} onClick={openMenu} alt=""className='nav-mob-open'/>
            <ul ref={menuRef}  className="nav-menu">
            <img src={menu_close} onClick={closeMenu} alt="" className="nav-mob-close" />
                 <li className='first-li'><Link to="home" spy={true} smooth={true} offset={0} duration={500}>Home</Link></li>
                <li><Link to="about" spy={true} smooth={true} offset={0} duration={500}>About Me</Link></li>
                <li><Link to="skills" spy={true} smooth={true} offset={0} duration={500}>Skills</Link></li>
                <li><Link to="projects" spy={true} smooth={true} offset={0} duration={500}>Projects</Link></li>
                <li><Link to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link></li>
                
            </ul>

        <div className="nav-connect"><Link to="contact" spy={true} smooth={true} offset={0} duration={500}> Connect with me </Link></div>
    </div>


  )
}

export default Navbar