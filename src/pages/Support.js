import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  render() {
    return ();
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Support);