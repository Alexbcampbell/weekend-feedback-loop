import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { HashRouter as Router, Route } from 'react-router-dom';

import Feeling from '../../pages/FeelingPage/Feeling';
import Content from '../../pages/ContentPage/Content';
import Support from '../../pages/SupportPage/Support';
import Comment from '../../pages/CommentPage/Comment';
import Review from '../../pages/ReviewPage/Review';
import ThankYou from '../../pages/ThankYou/ThankYou';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4>
              <i>Don't forget it!</i>
            </h4>
          </header>
          <br />
          <Route exact path="/" component={Feeling} />
          <Route exact path="/content" component={Content} />
          <Route exact path="/support" component={Support} />
          <Route exact path="/comment" component={Comment} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/thanks" component={ThankYou} />
        </div>
      </Router>
    );
  }
}

export default App;
