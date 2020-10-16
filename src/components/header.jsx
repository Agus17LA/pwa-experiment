import React from 'react'
import './css/style.css'

export const Header = () => {
    return (
    <header>
        <ul>
        <li className="nav-title" id="index">
                Progressive Web App
            </li>
            <li id="fourth">
                Quienes somos?
            </li>
            <li id="third">
                Desventajas
            </li>
            <li id="second">
                Beneficios
            </li>
            <li id="first">
                PWA: Que es?
            </li>
        </ul>
    </header>
    );
}