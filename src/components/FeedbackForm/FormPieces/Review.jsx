import {useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import axios from 'axios';

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