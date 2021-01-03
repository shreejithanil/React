import React, { Component } from 'react'

export default class Nav extends Component {
    render() {
        return (
            <nav className="navbar">
            <img src="https://th.bing.com/th/id/OIP.-aIt5wwfj0_LXbcjlxdYMAAAAA?w=210&h=180&c=7&o=5&dpr=1.25&pid=1.7" alt="logo" className="image"></img>
            <ul>
                <li><a href="#"> Home</a></li>
                <li><a href="#">Contact</a></li>
                <li><a href="#">Info</a></li>
            </ul>

            </nav>
        )
    }
}
