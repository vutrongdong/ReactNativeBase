import * as types from '../constants/productActionsType';

const initialState = {
    products: []
};

const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_PRODUCT_SUCCESS:
            const { products } = action.payload;
            return {
                ...state,
                products
            };
        default:
            return state;
    }
};

export default productReducer;
