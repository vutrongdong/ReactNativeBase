import * as types from './../constants/productActionsType'
import * as productApis from "../api/products";

export const fetchProducts = () => {
    return dispatch => {
        productApis.getListProducts()
        .then(res => {
            dispatch(fetchProductSuccess(res.data))
        })
        .catch(err => {
            console.log(err)
        });
    }
};

export const fetchProductSuccess = products => ({
    type: types.FETCH_PRODUCT_SUCCESS,
    payload: {
        products
    }
});