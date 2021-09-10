
import "./CategoriesCarousel.css"




const leftMove = () => {
    let categoriesCarousel = document.getElementById("categories-carousel")
    categoriesCarousel.scrollBy(-200, 0)

    //console.log("Left")

}


const rightMove = () => {
    let categoriesCarousel = document.getElementById("categories-carousel")
    categoriesCarousel.scrollBy(200, 0)
    
    //console.log("Right")

}

const CategoriesCarousel = () => {
    return (
        <div>
            <div className="controls my-2">
                <button className="btn mx-2" onClick={leftMove}>
                    <img src="./assets/images/icons/caret-left.svg" alt="" />
                </button>

                <button className="btn" onClick={rightMove}>
                    <img src="./assets/images/icons/caret-right.svg" alt="" />
                </button>
            </div>

            <div className="categories-carousel" id="categories-carousel">
            

            <div className="item">
                <div className="box">
                <img src="./assets/images/categories/catlegory-1.png" width="100%" alt="" />
                </div>

                <span>Categoria</span>
            </div>

            <div className="item">
                <div className="box">
                    <img src="./assets/images/categories/catlegory-2.png" width="100%" alt="" />
                </div>

                <span>Categoria</span>
            </div>

            <div className="item">
                <div className="box">
                    <img src="./assets/images/categories/catlegory-3.png" width="100%" alt="" />
                </div>

                <span>Categoria</span>
            </div>

            <div className="item">
                <div className="box">
                    <img src="./assets/images/categories/catlegory-4.png" width="100%" alt="" />
                </div>

                <span>Categoria</span>
            </div>

            <div className="item">
                <div className="box">
                    <img src="./assets/images/categories/catlegory-5.png" width="100%" alt="" />
                </div>

                <span>Categoria</span>
            </div>

            <div className="item">
                <div className="box">
                    <img src="./assets/images/categories/catlegory-6.png" width="100%" alt="" />
                </div>

                <span>Categoria</span>
            </div>

            <div className="item">
                <div className="box">
                    <img src="./assets/images/categories/catlegory-4.png" width="100%" alt="" />
                </div>

                <span>Categoria</span>
            </div>

            <div className="item">
                <div className="box">
                    <img src="./assets/images/categories/catlegory-4.png" width="100%" alt="" />
                </div>

                <span>Categoria</span>
            </div>

            
            
        </div>

        </div>

        
    );
};





export default CategoriesCarousel;





