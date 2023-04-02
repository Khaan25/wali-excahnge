import React, {useState, useEffect} from "react";
import logo from "../../images/Logo-main.png"
import { NavLink } from 'react-router-dom';
import "./hamburger.css";
import "./navbar.css";
// import profile_img from "../../images/profile.jpg";

const Navbar = () => {
    const [navActive, setInActive] = useState("false");
    const [navbar, setNavbar] = useState(false);

    const handleToggle = () => {
      setInActive(!navActive);
    };

    const changeBackground = () => {
      if (window.scrollY >= 50) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener('scroll', changeBackground, true);
      return () => window.removeEventListener('scroll', changeBackground);
    }, []);



    return(
        <>
    <nav className={`navbar navbar-expand-lg ${navbar ? " scroll navbar-bg-scroll " : "navbar "} `} >
     <div className="container bg-transparent mt-0 mx-auto px-1" data-aos="fade-down" data-aos-delay="300">
        <a className="navbar-brand" href="/">
          <div className="logo">
            <img src={logo} alt="lOGO" />
          </div>
        </a>
        <button onClick={handleToggle} className= {`navbar-toggler hamburger hamburger--collapse ${navActive ? " " : "is-active"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="hamburger-box">
            <span className="hamburger-inner"></span>
          </span>
        </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
          <ul className="navbar-nav App-nav bg-transparent align-items-lg-center">
          
            <li className="nav-item mx-lg-3">
            <NavLink className='nav-NavLink' to="/">Home</NavLink>
            </li>
            {/* <li className="nav-item mx-lg-3">
            <NavLink className='nav-NavLink' to="/exchange">Exchange</NavLink>
            </li> */}
            <li className='nav-item mx-lg-3'>
            <NavLink className='nav-NavLink' to="/sign-up">Create Account</NavLink>
            </li>
            <li className="nav-item mx-lg-3">
            <NavLink className='nav-NavLink' to="/profile">Profile</NavLink>
            </li>
            {/* <li className='nav-item mx-lg-3'>
            <NavLink className=' profile-img' to="/profile"><img src={profile_img} alt="" /></NavLink>
            </li> */}

          </ul>
        </div>
     </div>
   </nav>
        </>
    );
}
export default Navbar;