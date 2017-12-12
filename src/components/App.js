import React from 'react';
import {connect} from 'react-redux';
import {increment} from '../actions/increment';
import {decrement} from '../actions/decrement';
import { bindActionCreators } from 'redux';

const divStyle = {
  textAlign: 'center',
  marginTop: '20%',
}

const buttonIncrement = {
  backgroundColor: 'Green',
  padding: '15px 32px',
  fontSize: '22px',
}

const buttonDecrement = {
  backgroundColor: 'Red',
  padding: '15px 32px',
  fontSize: '22px',
}

class App extends React.Component {
  render() {
    return(
      <div style={divStyle}>
        <h1>{this.props.value}</h1>
        <button style={buttonIncrement} onClick={() => this.props.increment()}>Increment</button>
        <button style={buttonDecrement} onClick={() => this.props.decrement()}>Decrement</button>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state.value
  }
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({increment, decrement}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps) (App);
