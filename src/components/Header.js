import React from "react";
import styles from "./Header.css";
function Header(){
    return (
    <>
    <div className="container">
        <div className="header">
            <div className="header-inline">
              <a href="{{url_for('index')}}"><h1>Vintage Machine Cafe</h1></a>
              <p>great coffee, food & relaxing spot.</p>
            </div>
            <div className="header-inline">
                <div className="header-btn"><a href="/"><button className="btn btn-outline-light">Login</button></a></div> 
                <div className="header-btn"><a href="/"><button className="btn btn-outline-light">My orders</button></a></div> 
                <div className="header-btn"><a href="/"><button className="btn btn-outline-light position-relative">My Cart<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"></span></button></a></div>         
            </div>
        </div> 
    </div>   
            

        </>

    )
}
export default Header