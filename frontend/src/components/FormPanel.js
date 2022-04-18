import React, { useRef } from 'react'
import '../Styles/panelproducts.css'
import { connect } from "react-redux"
import productActions from "../redux/actions/productActions"

function FormPanel(props) {
    let formProd = useRef()


    function enviarData(event) {
        event.preventDefault()
        formProd.current.focus()
        let boolean
        let datosInp = new FormData(formProd.current)
        if (datosInp.get("sale") === "on") {
            boolean = true
        }else{
            boolean=false
        }
        let productObj = {
            name: datosInp.get("nameItem"),
            image: datosInp.get("ItemPhotoUrl"),
            category: datosInp.get("category"),
            price: datosInp.get("price"),
            stock: datosInp.get("stock"),
            description: datosInp.get("description"),
            flag: datosInp.get("flag"),
            sale: boolean
        }
        props.loadProduct(productObj, props.user.id)

    }

    return (
        <>

            {/* {props.form ? ( */}
                <div id={props.form?'form-signup-panelProducts':"form-signup-panelProducts2"}>
                    <main className="mainForm-panelProducts">
                        <h2 className='subtitle-signup-panelProducts'>Add new product </h2>
                        <div className="formContainer-panelProducts">
                            <form action="" className="form-panelProducts" onSubmit={enviarData} ref={formProd} id="form">

                                <fieldset className="fieldsetFrom-panelProducts">

                                    <label className="labelForm-seetings" htmlFor="nameItem">
                                        <div className='container-panelProduct'>
                                            <span className='span-signup-panelProducts'>Name item</span>
                                        </div>
                                        <input className="inputFrom-panelProducts" type="text" id="nameItem" name="nameItem" required />
                                    </label>

                                    <label className="labelForm-panelProducts" htmlFor="ItemPhotoUrl">
                                        <div className='container-panelProduct'>
                                            <span className='span-signup-panelProducts'>Item photoURL</span>
                                        </div>
                                        <input className="inputFrom-panelProducts" type="text" id="ItemPhotoUrl" name="ItemPhotoUrl" />
                                    </label>

                                    <label className="labelForm-panelProducts" htmlFor="category">
                                        <div className='container-panelProduct'>
                                            <span className='span-signup-panelProducts'>Category</span>
                                        </div>
                                        <input className="inputFrom-panelProducts" type="text" id="category" name="category" />
                                    </label>


                                    <label className="labelForm-panelProducts" htmlFor="stock">
                                        <div className='container-panelProduct'>
                                            <span className='span-signup-panelProducts'>Stock</span>
                                        </div>
                                        <input className="inputFrom-panelProducts" type="text" id="stock" name="stock" />
                                    </label>
                                    <label className="labelForm-panelProducts" htmlFor="price">
                                        <div className='container-panelProduct'>
                                            <span className='span-signup-panelProducts'>Price</span>
                                        </div>
                                        <input className="inputFrom-panelProducts" type="text" id="price" name="price" />
                                    </label>


                                    <label className="labelForm-panelProducts" htmlFor="description">
                                        <div className='container-panelProduct'>
                                            <span className='span-signup-panelProducts'>Description</span>
                                        </div>
                                        <input className="inputFrom-panelProducts" type="text" id="description" name="description" />
                                    </label>

                                    <label className="labelForm-panelProducts" htmlFor="sale">
                                        <div className='container-panelProduct'>
                                            <span className='span-signup-panelProducts'>Sale</span>
                                            <input className="" type="checkbox" id="sale" name="sale" />
                                        </div>
                                    </label>

                                    <label className="labelForm-panelProducts" htmlFor="flag">
                                        <div className='container-panelProduct'>
                                            <span className='span-signup-panelProducts'>Flag photoURL</span>
                                        </div>
                                        <input className="inputFrom-panelProducts" type="text" id="flag" name="flag" />
                                    </label>

                                    <button className="button-panelProducts" type="submit">
                                        <div className="svg-wrapper-1">
                                            <div className="svg-wrapper">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                                    <path fill="currentColor" d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"></path>
                                                </svg>
                                            </div>
                                        </div>
                                        <span>Send</span>
                                    </button>
                                </fieldset>
                            </form>
                        </div>

                    </main>
                </div>

            {/* ) : (
                <></>

            )} */}
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        allProducts: state.productReducer.allProducts,
        filtered: state.productReducer.filtered,
        user: state.userReducer.user,
    }
}
const mapDispatchToProps = {
    loadProduct: productActions.loadProduct
}

export default connect(mapStateToProps, mapDispatchToProps)(FormPanel)

