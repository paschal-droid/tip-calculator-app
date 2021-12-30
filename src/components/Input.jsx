import React from 'react'



function Input({name, value, handleChange, style, handleClick, holder}) {
    // let alarm = {
    //     border : "10px solid red",
    //     backgroundColor: "hsl(183, 100%, 15%)"
    // }

    return (
        <div>
            {/* <img src="\images\icon-dollar.svg" alt="wrong"/> */}
            <input  className="counter" onClick={handleClick} style={style} type="text" placeholder={holder} name={name} value={value} onChange={handleChange} />
        </div>
    )
}

export default Input
