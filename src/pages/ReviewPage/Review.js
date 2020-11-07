import axios from 'axios';
import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
  submitFeedback = (event) => {
    const dataForServer = {
      feeling: this.props.store.feelingReducer,
      understanding: this.props.store.contentReducer,
      support: this.props.store.supportReducer,
      comments: this.props.store.commentReducer,
    };
    console.log('data to be sent', dataForServer);
    axios
      .post('/review', dataForServer)
      .then(
        this.props.dispatch({ type: 'CLEAR_FEELING' }),
        this.props.dispatch({ type: 'CLEAR_CONTENT' }),
        this.props.dispatch({ type: 'CLEAR_SUPPORT' }),
        this.props.dispatch({ type: 'CLEAR_COMMENT' })
      )
      .catch((err) => {
        console.log(err);
        alert('Feedback did not get saved');
      });
    // this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <p>Review your feedback</p>
        <p>
          Feelings: <span>{this.props.store.feelingReducer.feeling}</span>
        </p>
        <p>
          Content: <span>{this.props.store.contentReducer.understanding}</span>
        </p>
        <p>
          Support: <span>{this.props.store.supportReducer.support}</span>
        </p>
        <p>
          Comments: <span>{this.props.store.commentReducer.comments}</span>
        </p>
        <div>
          <button onClick={this.submitFeedback}>Submit</button>
        </div>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Review);
