import { useState } from "react"

const NavegationUl = () => {


  const [contador, setContador] = useState(false)


    return (
        <>
            <ul className={`nav__center ${contador ? 'd-none':''}`}>
                <li className="nav-item">
                    <i className="fa-solid fa-house"></i>
                    <a href="#/" className="nav-link">Inicio</a>
                </li>
                <li className="nav-item">
                    <i className="fa-solid fa-circle-info"></i>
                    <a href="#/" className="nav-link">Aserca de mi</a>
                </li>
                <li className="nav-item">
                    <i className="fa-solid fa-toolbox"></i>
                    <a href="#/" className="nav-link">habilidades</a>
                </li>
                <li className="nav-item">
                    <i className="fa-solid fa-diagram-project"></i>
                    <a href="#/" className="nav-link">trabajos</a>
                </li>
                <li className="nav-item">
                    <i className="fa-solid fa-address-card"></i>
                    <a href="#/" className="nav-link">contactame!</a>
                </li>
            </ul>
            <div className="icons__menu">
                <button className="cta cta-search">
                    <i className="fa-solid fa-magnifying-glass"></i>
                </button>
                <button
                    onClick={() => setContador(!contador)} 
                    className="cta cta-menu"
                >
                        <i className="fa-solid fa-bars"></i>
                </button>
            </div>
        </>
  )
}

export default NavegationUl