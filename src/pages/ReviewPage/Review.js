import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
  render() {
    return (
      <div>
        <p>Review your feedback</p>
        <p>
          Feelings: <span>0</span>
        </p>
        <p>
          Content: <span>0</span>
        </p>
        <p>
          Support: <span>0</span>
        </p>
        <p>
          Comments: <span>0</span>
        </p>
        <div>
          <button>Submit</button>
        </div>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Review);
