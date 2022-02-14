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

function sendLogoutRequest(token) {
    return axios.delete(`${BASE_URL}/sign-out`, generateConfig(token));
};

function getProductsRequest (token) {
    return axios.get(`${BASE_URL}/products`, generateConfig(token));
};

function getOrders (token, userId) {
    return axios.get(`${BASE_URL}/pedidos/${userId}`, generateConfig(token));
}


export {
    sendSignUpRequest,
    sendSignInRequest,
    getProductsRequest,
    sendLogoutRequest,
    getOrders
}
