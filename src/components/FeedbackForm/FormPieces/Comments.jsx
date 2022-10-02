import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
// This is 4th and final question of the form (Any comments for us?)
function Comments() {
    const [comments, setComments] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();
    // This function will store the user inputted comments (if any)
    // This is the only optional input on the form
    // After comments are moved to redux store, the local state
    // is cleared and the user is moved to the 'Review' page (/review)
    const handleNext = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        });
        setComments('');
        history.push('/review');
    }
    // Renders the question and input for user to enter answer
    // A next button will move the user to the next page of
    // application
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
        </div>
    )
}

export default Comments;