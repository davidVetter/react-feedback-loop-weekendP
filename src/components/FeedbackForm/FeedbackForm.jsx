import {useState} from 'react';
import axios from 'axios';
import Comments from './FormPieces/Comments';
import Feeling from './FormPieces/Feeling';
import Review from './FormPieces/Review';
import Supported from './FormPieces/Supported';
import Understanding from './FormPieces/Understanding';
import { useDispatch, useSelector } from 'react-redux';

function FeedbackForm() {
    const feedback = useSelector(store => store.feedback);
    const dispatch = useDispatch();
    // const [feeling, setFeeling] = useState('');
    // const [understanding, setUnderstanding] = useState('');
    // const [support, setSupport] = useState('');
    // const [comments, setComments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('This worked');
        axios.post('/feedback', feedback)
             .then((response) => {
                dispatch({
                    type: 'CLEAR_FEEDBACK'
                });
             })
             .catch((err) => {
                alert('Error adding feedback');
             });
    }

    return (
        <form onSubmit={handleSubmit}>
            <Feeling />
            <Understanding />
            <Supported />
            <Comments />
            <Review />
        </form>
    )
}

export default FeedbackForm;