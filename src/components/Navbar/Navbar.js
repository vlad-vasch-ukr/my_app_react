import React from 'react'
import classes from './Navbar.module.scss'

const Navbar = (props) => {
    return (
        <nav className={classes.Navbar}>
            <div>
              <a href="#">Lists</a>
              {props.children}
              <ul>
                <li><a href="#">My lists</a></li>
                <li><a href="#">Settings</a></li>
                <li><a href="#">Login</a></li>
              </ul>
            </div>
       </nav>
    )
}

export default Navbar