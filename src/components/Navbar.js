import React from "react";
import styles from "./Navbar.css";

function Navbar(){
    return (
        <body>
   
        <nav className='navbar navbar-expand-md justify-content-center sticky-top'>
        <div className="container">
          <a className="navbar-brand" href="/"><img src="/" height="50px" width="50px" alt="Logo"/></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
              </li>
              <li className="nav-item">
                <button className="nav-link" >Pricing</button>
              </li>
 
              </ul>
            
          </div>
       
          <ul className="navbar-nav">
          <li className="nav-item">
           
          </li>
          </ul>
        
          <ul className="navbar-nav">
          <li className="nav-item">
            <a href="/" className="btn btn-primary">Login</a>
          </li>
        </ul>
     
        
        </div>
      </nav>
      </body>
    )
}
export default Navbar;