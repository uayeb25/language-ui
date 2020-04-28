import axios from "axios";

const query: string = "http://localhost:3001"

export const getLanguages: Promise<any> = new Promise<any>(resolve=>{
    axios.get(`${query}/languages`)
    .then(result=>{        
        resolve(result.data);
    })
    .catch(error => resolve({}));
});