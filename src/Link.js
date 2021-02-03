import React from 'react';
const ButtonLink = ({author, quotes ,content}) => {
    return(
        <div className="link-container"><a target="_blank" rel="noreferrer" className="link-style" href={`https://twitter.com/intent/tweet?text=${quotes}--${author}`}>{content}</a></div>        
    )
}

export default ButtonLink;

