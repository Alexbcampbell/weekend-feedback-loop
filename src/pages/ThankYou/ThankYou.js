import React, { Component } from 'react';
import { connect } from 'react-redux';

class ThankYou extends Component {
  newFeedback = (event) => {
    this.history.push('/');
  };

  render() {
    return (
      <div>
        <div>Thank You!</div>
        <div>
          <button onClick={this.newFeedback}>Leave New Feedback</button>
        </div>
      </div>
    );
  }
}
export default connect()(ThankYou);
