import { connect } from "react-redux";
import React, { useState, useEffect, useRef } from "react";
import FormModify from "./FormModify";
import productActions from "../redux/actions/productActions";

function CardModify(props) {

    const [form3, setForm3] = useState(false)
    function openForm3() {
        setForm3(!form3)
      }

  return (
    <>
    {props.form2?(
        <>
        <div className="card-panel">
            <div className="panel-imgproducto">
            <img
                src={props.product.image}
                alt="producto"
                className="imagen-producto"
            />
            </div>
            <div className="items-producto">
                <h2 className="subtitulo-producto">Nombre producto</h2>
                <h2 className="respuesta-producto"> {props.product.name}</h2>
                <h2 className="subtitulo-producto">Precio</h2>
                <h2 className="respuesta-producto">{props.product.price}</h2>
            </div>
            <div className="items-producto">
                <h2 className="subtitulo-producto">Stock</h2>
                <h2 className="respuesta-producto"> {props.product.stock}</h2>
                <h2 className="subtitulo-producto">Sale</h2>
                <h2 className="respuesta-producto"> {props.product.sale?'On Sale':'not on Sale'}</h2>
            </div>
        </div>

        <div className="boton-panel">
            <button className="button-modify" onClick={openForm3} >
                <span class="text">Modify</span>
                <span class="icon">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    >
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                    </svg>
                </span>
            </button>

            <button className="button-elimintate" onClick={()=>{props.deleteProduct(props.product._id)}}>
                <span className="text">Delete</span>
                <span className="icon">
                    <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    >
                    <path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"></path>
                    </svg>
                </span>
            </button>
        </div>
        <FormModify form3={form3} product={props.product}/>
        </>
        
        ):(
            <>
            </>
        )}
    </>
  );
}


const mapDispatchToProps = {

    deleteProduct: productActions.deleteProduct,
}

export default connect(null, mapDispatchToProps)(CardModify)


// ()=>{props.deleteProduct(props.product._id)}