import apiClient from "./apiClient";
export const getProducts=()=>
    apiClient.get("/products");
export const getProductById=(id)=>
    apiClient.get(`/products/${id}`)