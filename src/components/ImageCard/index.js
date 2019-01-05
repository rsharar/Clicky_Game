import React from "react";
import "./style.css";

class ImageCard extends React.Component{

    click = () => {
        console.log('click');
    };
    render(){
    return (
            <div className="img-container">
                <img onClick={this.click}
                    alt={this.props.characters.name}
                    src={this.props.characters.image}
                />
            </div>
    )
}
}
export default ImageCard;