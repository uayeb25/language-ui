import axios from "axios";

const query: string = "http://localhost:3001"

export const getCategories: Promise<any> = new Promise<any>(resolve=>{   
    axios.get(`${query}/categories`)
    .then(result=>{        
        resolve(result.data);
    })
    .catch(error => resolve([]));
});