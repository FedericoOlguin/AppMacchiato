import axios from 'axios';

const productActions = {
    getAllProducts: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('https://macchiatoapp.herokuapp.com//api/allproducts')
            dispatch({ type: 'get_products', payload: res.data.response.products })
        }
    },
    // comentado ya que no le veo sentido a tenerlo en redux 
    filter: (allProducts, valueInput, valueSelect) => {
        let devolver = []
        if (valueInput !== "") {
            if (valueSelect !== "") {
                devolver.push(...allProducts.filter((product) => product.name.toLowerCase().startsWith(valueInput.trim().toLowerCase())
                    && product.category.toLowerCase().includes(valueSelect.trim().toLowerCase())))
                return (dispatch, getState) => {
                    dispatch({ type: 'filter', payload: devolver })
                }
            } else {
                devolver.push(...allProducts.filter((product) => product.name.toLowerCase().startsWith(valueInput.trim().toLowerCase())))

                return (dispatch, getState) => {
                    dispatch({ type: 'filter', payload: devolver })
                }
            }
        } else if (valueSelect !== "") {
            devolver.push(...allProducts.filter(product => product.category.trim().toLowerCase().includes(valueSelect.trim().toLowerCase()))
            );
            return (dispatch, getState) => {
                dispatch({ type: 'filter', payload: devolver })
            }
        } else {
            devolver.push(...allProducts)
            return (dispatch, getState) => {
                dispatch({ type: 'filter', payload: devolver })
            }
        }


    },
    getOneProduct: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`https://macchiatoapp.herokuapp.com//api/allproducts/${id}`);
            dispatch({ type: 'get_one_product', payload: res.data.response.product })
            return res.data.response.product
        };
    },
    modifyStock: (id) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.put(`https://macchiatoapp.herokuapp.com//api/allproducts/${id}`, {}, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            dispatch({
                type: 'message',
                payload: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },
    loadProduct: (objProd, id) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post(`https://macchiatoapp.herokuapp.com//api/allproducts/${id}`, { objProd }, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            // console.log(res.data.success);
            // dispatch({
            //     type: 'message',
            //     payload: {
            //         view: false,
            //         message: res.data.message,
            //         success: true
            //     }
            // })
            return res
        }
    },
    addToCart: (id) => {
        return async (dispatch, getState) => {
            // console.log(id);
            dispatch({ type: "addToCart", payload: id })
        }
    },
    removeOneFromCart: (id) => {
        return (dispatch, getState) => {
            dispatch({ type: "removeOneFromCart", payload: id })
        }

    },
    removeAllFromCart: (id) => {
        return (dispatch, getState) => {
            dispatch({ type: "removeAllFromCart", payload: id })
        }
    },
    emptyCart: () => {
        return async (dispatch, getState) => {
            // console.log(id);
            dispatch({ type: "emptyCart" })
        }
    },
    iniciarAlRecargar: () => {
        let datosCart = JSON.parse(localStorage.getItem("shopCart"))
        // console.log(datosCart);

        return async (dispatch, getState) => {
            dispatch({ type: "iniciarAlRecargar", payload: datosCart })
        }
    }
}

export default productActions;