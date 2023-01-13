import { useRef } from "react";
import {Link} from 'react-router-dom'

import { FaBars, FaTimes } from "react-icons/fa";
// import Home from "./Home";
import "./Navbar.css"


function AboutNavbar() {
	const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle("responsive_nav");
	};

	return (
        <div className="apple">
		<header>
			<a href="/#"><img src="https://www.pngkit.com/png/full/239-2392915_logo-gym-logo-png-white.png" height="60px" /></a>

			<nav ref={navRef}>
				<div classname='one'>
				<a  href="/#">Home</a>
                </div>
                </nav>
		</header>
        </div>
		
	);
}

export default AboutNavbar;