import React, { Component } from 'react'
import classes from './Clock.module.css'

class Clock extends Component {
    constructor (props) {
        super(props);
        this.state = {
            date: new Date()
        }
    }

    componentDidMount () {
        this.timerID = setInterval (
            () => this.counter(),
            1000
        )
    }
    componentWillUnmount () {
        clearInterval (this.timerID)
    }
    counter () {
        this.setState ({
            date: new Date()
        })
    }

    render() {
        return (
            <div className={"clock"}>
                <strong>Time: {this.state.date.toLocaleTimeString()}</strong>
            </div>
        )
    }
}

export default Clock