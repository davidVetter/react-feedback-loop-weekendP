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
  // Render form based on current route
  // "Next" buttons in the components move the user through the form
  return (
    <div className="App">
      {/* Renders the header atop of all pages in the app */}
      <Header />
      <form >
        {/* All parts of the app form pages are wrapped in a router */}
        <Router>
          <Switch>
            {/* Route for the starting, first question */}
            <Route path="/" exact>
              <Feeling />
            </Route>
            {/* Route for the 2nd question */}
            <Route path="/understanding">
              <Understanding />
            </Route>
            {/* Route for the 3rd question */}
            <Route path="/supported">
              <Supported />
            </Route>
            {/* Route for the last question */}
            <Route path="/comments">
              <Comments />
            </Route>
            {/* Route to review and submit page */}
            <Route path="/review">
              <Review />
            </Route>
            {/* Route for the feedback recieved success  */}
            <Route path="/success">
              <Success />
            </Route>
          </Switch>
        </Router>
      </form>
    </div>
  );
}

export default App;
