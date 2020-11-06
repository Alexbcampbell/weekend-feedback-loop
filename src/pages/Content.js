import React, { Component } from 'react';
import { connect } from 'react-redux';

class Content extends Component {
  render() {
    return ();
  }
}
export default Content;

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Content);