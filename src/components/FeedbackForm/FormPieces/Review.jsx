import {useState} from 'react';
import {useSelector} from 'react-redux';

function Review() {
    const feedback = useSelector(store => store.feedback);

    return (
        <div className='reviewFeedbackDiv'>
                <h3>Review your feedback</h3>
                <p>Feelings: {feedback.feelings}</p>
                <p>Understanding: {feedback.understanding}</p>
                <p>Support: {feedback.supported}</p>
                <p>Comments: {feedback.comments}</p>
                <button type="submit">Submit</button>
        </div>
    )
}

export default Review;