import React from 'react';
import { useNavigate } from "react-router-dom";

export const SignUpButton = () => {
    const navigate = useNavigate();

    return (
        <div className="">
            <h1>Welcome!</h1>
            <h3 className="text-success">New to our site?</h3>
            <p></p>
            <button 
                type='button'
                className="btn col-2 btn-success m-auto rounded" 
                onClick={() => {
                    navigate("./signup")
                }}
            >
                Sign up here!
            </button>
        </div>
    );
}