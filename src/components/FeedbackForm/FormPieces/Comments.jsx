import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
// This is 4th and final question of the form (Any comments for us?)
function Comments() {
    const [comments, setComments] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.feedback);
    // This conditional will check if understand store in redux already has
    // a value and will display that value in the input
    // This is used to populate the input if the user uses the back button
    // a question and returns to the previous question
    useEffect(() => {
        if (feedback.comments) {
            setComments(feedback.comments);
        }
    }, [])
    // This function will store the user inputted comments (if any)
    // This is the only optional input on the form
    // After comments are moved to redux store, the local state
    // is cleared and the user is moved to the 'Review' page (/review)
    const handleNext = (e) => {
        e.preventDefault();
        dispatch({ // dispatch to redux store
            type: 'ADD_COMMENTS',
            payload: comments
        });
        setComments(''); // clear local state
        history.push('/review'); // move user
    }
    // This function will allow the user to go back to previous
    // question and change their answer, answer must still be provided
    // and meet the original validation - original value if present will be replaced
    const handleBack = (e) => {
        e.preventDefault();
        history.push('/supported');
    }
    // Renders the question and input for user to enter answer
    // A next button will move the user to the next page of
    // application
     // A 'back' button will move the user to the previous question (supported)
    return (
        <div className='commentsInputDiv'>
        <h3>Any comments you want to leave?</h3>
        <label>Comments<br />
            <input
                onChange={(e) => setComments(e.target.value)}
                placeholder="Comments"
                value={comments}
                type="text" />
        </label>
        <button onClick={handleNext}>Next</button>
        <button onClick={handleBack}>Back</button>
        </div>
    )
}

export default Comments;