import {useState} from 'react';

function FeedbackForm() {
    const [feeling, setFeeling] = useState('');
    const [understanding, setUnderstanding] = useState('');
    const [support, setSupport] = useState('');
    const [comments, setComments] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <form onSubmit={(e) => handleSubmit(e)}>
            <div className='feelingInputDiv'>
            <h3>How are you feeling today?</h3>
            <label>How are you feeling today?
                <input
                    onChange={(e) => setFeeling(e.target.value)}
                    placeholder="Feeling?"
                    value={feeling}
                    type="text" />
            </label>
            <button>Next</button>
            </div>
            <div className='understandingInputDiv'>
            <h3>How well are you understanding the content?</h3>
            <label>Understanding?
                <input
                    onChange={(e) => setUnderstanding(e.target.value)}
                    placeholder="Understanding?"
                    value={understanding}
                    type="text" />
            </label>
            <button>Next</button>
            </div>
            <div className='supportedInputDiv'>
            <h3>How are you feeling supported today?</h3>
            <label>How are you feeling today?
                <input
                    onChange={(e) => setSupport(e.target.value)}
                    placeholder="Supported?"
                    value={support}
                    type="text" />
            </label>
            <button>Next</button>
            </div>
            <div className='commentsInputDiv'>
            <h3>Any comments you want to leave?</h3>
            <label>Comments
                <input
                    onChange={(e) => setComments(e.target.value)}
                    placeholder="Comments"
                    value={comments}
                    type="text" />
            </label>
            <button>Next</button>
            </div>
            <div className='reviewFeedbackDiv'>
                <h3>Review your feedback</h3>
                <p>Feelings: {feeling}</p>
                <p>Understanding: {understanding}</p>
                <p>Support: {support}</p>
                <p>Comments: {comments}</p>
                <button type="submit">Submit</button>
            </div>
        </form>
    )
}

export default FeedbackForm;