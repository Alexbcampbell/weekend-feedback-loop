import React, { Component } from 'react';
import { connect } from 'react-redux';

class Support extends Component {
  state = {
    support: '',
  };
  onSupportClick = (support) => (event) => {
    console.log(support);
    this.props.dispatch({
      type: 'ADD_SUPPORT',
      payload: this.state,
    });
    this.props.history.push('/comment');
  };

  onInputSupport = (input) => (event) => {
    this.setState(
      {
        [input]: event.target.value,
      },
      () => {
        console.log(this.state);
      }
    );
  };
  render() {
    return (
      <div>
        <p>How well are you being supported?</p>
        <input
          type="number"
          onChange={this.onInputSupport('support')}
          placeholder="Support?"
        />
        <div>
          <button onClick={this.onSupportClick('support')}>Next</button>
        </div>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Support);
