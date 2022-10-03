import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavigateBefore, NavigateNext, Stars } from '@mui/icons-material';
import { Button, ButtonGroup, Rating, Box, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import getLabelText from './GetLabel';
import labels from './Labels';
import pageTransitions from '../../Animations/PageTransitions';
import pageTransitionForward from '../../Animations/PageVariantForward';

// This is the 3rd question of the form ('How supported do you feel?')
function Supported() {
    const [support, setSupport] = useState('');
    const [notNumber, setNotNumber] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.feedback);
    const [value, setValue] = useState(3);
    const [hover, setHover] = useState(-1);
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
      <motion.div 
        className="supportedInputDiv"
        exit='out'
        animate='in'
        initial='initial'
        variants={pageTransitionForward}
        transition={pageTransitions}
        key={3}>
        <Paper elevation={8} className='questionPaper'>
        <h3 className="questionHead">How well are you being supported?</h3>
        <Box
          sx={{
            width: 600,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          {/* Render the user's current selection if they have made one previously */}
          {support && <h3>Current Selection: {support}</h3>}
          <Rating
            name="hover-feedback"
            sx={{
                color: 'info.main',
                mb: 1
              }}
            value={value}
            precision={1}
            getLabelText={getLabelText} // calls function to determine text to display based on selection
            onChange={(e, newValue) => {
              setValue(newValue); // sets 2 local states to control rendering
              setSupport(newValue);
            }}
            onChangeActive={(e, newHover) => {
              setHover(newHover); // sets local state so displayed text changes as user hovers stars
            }}
            emptyIcon={<Stars style={{ opacity: 0.55 }} fontSize="inherit" />}
          />
          {value !== null && (
            <Box sx={{ textAlign: "center", mb: 2 }}>
              {labels[hover !== -1 ? hover : value]}
            </Box>
          )}
          {/* This component makes the buttons stay side by side nicely */}
          <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ mb: 2 }}
          >
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
          {notNumber && <p className="pickMessage" >Please select a rating! <span className="emojiBig">🤔</span></p>}
        </Box>
        </Paper>
      </motion.div>
    );
}

export default Supported;