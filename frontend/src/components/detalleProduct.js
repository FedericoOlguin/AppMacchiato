import * as React from 'react';
import { Link as LinkRouter } from "react-router-dom";
import '../Styles/detalleProduct.css'
import { NavLink } from 'react-router-dom';


 export default function Detalle(){


return(
    <div id="container">
    <div class="product-details">
      <h1>MOLINO EUREKA MIGNON PERFETTO</h1>
      <p class="information">
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
        facilis, officia ratione id quibusdam doloremque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, hic molestiae. Placeat ipsum natus expedita!
      </p>

      <div class="control">
        <span class="price">$17658</span>
      </div>
      <div className="cta-col col2">
                    <div className="col-contenido">
                        <div className="btn-holder">
                           <NavLink to='/#' className="cta-btn"><h5>Buy Now</h5></NavLink>
                        </div>                        
                    </div>
                    <div className="containerSumarProd">            
         {/*  <!-- adding button and heading to show the digits -->
          <!--increment() and decrement() functions on button click--> */}
            {/* <button className='btnSumarProd' onclick={}>+</button>  
            <h2 id="counting"></h2>
            <button  className='btnSumarProd' onclick={}>-</button>  */}        
        </div>
           </div>
    </div>

    <div class="product-image">
      <img
        src="https://www.modobarista.com/product_images/z/658/Rosso-Perfeto__04248_zoom.jpg"
        alt="molinillo"
      />
    </div>
  </div>

)
}
