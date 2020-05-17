import React,{useState, useEffect} from "react";
import {useParams} from "react-router-dom";

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import Card from "../components/card";

import {ILanguage} from "../interfaces/language";

import {getLanguageByCategory} from "../services/languages";
import {getCategory} from "../services/categories";

const LanguageCategory: React.FC = () => { 

    const {id} = useParams();

    const [languages,setLanguages] = useState([]);
    const [update,setUpdate] = useState(true);
    const [name,setName] = useState("");

    useEffect(()=>{
        if(id && update){
            
            getLanguageByCategory(id).then( r=>{                
                setUpdate(false);
                setLanguages(r.data);
            });

            getCategory(id).then(r=>{                
                setName(r[0].name);
            });
        }      
    },[update,id]);

    useEffect(() => {
        return () => {
          console.log("cleaned up");
        };
      }, []);

    return(
        <div>
            <Header></Header>
            <div className="container">
                <Subheader title={name} ></Subheader>
                <div className="row text-center">                    
                    {languages.map((lan: ILanguage,index) => (
                        <Card 
                            title={lan.name} 
                            description={lan.description} 
                            key={lan._id} 
                            category={name}
                            LanguageId={lan._id}
                        />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

}

export default LanguageCategory;