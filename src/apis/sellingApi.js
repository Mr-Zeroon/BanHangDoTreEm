import axios from "axios"
import {BE_URL} from "../constants/config"

export const fetchAllDataSelling = async()=>{
    const {data} = await axios.get(`${BE_URL}selling`)
    return data
}
export const fetchDataSellingByID = async(id)=>{
    const {data} = await axios.get(`${BE_URL}selling/${id}`)
    return data
}
export const deleteSellingByID = async(id)=>{
    return await axios.delete(`${BE_URL}selling/${id}`)
}
export const fetchCreateSelling = async(payload)=>{
    return await axios.post(`${BE_URL}selling`,payload)
}
//Edit
export const fetchUpdateSellingById = async(id,payload)=>{
    return await axios.put(`${BE_URL}selling/${id}`,payload)
}