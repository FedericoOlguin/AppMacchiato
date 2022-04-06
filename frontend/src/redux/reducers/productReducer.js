const initialState = {
    allProducts: [],
    oneProduct:[],
};

const productReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'get_products':
            return{
                ...state,
                allProducts: action.payload,
            };
        case 'get_one_product':
            return{
                ...state,
                oneProduct:action.payload
            };
        default:
            return state;

    }

}
export default productReducer;