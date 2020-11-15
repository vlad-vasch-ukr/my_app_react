import React from 'react'

const ToDoItem = (props) => {
    return (
        <li 
            className="list-group-item" 
             style={{
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            marginBottom: '10px', 
            borderTopWidth: '1px'
            }}
            >
            <label style={{margin: 0}}>
            <input type="checkbox" />
            <span style={{marginLeft: '10px'}}>{props.listItem}</span>
            </label>
            <button className="btn btn-danger" onClick={props.onDelete}>Delete</button>
        </li>
    )
}
export default ToDoItem