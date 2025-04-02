import { NavLink } from 'react-router-dom'; //este componenete nos permite crear enlaces de navegacion
import '../styles/header.css';

const Header = () => {
    return (
        <header className="header-container">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-4">
                        <NavLink className="header-logo" to="/">
                            <img 
                                src="https://www.freepnglogos.com/uploads/lol-logo-png/league-of-legends-riot-games-logo-5.PNG" 
                                alt="Lolsito"
                            />
                        </NavLink>
                    </div>
                    <div className="col-md-8">
                        <ul className="nav-menu">
                            <li className="nav-item">
                                <NavLink to="/" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Home
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Family" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Roles
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/History" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    History
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/Campeones" className={({ isActive }) => isActive ? "nav-link active" : "nav-link"}>
                                    Campeones
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;