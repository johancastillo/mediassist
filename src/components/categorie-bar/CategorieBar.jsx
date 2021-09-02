import ProductCardHorizontal from "../product-card-horizontal/ProductCardHorizontal"

import "./CategorieBar.css"


const CategorieBar = () => {
    return(
        <div className="categorie-bar my-4">
            <h3 className="text-center mb-4">Productos Populares</h3>

            <ul>
                <li>
                    <ProductCardHorizontal />
                </li>

                <li>
                    <ProductCardHorizontal />
                </li>

                <li>
                    <ProductCardHorizontal />
                </li>

            </ul>
        </div>
    );
};


export default CategorieBar;




