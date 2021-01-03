import React, { Component } from 'react'
import List from "../tourcomponet/list"
import "../main/tour.scss"
import data from "../data"

export default class Tour extends Component {
    constructor(props){
        super(props);{
            this.state={
                list:data
            }

        }
        this.del=this.del.bind(this)
    }
    del=(id)=>{
        const da=this.state.list
        const sorted=da.filter(items=>items.id!==id)
        console.log(sorted)
        this.setState({
            list:sorted
        })
        

    }
    
    render() {
     
        return (
            <div classNames="first">
              {this.state.list.map(item=>{
                  return <List key={item.id} names={item} delee={this.del}/>
              })}
              
            </div>
        )
    }
}
