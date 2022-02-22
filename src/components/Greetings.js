import React, { Component } from 'react'

export default class Greetings extends Component {
    componentDidUpdate(){
        console.log("Greetings updated!")
    }
    render() {
        return (
        <div>{this.props.text}</div>
        )
    }
}
