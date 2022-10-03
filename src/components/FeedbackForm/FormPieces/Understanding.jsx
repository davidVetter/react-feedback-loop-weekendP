import {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, ButtonGroup, Rating, Box, Paper } from '@mui/material';
import { NavigateBefore, NavigateNext, Stars } from '@mui/icons-material';
import getLabelText from './GetLabel';
import labels from './Labels';
import {motion} from 'framer-motion';
import pageTransitions from '../../Animations/PageTransitions';
import pageTransitionForward from '../../Animations/PageVariantForward';
// This is the 2nd question of the form ('How is you Understanding?')
function Understanding() {
    const [understanding, setUnderstanding] = useState(''); // local state for understanding input
    const [notNumber, setNotNumber] = useState(false); // local state to display message if no number input
    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.feedback); // feedback store from redux
    const [value, setValue] = useState(3); // local states for Star rating selector
    const [hover, setHover] = useState(-1);
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
      <motion.div // add transition to all children elements
        className="understandingInputDiv"
        exit='out'
        animate='in'
        initial='initial'
        variants={pageTransitionForward} // controls in, out and intial states
        transition={pageTransitions} // controls animation type
        key={2}>
        <Paper  elevation={8} >
        <h3 className="questionHead">How well are you understanding the content?</h3>
        <Box
          sx={{
            width: 600,
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: "center",
          }}
        >
        {/* Render the user's current selection if they have made one previously */}
        {understanding && <h3>Current Selection: {understanding} {understanding < 3 ? '👎':'👍'}</h3>}
          <Rating
            name="hover-feedback"
            sx={{
                color: 'info.main',
                mb: 1,
                fontSize: '2.5vw'
              }}
            value={value}
            precision={1}
            getLabelText={getLabelText} // calls function to determine text to display based on selection
            onChange={(e, newValue) => {
              setValue(newValue); // sets 2 local states to control rendering
              setUnderstanding(newValue);
            }}
            onChangeActive={(e, newHover) => {
              setHover(newHover); // sets local state so displayed text changes as user hovers stars
            }}
            emptyIcon={<Stars style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          {value !== null && (
            // This box contains the display text for star selection
            <Box sx={{ textAlign: "center", mb: 2, fontSize: '1.5vw' }}> 
              {labels[hover !== -1 ? hover : value]}
            </Box>
          )}
          {/* This component makes the buttons stay side by side nicely */}
          <ButtonGroup 
            variant='contained' 
            aria-label="outlined primary button group"
            sx={{ mb: 2 }}>
            <Button
                variant='outlined' 
                color='info'
                startIcon={<NavigateBefore />}
                onClick={handleBack}
            >
                Prev
            </Button>
            <Button
                variant="contained"
                endIcon={<NavigateNext />}
                onClick={handleNext}
            >
                Next
            </Button>
          </ButtonGroup>
          {/* Below only renders if the user tried to use an invalid value */}
          {notNumber && <p className="pickMessage">Please select a rating! <span className="emojiBig">🤔</span></p>}
        </Box>
        </Paper>
      </motion.div>
    );
}

export default Understanding;