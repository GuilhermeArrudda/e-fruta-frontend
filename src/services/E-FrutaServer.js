import axios from "axios";

const BASE_URL = "https://e-fruta.herokuapp.com";

function generateConfig (token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    };
};

function sendSignUpRequest (body){
    return axios.post(`${BASE_URL}/sign-up`, body);
};

function sendSignInRequest (body){
    return axios.post(`${BASE_URL}/login`, body);
};

function getProductsRequest (token) {
    return axios.post(`https://e-fruta.herokuapp.com/products`, generateConfig(token));
};


export {
    sendSignUpRequest,
    sendSignInRequest,
    getProductsRequest
}
