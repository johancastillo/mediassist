
import { useEffect, useState } from 'react'
import "./NavInfo.css"


const NavInfo = () => {

    const [navState, setNavState] = useState(false)


    useEffect(() => {
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 288){
                setNavState(true)
            }else{
                setNavState(false)
    
            }
    
        })

    }, [])

    return(
        <div className={navState ? "container nav-info active my-4" : "container nav-info my-4"}>
            <div className="row">
                
                <div className="col-md-3">
                    <h1>MediAssist</h1>
                </div>
                
                <div className="col-md-3">
                    
                </div>
                
                <div className="col-md-3">

                </div>

                <div className="col-md-3">
                    
                </div>

            </div>
        </div>
    )
};


export default NavInfo;



