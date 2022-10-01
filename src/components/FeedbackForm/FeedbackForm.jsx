import {useState} from 'react';
import Comments from './FormPieces/Comments';
import Feeling from './FormPieces/Feeling';
import Review from './FormPieces/Review';
import Supported from './FormPieces/Supported';
import Understanding from './FormPieces/Understanding';

function FeedbackForm() {
    const [feeling, setFeeling] = useState('');
    const [understanding, setUnderstanding] = useState('');
    const [support, setSupport] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('This worked');
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