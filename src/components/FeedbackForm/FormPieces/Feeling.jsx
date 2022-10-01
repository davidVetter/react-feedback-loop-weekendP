import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Feeling() {
    const [feeling, setFeeling] = useState('');
    const dispatch = useDispatch();

    const handleNext = () => {
        dispatch({
            type: 'ADD_FEELING',
            payload: feeling
        });
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
        </div>
    )
}

export default Feeling;