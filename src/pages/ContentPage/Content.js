import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

class Content extends Component {
  state = {
    understanding: '',
  };
  onContentClick = (understanding) => (event) => {
    if (this.state.understanding === '') {
      swal('Please complete form!');
    } else {
      console.log(understanding);
      this.props.dispatch({
        type: 'ADD_CONTENT',
        payload: this.state,
      });
      this.props.history.push('/support');
    }
  };

  onInputContent = (input) => (event) => {
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
        <p>How well are you understanding the content?</p>
        <input
          type="number"
          onChange={this.onInputContent('understanding')}
          placeholder="Understanding?"
        />
        <div>
          <button onClick={this.onContentClick('understanding')}>Next</button>
        </div>
      </div>
    );
  }
}

const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Content);
