import React from "react";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
import sphinx from "../../img/sphinx.png";
import "../../styles/home.css";
import { LoginButton } from "../component/Login";
import { SignUpButton } from "../component/Signup";

export const Home = () => {
	return (
		<div className="text-center mt-2">
			<SignUpButton />
			<p>
				<img src={sphinx} />
			</p>
			<LoginButton />
		</div>
	);
};
