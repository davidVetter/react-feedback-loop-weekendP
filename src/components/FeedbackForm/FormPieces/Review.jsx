import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
// This is the review page of the application
// This component will display the current feedback data that
// the user has supplied in nice format with a button
// to submit the data if review is good
// Upon submit btn click the feedback object in redux store(feedback)
// is sent in a POST to our database along the '/feedback' url
// The user is then moved to the success page after POST
function Review() {
    const feedback = useSelector(store => store.feedback);
    const history = useHistory();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('This worked');
      axios.post('/feedback', feedback)
           .then((response) => {
            history.push('/success');
           })
           .catch((err) => {
              alert('Error adding feedback');
           });
    }
    // Renders a heading with some paragraph elements to display the
    // current data in redux store
    // On submit button click, user is moved to success page
    return (
        <div className='reviewFeedbackDiv'>
                <h3>Review your feedback</h3>
                <p>Feelings: {feedback.feelings}</p>
                <p>Understanding: {feedback.understanding}</p>
                <p>Support: {feedback.supported}</p>
                <p>Comments: {feedback.comments}</p>
                <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Review;