import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import hercules from "../../img/hercules.png"

export const AddUser = () => {
    const { store, actions } = useContext(Context);
    const [ state, setState ] = useState({
        username: "",
        password: "",
        // token: "",
    });

    const navigate = useNavigate();

    const handleChange = event => {
        setState({
          ...state,
          [event.target.name]: event.target.value,
        })
      }

    const handleClick = () => {
        actions.createUser(
            state.username, 
            state.password, 
        ).then(()=> navigate("/"))
    }

    return (
        <div className="container">
            <div>
                <h1 className="text-center mt-5">Create your username & password</h1>
                <form>
                    <div className="form-group">
                        <label>Username</label>
                        <input 
                            type="text" 
                            name="username"
                            className="form-control" 
                            placeholder={"Username"}
                            value={state.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                            type="text" 
                            name="password"
                            className="form-control" 
                            placeholder={"Password"}
                            value={state.password}
                            onChange={handleChange}
                        />
                    </div>
                    <p></p>
                    <button 
                        type="button" 
                        className="btn btn-primary form-control"
                        onClick={
                            () => {handleClick()}
                        }
                    >
                        save
                    </button>
                    <p></p>
                    <div className="container d-flex">
                        <img src={hercules} className="m-auto pt-5"/>
                    </div>
                </form>
            </div>
        </div>
    );
}