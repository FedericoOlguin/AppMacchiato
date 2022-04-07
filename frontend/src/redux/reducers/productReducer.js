const initialState = {
    allProducts: [],
    oneProduct:[],
    filtered:[],
};

const productReducer = (state= initialState, action) => {
    switch (action.type) {
        case 'get_products':
            return{
                ...state,
                allProducts: action.payload,
                filtered: action.payload,
            };
        case 'get_one_product':
            return{
                ...state,
                oneProduct:action.payload
            };
        case 'filter':
            const filter = action.payload.apiData.filter((data) => 
            data.ciudad
            .toString()
            .trim()
            .toLowerCase()
            .startsWith(action.payload.value.trim().toLowerCase())
            );
            return{
                ...state,
                filtered:filter,
            };
        default:
            return state;

    }

}
export default productReducer;