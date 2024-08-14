import React from 'react';
import { useNavigate } from "react-router-dom";

export const LoginButton = () => {
    const navigate = useNavigate();

    return (
        <div className="">
            <div className='mt-4'></div>
            <p>Already have an account?</p>
            <p></p>
            <button 
                type='button'
                className="btn col-2 btn-dark m-auto rounded" 
                onClick={() => {
                    navigate("./login")
                }}
            >
                Login Here
            </button>
        </div>
    );
}