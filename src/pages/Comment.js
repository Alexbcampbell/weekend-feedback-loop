import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {
  render() {
    return ();
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Comment);