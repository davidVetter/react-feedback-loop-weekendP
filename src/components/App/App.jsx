import './App.css';
import {HashRouter as Router, Route, Switch} from "react-router-dom";
import Header from '../Header/Header';
import Comments from '../FeedbackForm/FormPieces/Comments';
import Feeling from '../FeedbackForm/FormPieces/Feeling';
import Review from '../FeedbackForm/FormPieces/Review';
import Supported from '../FeedbackForm/FormPieces/Supported';
import Understanding from '../FeedbackForm/FormPieces/Understanding';
import Success from '../Success/Success';



function App() {

  return (
    <div className="App">
      <form >
        <Router>
          <Switch>
            <Route path="/" exact>
              <Header />
              <Feeling />
            </Route>
            <Route path="/understanding">
              <Header />
              <Understanding />
            </Route>
            <Route path="/supported">
              <Header />
              <Supported />
            </Route>
            <Route path="/comments">
              <Header />
              <Comments />
            </Route>
            <Route path="/review">
              <Header />
              <Review />
            </Route>
            <Route path="/success">
              <Header />
              <Success />
            </Route>
          </Switch>
        </Router>
      </form>
    </div>
  );
}

export default App;
