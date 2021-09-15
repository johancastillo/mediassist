// import ProductCardHorizontal from "../product-card-horizontal/ProductCardHorizontal"

import { Link } from "wouter";
import "./CategorieBar.css"


const CategorieBar = () => {
    return(
        <div className="categorie-bar my-4">
            <h3 className="text-center mb-4">Productos</h3>

            <ul>

                <Link to="/producto">
                    <li className="my-4">
                        <img className="img-banner" src="./assets/images/products/01.jpeg" width="100%" alt="" />
                    </li>
                </Link>

                <Link to="/producto">
                    <li className="my-4">
                        <img className="img-banner" src="./assets/images/products/07.jpg" width="100%" alt="" />
                    </li>
                </Link>

               

            </ul>
        </div>
    );
};


export default CategorieBar;




