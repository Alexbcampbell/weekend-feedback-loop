import React, { Component } from 'react';
import { connect } from 'react-redux';

class Content extends Component {
  render() {
    return (
      <div>
        <p>How well are you understanding the content?</p>
        <input type="number" placeholder="Understanding?" />
        <div>
          <button>Next</button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Content);
