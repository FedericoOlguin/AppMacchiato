import axios from 'axios';

const productActions = {
    getAllProducts: () =>{
        const res = await axios.get('http://localhost:4000/api/allproducts')
        dispatchEvent({type:'get_products', payload: res.data.response.products})
    },
    // comentado ya que no le veo sentido a tenerlo en redux 
    // filter: (allProducts, value) => {
    //     return(dispatch, getState) => {
    //         dispatch({type: 'filter', payload: {allProducts, value} })
    //     }
    
    // },
    getOneProduct: (id) => {
        return async (dispatch, getState) => {
            const res = await axios.get(`http://localhost:4000/api/allproducts/${id}`);
            dispatch({type:'get_one_product', payload:res.data.response.product})
        };
    },
}

export default productActions;