import React from 'react';
const QuoteBox = ({title, text, element}) => {
    return(
        <div className="card-style">
            <div className="container">
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
            <div className="container-buttons">
                {element}
            </div>
        </div>
    );
}

export default QuoteBox;