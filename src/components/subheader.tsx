import React from "react";

interface ISubheaderProps{
    title: string
}

const Subheader: React.FC<ISubheaderProps> = ({title}) => (

<header className="my-5">
    <h2 className="display-3">{title}</h2>      
</header>

)

export default Subheader;