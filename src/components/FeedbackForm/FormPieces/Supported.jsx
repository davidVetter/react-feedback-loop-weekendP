import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Button } from '@mui/material';
// This is the 3rd question of the form ('How supported do you feel?')
function Supported() {
    const [support, setSupport] = useState('');
    const [notNumber, setNotNumber] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.feedback);
    // This conditional will check if understand store in redux already has
    // a value and will display that value in the input
    // This is used to populate the input if the user uses the back button
    // a question and returns to the previous question
    useEffect(() => {
        if (feedback.supported && !(feedback.supported === support)) {
            setSupport(feedback.supported);
        }
    }, [])
    // This function will check if the user entered values
    // are numbers between 1-5, if so then the value is 
    // added to redux feedback store, local state cleared
    // and the user is moved to the next question page(/understanding)
    // If the value is not a number a message is rendered and the
    // user must retry entering a number
    const handleNext = (e) => {
        e.preventDefault();
        if (Number(support) < 6 && Number(support) > 0) { // verifies if feeling is a number AND between 1-5
        dispatch({
            type: 'ADD_SUPPORT', // sends user data to redux feedback store
            payload: support // current value from local state is sent
        });
        setSupport(''); // clear local state
        setNotNumber(false); // reset local state if user had entered an invalid value first
        history.push('/comments'); // move user to 'comments' question page
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
        history.push('/understanding'); // move user
    }
    // Renders the question and input for user to enter answer
    // A next button will validate the users data and move them
    // if the data is good, a message will render if a user
    // trys to move on with bad data in input
    // A 'back' button will move the user to the previous question (understanding)
    return (
        <div className='supportedInputDiv'>
            <h3>How well are you being supported?</h3>
            <label>Rate: 1-5<br />
                <input
                    onChange={(e) => setSupport(e.target.value)} // keeps state current with inputs value
                    value={support} // binds value to state
                    type="number" // restricts values to only numbers
                    min={1} // set minimum number value that can in the input to 1
                    //set maximum number value that can in the input to 5
                    max={5} />
            </label><br />
            <Button variant='contained' startIcon={<NavigateBefore />} onClick={handleBack}>Prev</Button>
            <Button variant='contained' endIcon={<NavigateNext />} onClick={handleNext}>Next</Button>
            {/* Below only renders if the user tried to use an invalid value */}
            {notNumber && <p>Please enter a number between 1-5</p>}
        </div>
    )
}

export default Supported;