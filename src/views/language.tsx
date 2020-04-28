import React,{useState, useEffect} from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import Card from "../components/card";

import {getLanguages} from "../services/languages";

const Language: React.FC = () => {

    const [languages,setLanguages] = useState([]);

    useEffect(()=>{
        getLanguages.then(r=>{
            console.log(r);
            setLanguages(r);
        });        
    },[]);

    return(
        <div>
            <Header></Header>
            <div className="container">
                <Subheader title="Language Management" ></Subheader>
                <div className="row text-center">
                    <Card 
                        title="<New Language here>" 
                        description="Click the button to create a new language"
                        key="0" 
                        category=""
                    />
                    {languages.map((lan,index) => (
                        <Card 
                            title={lan["name"]} 
                            description={lan["description"]} 
                            key={lan["_id"]} 
                            category={lan["category"][0]["name"]}
                        />
                    ))}
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

}

export default Language;