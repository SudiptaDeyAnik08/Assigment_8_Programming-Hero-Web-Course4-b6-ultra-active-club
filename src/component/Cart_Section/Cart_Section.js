import React from 'react'
import './Cart_Section.css';
import sudipta from '../../images/kuet.JPG';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Cart_Section = () => {
   
  


    

    return (
        <div className='Cart_Section'>
            {/* My info */}
            <div className='Parent-info'>
                <div id='Personal-img'>
                    <img src={sudipta} alt="" />
                </div>
                <div className='Personal-info-description'>
                    <h3>Sudipta Dey Anik</h3>
                    {/* <FontAwesomeIcon icon="fa-solid fa-location-dot" /> */}
                    <p>Dhaka,Bangladesh</p>
                </div>

            </div>

            <div>
                <div className='Parent'>
                   <div className='body-info'>
                   <p>Weight :  </p>
                     <h3> 75</h3><sub>kg</sub>                        
                   </div>
                   <div className='body-info'>
                   <p>Height :  </p>
                     <h3> 5.5</h3><sub>ince</sub>      
                   </div>
                   
                   <div className='body-info'>
                   <p>Age :  </p>
                     <h3> 25</h3><sub>years</sub>   
                        
                   </div>
                </div>
            </div>

            {/* Add A Break  */}
            <div className='Add-A-Break'>
                <h3>Add A Break</h3>
            </div>
            <div className='Button'>
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
                <button>60s</button>
            </div>

            {/* Exercise Details */}
            <div className='Add-A-Break'>
                <h3>Exercise Details</h3>
            </div> 
            <div className='Exercise-Details'>
               <div className='Exercise-Details-time'> <h4>Exercise time </h4></div>
                <div className='Exercise-Details-p'><p>200.00s</p></div>
            </div>

            <div className='Exercise-Details'>
               <div className='Exercise-Details-time'> <h4>Break time</h4></div>
                <div className='Exercise-Details-p'><p>15.00s</p></div>
            </div>

            <button className='Activity-Completed-btn'>Activity Completed</button>
        </div>
    )
}

export default Cart_Section;