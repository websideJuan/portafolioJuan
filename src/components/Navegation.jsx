import { useState } from "react"
import NavegationUl from "./NavegationUl.jsx"


const Navegation = () => {
  const [contador, setContador] = useState(false)
  const menuShow = () => {setContador(!contador)}
  console.log(contador)
  return (
    <nav className="navegacion">
      <div className="nav__logo">
        <p className="nav__logo-para">Portafolio</p>
      </div>
      <NavegationUl props={contador}/> 
      <div className="icons__menu">
        <button className="cta cta-search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button
          onClick={() => menuShow()} 
          className="cta cta-menu"
        >
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </nav>
  )
}


export default Navegation