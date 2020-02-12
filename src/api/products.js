import {apiRequest} from "../commons/helpers/apiRequest";
import {apiMethods} from "../constants/apiMethods";
import productsMocks from "../mocks/products.json";

export const getListProducts = () =>{
    return new Promise(
        (resolve, reject) => {
            resolve(productsMocks);
            // apiRequest('/api/users/' + id, apiMethods.get)
            // .then(response => {
            //     resolve(response);
            // })
            // .catch(function (error) {
            //     reject(error);
            // });
        }
    );
};
