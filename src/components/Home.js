import React from "react";
import styles from "./Header.css";

import coffee from './assets/coffee.jpeg'
import breakfast from './assets/breakfast.jpeg'
import lunch from './assets/lunch.jpeg'
import bgimg from './assets/bg.jpeg'


function Home(){
    return(
    <div className="container">   

<a href="{{url_for('index')}}">
        <div class="store-cover-wrapper">
            <div class="store-cover-background" ></div>
        </div>
    </a>


    <div className="row">
    <div className="col-4">
    <div className="card mx-auto">
        <img src={coffee} className="card-img-top" alt="Coffee"/>
        <div className="card-body">
        <h5 className="card-title">Beverages</h5>
        <p className="card-text">Our coffee is freshly roasted and brewed to perfection. Try our signature espresso or a creamy latte.</p>
        <a href="/" className="btn btn-primary">View Menu</a>
        </div>
    </div>
    </div>
    <div className="col-4">
    <div className="card mx-auto">
        <img src={breakfast} className="card-img-top" alt="Breakfast"/>
        <div className="card-body">
        <h5 className="card-title">Breakfast</h5>
        <p className="card-text">Start your day off right with a hearty breakfast from Vintage Machine Cafe. Choose from a variety of options, including omelettes, pancakes, and more.</p>
        <a href="/" className="btn btn-primary">View Menu</a>
        </div>
    </div>
    </div>
    <div className="col-4">
    <div className="card mx-auto">
        <img src={lunch} className="card-img-top" alt="Lunch"/>
        <div className="card-body">
        <h5 className="card-title">Lunch</h5>
        <p className="card-text">Satisfy your midday cravings with a delicious lunch from Vintage Machine Cafe. Choose from a selection of sandwiches, salads, and more.</p>
        <a href="/" className="btn btn-primary">View Menu</a>
        </div>
    </div>
        
    </div>
    <footer my-3><h6>Copyright © 2023 Vintage Machine Cafe.</h6></footer><hr/>
</div>
</div>     
     
     
         
         
     
    
)
}
export default Home