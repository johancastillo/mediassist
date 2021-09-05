
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

                <Link to="/tienda">
                    <li>
                           Tienda
                    </li>
                </Link>

                <Link to="/">
                    <li>
                        Categorías
                    </li>
                </Link>

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

