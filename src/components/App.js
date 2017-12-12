import React from 'react';
import {connect} from 'react-redux';
import {increment} from '../actions/increment';
import {decrement} from '../actions/decrement';
import { bindActionCreators } from 'redux';

class App extends React.Component {
  render() {
    return(
      <div>Increment {this.props.value} Decrement<br />
        <button onClick={() => this.props.increment()}>Increment</button>
        <button onClick={() => this.props.decrement()}>Decrement</button>
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
