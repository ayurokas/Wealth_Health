// Ce composant React affiche une page d'erreur 404.

import React from 'react';
import { NavLink  } from 'react-router-dom';
import imgError from "../img/404Error.svg";
import '../css/error.css';


export default function Error() {
    return (
        <div className='error_message'>
            <img src={imgError} alt="error 404" width="600" height="600"/>
            <h2>Oups! La page que vous recherchez nexiste pas.</h2>
            <h3>
                <NavLink to="/" style={{ textDecoration: 'none', color: '#00bb76' }}>Retourner sur la page daccueil</NavLink >
            </h3>
        </div>
    )
}