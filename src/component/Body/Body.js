import React from "react";  
import './Body.css';
import images from '../../images/images.jfif';
import images1 from '../../images/dump.jpg';
import images2 from '../../images/pull.jpg';
import images3 from '../../images/rope.jpg';
import images4 from '../../images/striengt.jpg';
import images5 from '../../images/work.jpg';
import Cart_Section from '../Cart_Section/Cart_Section';
import addToCartSection from '../Cart_Section/Cart_Section'

const Body = () =>{

    return (
        <div className="body">
          <div className="h3Class">
            <h2>Select today’s exercise</h2>
          </div>

          {/* Cart Section */}
            <div className="Cart-parent">
                <div className="Cart-body">
                    <div className="Cart">
                       <div className="imga"> <img src={images} alt="" /></div>
                        <h3>Dumble</h3>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                        <h5><small className="title">For Age </small>: 20-25</h5>
                        <h5><small className="title">Time required </small>: 30s</h5>
                        <button  >Add To List</button>
                    </div>

                    <div className="Cart">
                       <div className="imga"> <img src={images1} alt="" /></div>
                        <h3>Dumble</h3>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                        <h5><small className="title">For Age </small>: 20-25</h5>
                        <h5><small className="title">Time required </small>: 30s</h5>
                        <button   >Add To List</button>
                    </div>

                    <div className="Cart">
                       <div className="imga"> <img src={images2} alt="" /></div>
                        <h3>Dumble</h3>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                        <h5><small className="title">For Age </small>: 20-25</h5>
                        <h5><small className="title">Time required </small>: 30s</h5>
                        <button>Add To List</button>
                    </div>

                    <div className="Cart">
                       <div className="imga"> <img src={images3} alt="" /></div>
                        <h3>Dumble</h3>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                        <h5><small className="title">For Age </small>: 20-25</h5>
                        <h5><small className="title">Time required </small>: 30s</h5>
                        <button   >Add To List</button>
                    </div>

                    <div className="Cart">
                       <div className="imga"> <img src={images4} alt="" /></div>
                        <h3>Dumble</h3>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                        <h5><small className="title">For Age </small>: 20-25</h5>
                        <h5><small className="title">Time required </small>: 30s</h5>
                        <button   >Add To List</button>
                    </div>

                    <div className="Cart">
                       <div className="imga"> <img src={images5} alt="" /></div>
                        <h3>Dumble</h3>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                        <h5><small className="title">For Age </small>: 20-25</h5>
                        <h5><small className="title">Time required </small>: 30s</h5>
                        <button   >Add To List</button>
                    </div>

                    <div className="Cart">
                       <div className="imga"> <img src={images} alt="" /></div>
                        <h3>Dumble</h3>
                        <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint</p>
                        <h5><small className="title">For Age </small>: 20-25</h5>
                        <h5><small className="title">Time required </small>: 30s</h5>
                        <button   >Add To List</button>
                    </div>
                    
                </div>
                <div className="Cart-selection">
                   <Cart_Section></Cart_Section>
                </div>
            </div>
        </div>
    )

}

export default Body;