import React, { Component } from 'react'
import data from "./data"
import Nav from "./nav/nav"
import Tour from "./main/tour"
import "./nav/nav.scss"
const {name,img,fullname,info}=data[1]


export default class App extends Component {
    render() {
        return (
           <React.Fragment >
               <Nav />
               <Tour /> 
           </React.Fragment>
        )
    }
}
