import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Comments() {
    const [comments, setComments] = useState('');
    const dispatch = useDispatch();

    const handleNext = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments
        });
    }

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