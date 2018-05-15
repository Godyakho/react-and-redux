import React ,{ Component } from 'react'
import Summary from './Summary.js'
import Counter from './Counter.js'

class ControlPanel extends Component {
    render() {
        return (
          <div>
            <Counter caption='First' />
            <Counter caption='Second' />
            <Counter caption='Third' />
            <Summary />
          </div>
        )
    }
}

export default ControlPanel;