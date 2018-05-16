import React from 'react';
import PropTypes from 'prop-types';
import * as Actions from '../Actions';
import {connect} from 'react-redux';


function Counter ({caption, onIncrement, onDecrement, value}) {
    return (
        <div>
            <button onClick={onIncrement}>+</button>
            <button onClick={onDecrement}>-</button>
            <span>{caption} count:{value}</span>
        </div>
    )
}

Counter.propTypes = {
    caption: PropTypes.string.isRequired,
    onIncrement:PropTypes.func.isRequired,
    onDecrement:PropTypes.func.isRequired,
    value:PropTypes.number.isRequired
}

function mapStateProps(state,ownProps) {
    return {
        value: state[ownProps.caption]
    }
}

function mapDispathToToProps(dispatch,ownProps) {
    return {
        onIncrement:()=> {
            dispatch(Actions.increment(ownProps.caption))
        },
        onDecrement: () => {
            dispatch(Actions.decrement(ownProps.caption))
        }
    }
}

export default connect(mapStateProps,mapDispathToToProps)(Counter);