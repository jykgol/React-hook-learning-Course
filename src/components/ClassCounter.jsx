import React from "react";

class ClassCounter extends React.Component {
   
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
        }
    }

    change(num) {
        this.setState({count: this.state.count + num})
    }
    render() {


        return (
            <div className="App">
                <h2> likes Class = {this.state.count} </h2>
                <button onClick={() => this.change(1)}>increment</button>
                <button onClick={() => this.change(-1)}>decrement</button>
            </div>
        )
    }
}
export default ClassCounter;