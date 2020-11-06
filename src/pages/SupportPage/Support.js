import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  render() {
    return (
      <div>
        <p>How well are you being supported?</p>
        <input type="text" placeholder="Support?" />
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Support);
