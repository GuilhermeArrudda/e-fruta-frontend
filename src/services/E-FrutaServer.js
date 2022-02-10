import axios from "axios";

const BASE_URL = "http://localhost:5000";

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
    return axios.post(`${BASE_URL}/sign-in`, body);
};

function getProductsRequest (token) {
    return axios.post(`${BASE_URL}/homepage`, generateConfig(token));
};


export {
    sendSignUpRequest,
    sendSignInRequest,
    getProductsRequest
}
