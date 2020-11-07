import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {
  render() {
    return (
      <div>
        <p>Any comments you want to leave?</p>
        <input type="text" placeholder="Comments" />
        <div>
          <button>Next</button>
        </div>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Comment);
