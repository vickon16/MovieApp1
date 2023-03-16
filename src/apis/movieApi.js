import axios from "axios";

export const APIKey = process.env.REACT_APP_API_KEY;

export const API =  axios.create({
    baseURL : "https://www.omdbapi.com"
})


