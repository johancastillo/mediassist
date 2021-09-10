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

                        <h4>Productos más vendidos</h4>
                        <div className="row">

                            <div className="col-md-3">
                                <img src="./assets/images/products/01.jpeg" width="100%" alt="" />
                            </div>

                            <div className="col-md-3">
                                <img src="./assets/images/products/02.jpg" width="100%" alt="" />
                            </div>

                            <div className="col-md-3">
                                <img src="./assets/images/products/03.jpeg" width="100%" alt="" />
                            </div>

                            <div className="col-md-3">
                                <img src="./assets/images/products/04.jpeg" width="100%" alt="" />
                            </div>

                            <div className="col-md-3">
                                <img src="./assets/images/products/05.jpeg" width="100%" alt="" />
                            </div>

                            <div className="col-md-3">
                                <img src="./assets/images/products/06.jpeg" width="100%" alt="" />
                            </div>

                            <div className="col-md-3">
                                <img src="./assets/images/products/01.jpg" width="100%" alt="" />
                            </div>

                            <div className="col-md-3">
                                <img src="./assets/images/products/01.jpg" width="100%" alt="" />
                            </div>
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

