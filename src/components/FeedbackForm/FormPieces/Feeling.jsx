import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, Rating, Box, Paper } from '@mui/material';
import { NavigateNext, Stars} from '@mui/icons-material';
import { motion } from 'framer-motion';
import getLabelText from './GetLabel';
import labels from './Labels';
import pageTransition from '../../Animations/PageVariantVert';
import pageTransitions from '../../Animations/PageTransitions';

// This is the 'How are you feeling' question component of
// the feedback form (1st question/starting page of form)
function Feeling() {
    const [feeling, setFeeling] = useState('');
    const [notNumber, setNotNumber] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.feedback);
    const [value, setValue] = useState(3);
    const [hover, setHover] = useState(-1);

    // This conditional will check if feelings store in redux already has
    // a value and will display that value in the input
    // This is used to populate the input if the user uses the back button
    // a question and returns to the previous question
    useEffect(() => {
        if (feedback.feelings && !(feedback.feelings === feeling)) {
            setFeeling(feedback.feelings);
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
      <motion.div // add transition to all children elements
        className="feelingInputDiv"
        exit='out'
        animate='in'
        initial='initial'
        variants={pageTransition} // controls in, out and intial states
        transition={pageTransitions} // controls animation type
        key={1}>
        <Paper elevation={8}> 
        <h3 className="questionHead">How are you feeling today?</h3>
        <Box
          sx={{
            width: 600,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
        {/* Render the user's current selection if they have made one previously */}
        {feeling && <h3>Current Selection: {feeling} {feeling < 3 ? '👎':'👍'}</h3>}
        {/* Star rating selector component */}
        <Rating
          name="hover-feedback"
          sx={{
            color: 'info.main',
            mb: 1,
            fontSize: '2.5vw'
          }}
          value={value}
          precision={1}
          getLabelText={getLabelText}
          onChange={(e, newValue) => {
            setValue(newValue); // update local states on star selection
            setFeeling(newValue);
          }}
          onChangeActive={(e, newHover) => {
            setHover(newHover); // allows value message to change as user hovers over stars
          }}
          emptyIcon={<Stars style={{ opacity: 0.55 }} fontSize="inherit" />} // sets what the stars that aren't selected should look like
        />
        {/* allows the default value to be displayed when user isn't hovering or the user hasn't previously selected a value */}
        {value !== null && (
         <Box sx={{ textAlign: 'center', mb: 2, fontSize: '1.5vw' }}>{labels[hover !== -1 ? hover : value]}</Box>
        )}
        <Button
          variant="contained"
          endIcon={<NavigateNext />}
          onClick={handleNext}
          sx={{mb: 2}}
        >
          Next
        </Button>
        {/* Below only renders if the user tried to use an invalid value */}
        {notNumber && <p className="pickMessage" >Please select a rating! <span className="emojiBig">🤔</span></p>}
        </Box>
      </Paper>
      </motion.div>
    );
}

export default Feeling;