import React, { Component } from 'react'
import PropTypes from 'prop-types'

const btn = {
    marginRight:'10px'
}
class Counter extends Component {
    
  constructor(props) {
    super(props);

    this.add = this.add.bind(this)
    this.cut = this.cut.bind(this)

    this.state = {
        count: this.props.initValue
    }
   }

   add() {
      this.updataSum(true)
   }

   cut() {
      this.updataSum(false)
   }

   updataSum(data) {
      let change = this.state.count
      let newValue = data? change + 1:change - 1
      this.setState({count: newValue})
      this.props.onUpdata(newValue,change)
   }


  render() {
    return (
        <div >
        <button style={btn} onClick={this.add}>+</button>
        <button style={btn} onClick={this.cut}>-</button>
        <span>{ this.props.caption} count: { this.state.count}</span>
        </div>
    )
  }
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    initValue: PropTypes.number.isRequired,
    onUpdata: PropTypes.func
}

Counter.defaultProps = {
    initValue: 0,
    onUpdate: f => f //什么都不做的函数
  };

export default Counter; 