import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Understanding() {
    const [understanding, setUnderstanding] = useState('');
    const [notNumber, setNotNumber] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = (e) => {
        e.preventDefault();
        if (Number(understanding) < 6 && Number(understanding) > 0) {
        dispatch({
            type: 'ADD_UNDERSTANDING',
            payload: understanding
        });
        setUnderstanding('');
        setNotNumber(false);
        history.push('/supported');
        } else {
            setNotNumber(true);
        }
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
            {notNumber && <p>Please use a number between 1-5</p>}
        </div>
    )
}

export default Understanding;