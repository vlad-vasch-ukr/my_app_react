import React, { Component } from 'react'
import classes from './ShopingList.module.css'
import ShopingItem from '../../components/ShopingItem/ShopingItem'
import InputItem from '../../components/InputItem/InputItem'


class ShopingList extends Component {
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
            <div className={classes.ShopingList}>
                <ul>
                   {
                       this.state.listItems.map((item, index) => {
                          return (
                           <ShopingItem listItem={item} key={index} onDelete={this.deleteItemHendler.bind(this, index)}/>
                          )
                       })
                   }
               </ul>
               <InputItem
                 onChange={this.changeInputHandler}
                 onClick={this.addItemHandler}
               />
            </div>
        )
    }
}

export default ShopingList