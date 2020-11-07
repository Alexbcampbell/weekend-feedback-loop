import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  render() {
    return (
      <div>
        <p>How well are you being supported?</p>
        <input type="number" placeholder="Support?" />
        <div>
          <button>Next</button>
        </div>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Support);
