import { useRef } from "react";
import {Link} from 'react-router-dom'
//import PrachiStyle from './Home.module.css'

import { FaBars, FaTimes } from "react-icons/fa";
// import Home from "./Home";
import "./Navbar.css"


function Navbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
        <div className="apple">
		<header>
			<a href="#"><img src="https://www.pngkit.com/png/full/239-2392915_logo-gym-logo-png-white.png" height="60px" /></a>

			<nav ref={navRef}>
				<div classname='one'>
				<a  href="/#">Home</a>
				<Link to='/aboutus'>AboutUs</Link>
			
				<a  href="#training">Training</a>
				<a  href="#priseing">Pricing</a>
				</div>
				<button
					className="nav-btn nav-close-btn"
					onClick={showNavbar}>
					<FaTimes />
				</button>
			</nav>
			<button className="nav-btn" onClick={showNavbar}>
				<FaBars />
			</button>
      <div>
	  <Link to='/joinus'>
  	<button type="button" className="join">Join Us</button>
	</Link>
</div>

		</header>
        </div>
		
	);
}

export default Navbar;