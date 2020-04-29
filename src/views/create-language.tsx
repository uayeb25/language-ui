import React from "react";

import Header from "../components/header";
import Footer from "../components/footer";
import Subheader from "../components/subheader";
import LanguageForm from "../components/language-form";


const CreateLanguage: React.FC = () => {     

    return(
        <div>
            <Header></Header>
            <div className="container">
                <Subheader title="Language Management" ></Subheader>
                <div className="row">
                    <LanguageForm/>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );

}

export default CreateLanguage;