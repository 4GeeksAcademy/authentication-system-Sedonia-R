import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import secret from "../../img/secret.png"

import { Context } from "../store/appContext";

export const Private = () => {
	const { store, actions } = useContext(Context);
    const navigate = useNavigate();

    const handleClick = () => {
        actions.LogoutUser();
        navigate("/home")
        }

	return (
		<div className="container">
                <h1>Hey, you made it!!</h1>
                <h1>Welcome to the SUPER SECRET website...</h1>
                <img  src={secret} />
                <p></p>
			<Link to="/">
				<button 
                    className="btn btn-primary"
                    onClick={
                        () => {handleClick()}
                    }
                >
                    Log out
                </button>
			</Link>
		</div>
	);
};