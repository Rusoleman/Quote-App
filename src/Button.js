import React from 'react';

const Button = ({handler, nameButton, secondButton, changeColor}) => {
    return(
        <div className="button-container">
            {secondButton}
            <button className="button-style" onClick={() => {
                handler()
                changeColor()
            }}>{nameButton}</button>
        </div>
    )
}

export default Button;