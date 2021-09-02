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


                    <h1>All fine, all rigth!</h1>
                </div>

            </div>

            
        </div>
    )
};



export default Home;

