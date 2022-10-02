import {useSelector, useDispatch} from 'react-redux';
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
    const dispatch = useDispatch();
    // This function will do a POST with the feedback object from
    // this feedback store in redux to the database connected
    // After the POST the user moved to the 'success' page
    // Used the BACK_USED reducer to re-render header on page change
    // This is the only forward that didn't change the store so
    // **I opted not to add another reducer for this one specific purpose
    //  when the BACK_USED is only around to trigger re-renders anyway**
    const handleSubmit = (e) => {
      e.preventDefault();
      //console.log('This worked');
      axios.post('/feedback', feedback)
           .then((response) => {
            history.push('/success'); // move user
            dispatch({
                type: 'BACK_USED' // used here to trigger the header re-render
            });
           })
           .catch((err) => {
              alert('Error adding feedback');
           });
    }
    // This function will allow the user to go back to previous
    // question and change their answer, answer must still be provided
    // and meet the original validation - original value if present will be replaced
    const handleBack = (e) => {
        e.preventDefault();
        dispatch({
            type: 'BACK_USED'
        });
        history.push('/comments'); // move user
    }
    // Renders a heading with some paragraph elements to display the
    // current data in redux store
    // On submit button click, user is moved to success page
    // A 'back' button will move the user to the previous question (comments)
    return (
        <div className='reviewFeedbackDiv'>
                <h3>Review your feedback</h3>
                <p>Feelings: {feedback.feelings}</p>
                <p>Understanding: {feedback.understanding}</p>
                <p>Support: {feedback.supported}</p>
                <p>Comments: {feedback.comments}</p>
                <button onClick={handleBack}>⇦</button>&nbsp;
                <button type="button" onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Review;