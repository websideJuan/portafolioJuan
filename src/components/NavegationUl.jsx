
const NavegationUl = ({contador}) => {
    
    console.log(contador)
    return (
    <ul className={`nav__center ${contador ? null:"showMenu"}`}>
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
  )
}

export default NavegationUl