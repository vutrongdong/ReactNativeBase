import axios from 'axios';
import env from '../../../env.json'

const apiRequest = (url, methodType, data = {}, multipart = false) => {
    let headers;
    headers = {};
    if (multipart) {
        var boundary = "xxxxxxxxxx";
        headers['content-type'] = 'multipart/form-data; boundary=' + boundary;
    }

    return new Promise(
        (resolve, reject) => {
            axios({
                method: methodType,
                url: env.API_URL + url,
                data: data,
                headers: headers
            })
            .then(response => {
                resolve(response.data);
            })
            .catch(function (error) {
                console.log(error)
                reject(error.response.data);
            });
        });
};


export {apiRequest}
