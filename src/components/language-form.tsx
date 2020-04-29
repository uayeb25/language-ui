import React,{useState,useEffect} from "react";

import Modal from "./modal";
import {getCategories} from "../services/categories";
import {postLanguage} from "../services/languages";
import {ICategory} from "../interfaces/category";

import useFormHelper from "../helpers/useFormHelper";

const LanguageForm:React.FC = () => {

    const [categories,setCategories] = useState([]);
    const [showmodal,setShowmodal] = useState(false);
    const [submitting,setSubmitting] = useState(false);
    const [message,setMessage] = useState("Do you want to save?");
    const [completed,setCompleted] = useState(false);
    

    function hideModal(){
      setShowmodal(false);
    }

    function showModal(){
      setShowmodal(true);
    }

    const states = {
      name: "",
      description: "",
      category: ""
    }

    const {
      values,      
      handleChange      
    } = useFormHelper(states);

    function saveLanguage(){
      if(!completed){
        setSubmitting(true);
        setMessage("Sending...");
        postLanguage(values).then(value=>{
          setCompleted(true);
          setSubmitting(false);
          if(value.data.successed){
            setMessage("Language saved with success");          
          }else{
            setMessage("Language name already exist");
          }
        })
      }else{
        setCompleted(false);
        setMessage("Do you want to save?");
        hideModal();
      }
      
    }

    useEffect(()=>{
      getCategories.then(c => {
        setCategories(c);
      });
    },[]);

    return(
    <div>

        <Modal
          title="Confirmation"
          description={message}
          lbl_main_btn="Ok"
          lbl_snd_btn="No"
          show={showmodal}
          closeModal={hideModal}
          accept={saveLanguage}
          submitting={submitting}
        />

        <form className="align-items-center" >
        <div className="form-group">
          <label htmlFor="formGroupExampleInput">Language Name</label>
          <input 
            type="text" 
            className="form-control" 
            id="formGroupExampleInput"
            onChange={handleChange}
            name="name"
            value={values.name}
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlSelect1">Category</label>
          <select 
            className="form-control" 
            id="exampleFormControlSelect1"
            onChange={handleChange}
            name="category"
            value={values.category}
          >
            <option value="">choose an option</option>
            {categories.map( (category:ICategory) => (
              <option value={category._id} key={category._id} >{category.name}</option>
            ) )}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">Description</label>
          <textarea 
            className="form-control" 
            id="exampleFormControlTextarea1" 
            rows={6}
            onChange={handleChange}
            name="description"
            value={values.description}
          />
        </div>
       
    </form> 
    <button className="btn btn-primary" onClick={showModal} >Submit</button>
    </div>
    

    );
}

export default LanguageForm;

