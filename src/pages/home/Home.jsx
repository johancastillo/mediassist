import { Link } from "wouter"
import CategorieBar from "../../components/categorie-bar/CategorieBar"
import CategoriesCarousel from "../../components/categories-carousel/CategoriesCarousel"
import Slider from "../../components/slider/Slider"



const Home = () => {
    return (
        <div className="container page">
            <div className="row">
                <div className="col-md-4">
                    <CategorieBar />
                </div>

                <div className="col-md-8">
                    <Slider />
                    <CategoriesCarousel />


                    <br />
                    <br />

                    <section className="my-4">
                        <img src="./assets/images/banners/01.jpg" width="100%" alt="" />
                    </section>

                    <section className="my-4">

                        <h4>Producto más vendidos</h4>
                        <div className="row">

                            <Link to="/producto">
                                <div className="col-md-12">
                                    <img className="img-banner" src="./assets/images/products/01.jpeg" width="100%" alt="" />
                                </div>
                            </Link>

                            
                        </div>
                    </section>

                </div>

            </div>

            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
        </div>
    )
};



export default Home;

