import React, { Component } from 'react';
import { connect } from 'react-redux';

class Comment extends Component {
  state = {
    comments: '',
  };
  onCommentClick = (comments) => (event) => {
    console.log(comments);
    this.props.dispatch({
      type: 'ADD_COMMENT',
      payload: this.state,
    });
    this.props.history.push('/review');
  };

  onInputComment = (input) => (event) => {
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
        <p>Any comments you want to leave?</p>
        <input
          type="text"
          onChange={this.onInputComment('comments')}
          placeholder="Comments"
        />
        <div>
          <button onClick={this.onCommentClick('comments')}>Next</button>
        </div>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Comment);
