import React, { useContext } from 'react';
import { useActionData, useNavigate } from "react-router-dom";
import { Context } from '../store/appContext';

export const SignUpButton = ({user}) => {
    const {store, actions} = useContext(Context);
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