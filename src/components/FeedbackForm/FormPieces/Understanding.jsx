import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Understanding() {
    const [understanding, setUnderstanding] = useState('');
    const dispatch = useDispatch();

    const handleNext = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        });
    }


    return (
        <div className='understandingInputDiv'>
            <h3>How well are you understanding the content?</h3>
            <label>Understanding?<br />
                <input
                    onChange={(e) => setUnderstanding(e.target.value)}
                    placeholder="Understanding?"
                    value={understanding}
                    type="text" />
            </label>
            <button onClick={handleNext}>Next</button>
            </div>
    )
}

export default Understanding;