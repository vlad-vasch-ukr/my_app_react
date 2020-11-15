import React, { Component } from 'react'
import ToDoItem from '../ToDoItem/ToDoItem'
import './ToDoList.css'

class ToDoList extends Component {
    constructor (props) {
        super(props)
        this.state = {
            listItems: ['Chese', 'Milk', 'Bread', 'Potato', 'Fruit'],
            inputValue: ''
        }
    }

    addItemHandler = () => {
        let listItems = [...this.state.listItems]
        let inputValue = this.state.inputValue   
        if(!(listItems.includes(inputValue, 0))) {
            if(inputValue !== '') {
                listItems.push(inputValue)
                this.setState({listItems})
            }
        }
    }
    changeInputHandler = (event) => {
        let value = event.target.value;
        this.setState({
            inputValue: value
        })
    }
    deleteItemHendler (index)  {
        let listItems = [...this.state.listItems]
        listItems.splice(index, 1)
        this.setState({listItems})
    }

    render () {


        return (
            <div>
                <ul className="list-group">
                   {
                       this.state.listItems.map((item, index) => {
                          return (
                           <ToDoItem listItem={item} key={index} onDelete={this.deleteItemHendler.bind(this, index)}/>
                          )
                       })
                   }
               </ul>
               <input type="text" onChange={this.changeInputHandler}/>
               <button className="btn btn-warning" style={{marginLeft: '10px'}} onClick={this.addItemHandler}>Add</button>
            </div>
        )
    }
}

export default ToDoList