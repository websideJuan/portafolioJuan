
const Navegation = () => {
  return (
    <nav className="navegacion">
      <div className="nav__logo">
        <p className="nav__logo-para">Portafolio</p>
      </div>

      <ul className="nav__center">
        <li className="nav-item">
          <a href="#/" className="nav-link">Inicio</a>
        </li>
        <li className="nav-item">
          <a href="#/" className="nav-link">Aserca de mi</a>
        </li>
        <li className="nav-item">
          <a href="#/" className="nav-link">habilidades</a>
        </li>
        <li className="nav-item">
          <a href="#/" className="nav-link">trabajos</a>
        </li>
      </ul>

      <div className="icons__menu">
        <button className="btn btn-search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
        <button className="btn btn-menu">
          <i class="fa-solid fa-bars"></i>
        </button>
      </div>

      {/* <div className="">
        <img src="./src/assets/carrito.svg" alt="imghero" />
      </div> */}
    </nav>
  )
}


export default Navegation