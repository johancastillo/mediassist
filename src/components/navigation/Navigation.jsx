
import { Link } from 'wouter'

import "./Navigation.css"

const Navigation = () => {
    return (
        <nav className="navigation">
            <ul>
                <Link to="/">
                    <li>
                        <a>Categorías</a>
                    </li>
                </Link>


                <Link to="/">
                    <li>
                            <a>Inicio</a>
                    </li>
                </Link>

                <Link to="/tienda">
                    <li>
                            <a>Tienda</a>
                    </li>
                </Link>

                <Link to="/nosotros">
                    <li>
                            <a>Nosotros</a>
                    </li>
                </Link>

                <Link to="/contactanos">
                    <li>
                            <a>Contactanos</a>
                    </li>
                </Link>

                <Link to="/producto">
                    <li>
                            <a>Producto</a>
                    </li>
                </Link>


            </ul>
        </nav>

    )
};



export default Navigation;

