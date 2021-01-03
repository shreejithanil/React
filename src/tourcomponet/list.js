import React, { Component } from 'react'
import "../tourcomponet/list.scss"
import data from "../data"


export default class List extends Component {
    constructor(props){
        super(props);{
            this.state={
                showinfo:false
            }
        }
        this.handle=this.handle.bind(this)
    }
    handle=()=>{
        this.setState({showinfo:!this.state.showinfo})
    }
    
 
   
    render() {
        const{id,name,img,fullname,info}=this.props.names
        const del=this.props.delee

        return (
            <div className="container ">
            <div className="image1">
            <img src={img}></img>
            <span className="btn" onClick={()=>del(id) }>
                <i className="fas fa-window-close"></i>
            </span>
            </div>
            <div className="secondc">
            <h2 className="name">{name}</h2>
            <h2 className="full">{fullname}</h2>
            <h4>info<span onClick={this.handle}><i className="fas fa-caret-square-down"></i></span></h4>
            {this.state.showinfo ?<h6 >{info}</h6>:null }
            
           

            </div>
            
            
            </div>
        ) 
    }
}
