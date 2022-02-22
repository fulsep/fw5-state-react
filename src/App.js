import React, { Component } from 'react'
import Form from './components/Form'
import Homepage from './components/Homepage'

export default class App extends Component {
  state = {
    isLogged: false,
    greetings: ''
  }
  toggle = ()=> {
    this.setState({isLogged: !this.state.isLogged})
  }
  // => this.setState(), this.forceUpdate, update Props
  render() {
    return (
      <div className='d-flex vh-100 justify-content-center align-items-center'>
        {/* <input type="text" className="form-control" onChange={(e)=>this.setState({greetings: e.target.value})} /> */}
        {!this.state.isLogged && <Form onLogin={(value)=>{this.setState({isLogged: value})}} />}
        {this.state.isLogged && <Homepage />}
      </div>
    )
  }
}
