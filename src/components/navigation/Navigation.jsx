
import { Link } from 'wouter'

import "./Navigation.css"



const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                


                <Link to="/">
                    <li>
                            Inicio
                    </li>
                </Link>

                

                <Link to="/nosotros">
                    <li>
                           Nosotros
                    </li>
                </Link>


                    <li className="menu-down">
                        Áreas de negocio

                        <ul className="dropdown-menu">
                            <Link to="/">
                                <li>Diabetes</li>
                            </Link>

                            <Link to="/">
                                <li>Productos medicos descartables</li>
                            </Link>
                        </ul>
                    </li>

                <Link to="/contactanos">
                        <li>
                                Contactanos
                        </li>
                </Link>


            </ul>
        </nav>

    )
};



export default Navigation;

