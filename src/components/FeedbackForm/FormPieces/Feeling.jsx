import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';
// This is the 'How are you feeling' question component of
// the feedback form (1st question/starting page of form)
function Feeling() {
    const [feeling, setFeeling] = useState('');
    const [notNumber, setNotNumber] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    // This function will check if the user entered values
    // are numbers between 1-5, if so then the value is 
    // added to redux feedback store, local state cleared
    // and the user is moved to the next question page(/understanding)
    // If the value is not a number a message is rendered and the
    // user must retry entering a number
    const handleNext = (e) => {
        e.preventDefault();
        if (Number(feeling) < 6 && Number(feeling) > 0) { // verifies if feeling is a number AND between 1-5
        dispatch({
            type: 'ADD_FEELING', // sends user data to redux feedback store
            payload: feeling // current value from local state is sent
        });
        setFeeling(''); // clear local state
        setNotNumber(false); // reset local state if user had entered an invalid value first
        history.push('/understanding'); // move user to 'understanding' question page
        } else {
            setNotNumber(true); // updates local state that invalid info was entered
        }
    }
    // Renders the question and input for user to enter answer
    // A next button will validate the users data and move them
    // if the data is good, a message will render if a user
    // trys to move on with bad data in input
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
            {/* Below only renders if the user tried to use an invalid value */}
            {notNumber && <p>Please use a number between 1-5</p>} 
        </div>
    )
}

export default Feeling;