
import { Link } from 'wouter'

const Navigation = () => {
    return (
        <nav className="">
            <ul>
                <li>
                    <Link to="/">
                        <a>Inicio</a>
                    </Link>
                </li>

                <li>
                    <Link to="/tienda">
                        <a>Tienda</a>
                    </Link>
                </li>

                <li>
                    <Link to="/nosotros">
                        <a>Nosotros</a>
                    </Link>
                </li>

                <li>
                    <Link to="/contactanos">
                        <a>Contactanos</a>
                    </Link>
                </li>

                <li>
                    <Link to="/producto">
                        <a>Producto</a>
                    </Link>
                </li>


            </ul>
        </nav>

    )
};



export default Navigation;

