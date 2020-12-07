import React from 'react'
import classes from './Input.module.css' 

const InputItem = (props) => {
    return (
        <div>
            <input type="text" onChange={props.onChange}/>
            <button className="btn btn-warning" style={{marginLeft: '10px'}} onClick={props.onClick}>Add</button>
        </div>
    )
}

export default InputItem
