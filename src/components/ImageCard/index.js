import React from "react";
import "./style.css";

class ImageCard extends React.Component {
    state = {
        clicked: false
    }


    render() {
        return (

            <div className="img-container">
                <img onClick={ () => this.props.incrementScore(this.props.characters.id)}
                    alt={this.props.characters.name}
                    src={this.props.characters.image}
                />
            </div>
        )
    }
}
export default ImageCard;