import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Feeling() {
    const [feeling, setFeeling] = useState('');
    const [notNumber, setNotNumber] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = (e) => {
        e.preventDefault();
        if (Number(feeling) < 6 && Number(feeling) > 0) {
        dispatch({
            type: 'ADD_FEELING',
            payload: feeling
        });
        setFeeling('');
        setNotNumber(false);
        history.push('/understanding');
        } else {
            setNotNumber(true);
        }
    }

    return (
        <div className='feelingInputDiv'>
            <h3>How are you feeling today?</h3>
            <label>How are you feeling today?<br />
                <input
                    onChange={(e) => setFeeling(e.target.value)}
                    placeholder="Feeling?"
                    value={feeling}
                    type="text" />
            </label>
            <button onClick={handleNext}>Next</button>
            {notNumber && <p>Please use a number between 1-5</p>}
        </div>
    )
}

export default Feeling;