import React, { Component } from 'react';
import { connect } from 'react-redux';
import swal from 'sweetalert';

class Feeling extends Component {
  state = {
    feeling: '',
  };
  onFeelingClick = (feeling) => (event) => {
    if (this.state.feeling === '') {
      //installed sweetalert to display alert when fields are not completed
      swal('Please complete form!');
    } else {
      console.log(feeling);
      this.props.dispatch({
        type: 'ADD_FEELING',
        payload: this.state,
      });
      this.props.history.push('/content');
    }
  };

  onInputFeeling = (input) => (event) => {
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
        <p>How are you feeling today?</p>
        <input
          type="number"
          onChange={this.onInputFeeling('feeling')}
          placeholder="Feeling?"
        />
        <div>
          <button onClick={this.onFeelingClick('feeling')}>Next</button>
        </div>
      </div>
    );
  }
}
const mapStoreToProps = (store) => ({ store });

export default connect(mapStoreToProps)(Feeling);
