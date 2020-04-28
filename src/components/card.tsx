import React from "react";

interface ICardProps{
    title: string,
    description: string,
    category: string
}

const Card:React.FC<ICardProps> = ({title,description,category}) => {

    return(
        <div className="col-lg-3 col-md-6 mb-4">
            <div className="card h-100">
                <div className="card-header">
                    {category}
                </div>      
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{description}</p>
                </div>
                <div className="card-footer">
                    <a href="#" className="btn btn-primary">Find Out More!</a>
                </div>
            </div>
        </div>
    )

}

export default Card;