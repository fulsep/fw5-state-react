import React, { Component } from 'react'

export default class Form extends Component {
    state = {
        email : '',
        password: '',
        isLogged: false
    }

    componentDidUpdate(){
        console.log(this.state)
    }

    onLogin = (event)=>{
        event.preventDefault()
        if(this.state.email === "admin@mail.com" && this.state.password==="1234"){
        this.setState({isLogged: true})
        this.props.onLogin(true)
        }else{
        window.alert("Email atau password salah!")
        this.props.onLogin(false)
        }
    }

  render() {
    return (
        <form>
            <div>
            <div><label>Email</label></div>
            <div>
                <input onChange={(event)=>this.setState({email:event.target.value})} className='form-control' type="email" />
            </div>
            <div>
                <input onChange={(event)=>this.setState({email:event.target.value})} className='form-control' type="email" />
            </div>
            <div>
                <input onChange={(event)=>this.setState({email:event.target.value})} className='form-control' type="email" />
            </div>
            <div className='mt-2'><label>Password</label></div>
            <div>
                <input onChange={(event)=>this.setState({password:event.target.value})} className='form-control' type="password" />
            </div>
            </div>
            <div className='d-grid mt-5'>
            <button onClick={this.onLogin} className='btn btn-primary'>Login</button>
            </div>
        </form>
    )
  }
}
