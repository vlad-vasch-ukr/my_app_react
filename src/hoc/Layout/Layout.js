import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import classes from './Layout.module.scss'

class Layout extends React.Component {

    render () {
        return (
            <div className={classes.Layout}>
                <Navbar />
                <main>
                    <div>
                       {this.props.children}
                    </div>
                </main>
            </div>
        )
    }
}

export default Layout