import React from 'react'
import './css/style.css'

export const First = () => {
    return (
        <div className="first" id="primero">
            <div className="img-container"> 
                <img src="imgs/pwa-icon.png" alt=""></img>
            </div>
            <svg id="first-shape" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#292929" fill-opacity="1" d="M0,160L80,170.7C160,181,320,203,480,181.3C640,160,800,96,960,80C1120,64,1280,96,1360,112L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"></path></svg>
            <div className="first-info">
                <h2>PWA: Qué es?</h2>
                <p>
                    Son páginas web, que mediante el uso de Service Workers y otras tecnologías se comportan más como aplicaciones normales que como aplicaciones web.
                </p>
            </div>
        </div>
    )
}
