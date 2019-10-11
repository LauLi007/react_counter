import React, { Component } from 'react';
import './Counter.css';

class Counter extends Component {
    state = {
        count: 0
    }

addHandler = () => {
    console.log("It is working");
    this.setState({count: this.state.count+1});
}

removeHandler = () => {
    console.log("This is working too");
    if(this.state.count > 0){
        this.setState({count: this.state.count-1});
}
}

resetHandler = () => {
    console.log("Reset");
    this.setState({count: 0});
}

    render(){
        return(
            <div className="container">
                <p className="title">Lobster Counter</p>
                <div className={this.state.count % 2 === 0 ? "circle even" : "circle odd"}>
                    <p className="number">{this.state.count}</p> 
                </div>
                <div className="buttons">
                    <button className="addButton" onClick={this.addHandler}>Add one</button>
                    <button className="removeButton" onClick={this.removeHandler}>Remove one</button>
                    <button className="resetButton" onClick={this.resetHandler}>Reset</button>
                </div>
            </div>
        )
    }
}


export default Counter;