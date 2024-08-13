import React, { useContext } from "react";
import { Context } from "../store/appContext";
// import rigoImageUrl from "../../img/rigo-baby.jpg";
import computerImageUrl from "../../img/computer.jpg";
import sphinx from "../../img/sphinx.png";
import "../../styles/home.css";
import { LoginButton } from "../component/Login";
import { SignUpButton } from "../component/Signup";

export const Home = () => {
	const { store, actions } = useContext(Context);

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
