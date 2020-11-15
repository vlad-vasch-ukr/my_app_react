import React, { Component } from 'react'

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
            <div className="text-right">
                <strong>Time: {this.state.date.toLocaleTimeString()}</strong>
            </div>
        )
    }
}

export default Clock