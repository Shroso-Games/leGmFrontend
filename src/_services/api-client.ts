import axios from "axios";


export const apiClient = axios.create({
    baseURL: "https://api-nba-v1.p.rapidapi.com",
    headers: {
      'X-RapidAPI-Key': '49d56d91d9msh30c88cca5bff686p16e614jsn5e9b7e5a986e',
      'X-RapidAPI-Host': 'api-nba-v1.p.rapidapi.com'  
    }
});


export const pythonClient = axios.create({
  baseURL: "https://127.0.0.1:5000/"
})