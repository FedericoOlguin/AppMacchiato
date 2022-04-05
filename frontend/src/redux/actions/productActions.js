import axios from 'axios';

const productActions = {
    getAllProducts: () =>{
        const res = await axios.get('http://localhost:4000/api/')
    }
}

export default productActions