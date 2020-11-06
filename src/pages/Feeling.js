import React, { Component } from 'react';

class Feeling extends Component {
  render() {
    return ();
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Feeling);