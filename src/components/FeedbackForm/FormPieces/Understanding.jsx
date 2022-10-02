import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
// This is the 2nd question of the form ('How is you Understanding?')
function Understanding() {
    const [understanding, setUnderstanding] = useState('');
    const [notNumber, setNotNumber] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.feedback);
    // This conditional will check if understand store in redux already has
    // a value and will display that value in the input
    // This is used to populate the input if the user uses the back button
    // a question and returns to the previous question
    useEffect(() => {
        if (feedback.understanding && !(feedback.understanding === understanding)) {
            setUnderstanding(feedback.understanding);
        }
    }, [])
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
    // This function will allow the user to go back to previous
    // question and change their answer, answer must still be provided
    // and meet the original validation - original value if present will be replaced
    // A dispatch is made to the backBtn store that will toggle
    // the boolean in the store so a re-render occurs
    const handleBack = (e) => {
        e.preventDefault();
        dispatch({
            type: 'BACK_USED'
        });
        history.push('/'); // move user
    }
    // Renders the question and input for user to enter answer
    // A next button will validate the users data and move them
    // if the data is good, a message will render if a user
    // trys to move on with bad data in input
    // A 'back' button will move the user to the previous question (feeling)
    return (
        <div className='understandingInputDiv'>
            <h3>How well are you understanding the content?</h3>
            <label>Understanding?<br />
                <input
                    onChange={(e) => setUnderstanding(e.target.value)}
                    value={understanding}
                    type="number"
                    min={1}
                    max={5} />
            </label><br />
            <button onClick={handleBack}>⇦</button>
            <button onClick={handleNext}>⇨</button>
            {/* Below only renders if the user tried to use an invalid value */}
            {notNumber && <p>Please enter a number between 1-5</p>}
        </div>
    )
}

export default Understanding;