import * as React from 'react';
import { Link as LinkRouter } from "react-router-dom";
import '../Styles/detalleCSS.css'
import { NavLink } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import productActions from '../redux/actions/productActions';
import machineCoffe from "../img/machineCoffe.png"

function Detalle(props){
  console.log(props)

  const [contador, setContador] = useState(0)

  const sumar = () => setContador (contador + 1)
  const restar = () => setContador (contador - 1)

  

  useEffect(()=>{
  },[])



return(
    <div id="container">
    <div class="product-details">
      <h1>MOLINO EUREKA MIGNON PERFETTO</h1>
      <p class="informationProd">
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
        facilis, officia ratione id quibusdam doloremque. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et, hic molestiae. Placeat ipsum natus expedita!
      </p>

      <div class="control">
        <span class="price">$17658</span>
      </div>
      <div className="cta-col col2">
                    <div className="col-contenido">
                        <div className="btn-holder">
                           <NavLink to='/#' className="cta-btn"><h5 id='botonBuy'>Add to Cart</h5></NavLink>
                        </div>                        
                    </div>
           </div>

           <div className='contador'>
              <button onClick={restar}> - </button>
              <h3> {contador} </h3>
              <button onClick={sumar}> + </button>
           </div>
    </div>

    <div class="product-image">
      <img
        src={machineCoffe}
        alt="molinillo"
      />
    </div>
  </div>

)
}
const mapStateToProps = (state) => {
  return {
    getOneProduct: state.productReducer. getOneProduct,
     
  }
}

export default connect(mapStateToProps, null)(Detalle)
