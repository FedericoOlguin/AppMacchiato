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
            let filteredWithInput;
            let filteredWithSelect;


            if (action.payload.valueInput!==""){
                if(action.payload.valueSelect!==""){
                    filteredWithInput = action.payload.allProducts.filter((product) => 
                        product.name
                        .toLowerCase()
                        .startsWith(action.payload.valueInput.trim().toLowerCase())
                        );
                    filteredWithSelect = filteredWithInput.filter((product) => 
                    product.category
                    .trim()
                    .toLowerCase()
                    ===action.payload.valueSelect.trim().toString()
                    );
                    return{
                        ...state,
                        filtered:filteredWithSelect
                    }
                }else{
                    filteredWithInput = action.payload.allProducts.filter((product) => 
                        product.name
                        .toLowerCase()
                        .startsWith(action.payload.valueInput.trim().toLowerCase())
                        );
                        return{
                            ...state,
                            filtered: filteredWithInput
                        }
                }
            }else if(action.payload.valueSelect!==""){
                filteredWithSelect = action.payload.allProducts.filter((product) => 
                product.category
                .trim()
                .toLowerCase()===action.payload.valueSelect.trim().toLowerCase()
                );
                return{
                    ...state,
                    filtered:filteredWithSelect
                }
            }else{
                return state;
            }

        default:
            return state;

    }

}
export default productReducer;