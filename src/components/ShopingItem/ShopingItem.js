import React from 'react'
import classes from './ShopingItem.module.scss'

const ToDoItem = (props) => {
    return (
        <li className={classes.ShopingItem}>
            <label>
              <input type="checkbox" />
              <span>{props.listItem}</span>
            </label>
            <button 
              className="btn red darken-4"
              onClick={props.onDelete}>
              Delete
            </button>
        </li>
    )
}
export default ToDoItem