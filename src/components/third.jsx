import React from 'react'
import './css/style.css'
export const Third = () => {
    return (
        <div className="third">
            <img src="imgs/bubbles.png" id="bubbles" alt=""/> 
            <svg id="second-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#292929" fill-opacity="1" d="M0,224L80,224C160,224,320,224,480,202.7C640,181,800,139,960,128C1120,117,1280,139,1360,149.3L1440,160L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className="third-info">
                <h2>DESVENTAJAS</h2>
                <p>
                    En la actualidad las PWA no pueden acceder a todas las funcionalidades de un dispositivo móvil, como por ejemplo el acceso a contactos o a funciones avanzadas de la cámara.
                </p>
            </div>
            <div className="fourth">
                <h2>Quienes somos?</h2>
                <a href="https://github.com/juanMLuduena" rel="noopener" target="_blank">Ludueña, Juan Martin</a> -
                <a href="https://github.com/bpilegi98" rel="noopener" target="_blank">Pilegi, Bianca</a> -
                <a href="https://github.com/Agus17LA" rel="noopener" target="_blank">López Aguillón, Agustín Ezequiel</a>
            </div>
        </div>
    )
}
