import axios from 'axios';

const productActions = {
    getAllProducts: () => {
        return async (dispatch, getState) => {
            const res = await axios.get('http://localhost:4000/api/allproducts')
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
            const res = await axios.get(`http://localhost:4000/api/allproducts/${id}`);
            dispatch({ type: 'get_one_product', payload: res.data.response.product })
            return res.data.response.product
        };
    },
    loadProduct: (objProd, id) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post(`http://localhost:4000/api/allproducts/${id}`, { objProd }, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            dispatch({
                type: 'message',
                payLoad: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            
        }
    },
    modifyProduct: (objProd, id) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.put(`http://localhost:4000/api/allproducts/${id}`, { objProd }, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            dispatch({
                type: 'message',
                payLoad: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            return res
        }
    },
    deleteProduct: (id) => {
        const token = localStorage.getItem('token')
        return async (dispatch, getState) => {
            const res = await axios.post(`http://localhost:4000/api/allproducts/one/${id}`, {}, {
                headers: {
                    Authorization: 'Bearer ' + token
                }
            })
            dispatch({
                type: 'message',
                payLoad: {
                    view: true,
                    message: res.data.message,
                    success: res.data.success
                }
            })
            
        }
    },
    addToCart: (id) => {
        return async (dispatch, getState) => {
            console.log(id);
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
            dispatch({ type: "emptyCart" })
        }
    },
    iniciarAlRecargar: () => {
        let datosCart = JSON.parse(localStorage.getItem("shopCart"))

        return async (dispatch, getState) => {
            dispatch({ type: "iniciarAlRecargar", payload: datosCart })
        }
    }
}

export default productActions;