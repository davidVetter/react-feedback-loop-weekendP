import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
// This is the 2nd question of the form ('How is you Understanding?')
function Understanding() {
    const [understanding, setUnderstanding] = useState('');
    const [notNumber, setNotNumber] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    // This function will check if the user entered values
    // are numbers between 1-5, if so then the value is 
    // added to redux feedback store, local state cleared
    // and the user is moved to the next question page(/comments)
    // If the value is not a number a message is rendered and the
    // user must retry entering a number
    const handleNext = (e) => {
        e.preventDefault();
        // verifies if understanding is a number AND between 1-5
        if (Number(understanding) < 6 && Number(understanding) > 0) {
        dispatch({
            type: 'ADD_UNDERSTANDING', // sends user data to redux feedback store
            payload: understanding // current value from local state is sent
        });
        setUnderstanding(''); // clear local state
        setNotNumber(false); // reset local state if user had entered an invalid value first
        history.push('/supported'); // move user to 'understanding' question page
        } else {
            setNotNumber(true); // updates local state that invalid info was entered
        }
    }
    // Renders the question and input for user to enter answer
    // A next button will validate the users data and move them
    // if the data is good, a message will render if a user
    // trys to move on with bad data in input
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
            {/* Below only renders if the user tried to use an invalid value */}
            {notNumber && <p>Please use a number between 1-5</p>}
        </div>
    )
}

export default Understanding;