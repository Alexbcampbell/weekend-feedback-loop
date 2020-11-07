import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feeling extends Component {
  render() {
    return (
      <div>
        <p>How are you feeling today?</p>
        <input type="number" placeholder="Feeling?" />
        <div>
          <button>Next</button>
        </div>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Feeling);
