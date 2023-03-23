import axios from "axios"
import {BE_URL} from "../constants/config"

export const fetchAllDataUsers = async()=>{
    const {data} = await axios.get(`${BE_URL}users`)
    return data
}
export const fetchDataUsersByID = async(id)=>{
    const {data} = await axios.get(`${BE_URL}users/${id}`)
    return data
}
export const deleteUsersByID = async(id)=>{
    return await axios.delete(`${BE_URL}users/${id}`)
}
export const fetchCreateUsers = async(payload)=>{
    return await axios.post(`${BE_URL}users`,payload)
}
//Edit
export const fetchUpdateUsersById = async(id,payload)=>{
    return await axios.put(`${BE_URL}users/${id}`,payload)
}
//Login
export const fetchInfoMe = async(email)=>{
    return await axios.get(`${BE_URL}users?email=${email}`)
}
//Search
export const fetchSearch = async(payload)=>{
    return await axios.get(`${BE_URL}users?q=${payload}`)
}