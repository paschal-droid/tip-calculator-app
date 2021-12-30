import React from 'react'

function Button({id, handleClick, className, value, text}) {
    return (
        <button id={id} type="submit" onClick={handleClick} className={className} value={value}>{text}</button>
    )
}

export default Button;
