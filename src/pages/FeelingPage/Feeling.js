import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  onFeelingClick = (feeling) => (event) => {
    console.log(feeling);
    this.props.dispatch({
      type: 'ADD_FEELING',
      payload: feeling,
    });
  };
  render() {
    return (
      <div>
        <p>How are you feeling today?</p>
        <input type="number" placeholder="Feeling?" />
        <div>
          <button onClick={this.onFeelingClick('')}>Next</button>
        </div>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Feeling);
