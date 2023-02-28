// import axios from "axios"
// import {BE_URL} from "../constants/config"
// export const fetchAllDataProduct = async()=>{
//     const {data} = await axios.get(`${BE_URL}products`)
//     return data
// }
// export const fetchDataProductByID = async(id)=>{
//     const {data} = await axios.get(`${BE_URL}products/${id}`)
//     return data
// }
// export const deleteProductByID = async(id)=>{
//     return await axios.delete(`${BE_URL}products/${id}`)
// }
// export const fetchCreateProduct = async(product)=>{
//     return await axios.post(`${BE_URL}products`,product)
// }
// //Edit
// export const fetchUpdateProductById = async(id,payload)=>{
//     return await axios.put(`${BE_URL}products/${id}`,payload)
// }