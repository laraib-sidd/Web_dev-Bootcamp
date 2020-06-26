import React, {Component} from 'react';
// import logo from './logo.svg';
// import './App.css';
import './Hello.css'

class Hello extends Component {
  render(){
    return (
        <div>
            <h1 className="f1 tc">Hello Motherfuckers.</h1>
            <h4>You are not welcomed here.</h4>
            <h3>{this.props.greeting}</h3>
        </div>
    )
  }
}

export default Hello;
