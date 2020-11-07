import React, { Component } from 'react';
import { connect } from 'react-redux';

class Review extends Component {
  render() {
    console.log(this.props);
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
          <button>Submit</button>
        </div>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Review);
