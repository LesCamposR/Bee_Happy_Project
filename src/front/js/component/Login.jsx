import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        // Aquí podrías agregar código para verificar las credenciales
    }

    return (
        <div className="login-container">

            <h1>Iniciar Sesión</h1>
            <p className="text-white-50 mb-5">Please enter your login and password!</p>
            <form onSubmit={handleSubmit}>
                <div className="form-group ">
                    <label htmlFor="username">Nombre de usuario:</label>
                    <input type="text" className="form-control" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                </div>
                <div className="form-group ">
                    <label htmlFor="password">Contraseña:</label>
                    <input type="password" className="form-control" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <br></br>
                <button type="submit" className='loginb btn btn-outline-light btn-secondary px-5 '>Iniciar sesión</button>

            </form>
        </div>



    );
}

export default Login;