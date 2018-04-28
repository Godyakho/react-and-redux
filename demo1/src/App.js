import React, { Component} from 'react'
import Counter  from "./App.child.js";

const style = {
    width: '50%',
    border: '1px solid #000',
    fontSize: '20px',
    padding: '40px',
    margin: '20px auto'
}

class ControlPanel extends Component {

  constructor(props) {
    super(props);
        
    this.initValues = [1,2,3]
    
    this.Update = this.Update.bind(this)

    const inintSum = this.initValues.reduce((a,b)=> a+b,0)

    this.state = {
      sum:  inintSum
    }
  }

    Update(n,o) {
      let valueChange = n - o
      this.setState({sum:this.state.sum + valueChange}) 
    }

    render() {
      return (
        <div style={style}>
            <h1>react demo</h1>
            <Counter onUpdata={this.Update} caption="first"  initValue={this.initValues[0]}></Counter>
            <Counter onUpdata={this.Update} caption="second" initValue={this.initValues[1]}></Counter>
            <Counter onUpdata={this.Update} caption="third"  initValue={this.initValues[2]}></Counter>
            <br />
            <div>Toatl Sum: {this.state.sum}</div>
        </div>
      )
    }

}

export default ControlPanel