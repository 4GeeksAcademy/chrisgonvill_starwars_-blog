import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1"><h1>Characters</h1></span>
			</Link>
			<div className="ml-auto">
				<Link to="/Home.jsx">
				<span className="navbar-brand mb-0 h1"><h1>Home</h1></span>
				</Link>
			</div>
		</nav>
	);
};
