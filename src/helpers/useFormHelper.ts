import {useState} from "react";

function useFormHelper(states:any){
    const [values,setValues] = useState(states);

    function handleChange(event: any){
        setValues({
            ...values,
            [event.target.name]: event.target.value
        });
    }

    return {
        values,        
        handleChange
    }

}

export default useFormHelper;