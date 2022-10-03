import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import { NavigateBefore, NavigateNext } from '@mui/icons-material';
import { Button, ButtonGroup, TextField, Paper, Box } from '@mui/material';
import { motion } from 'framer-motion';
import pageTransitions from '../../Animations/PageTransitions';
import pageTransitionForward from '../../Animations/PageVariantForward';

// This is 4th and final question of the form (Any comments for us?)
function Comments() {
    const [comments, setComments] = useState(''); // local state
    const dispatch = useDispatch();
    const history = useHistory();
    const feedback = useSelector(store => store.feedback); // feedback object stored in redux before POST to database
    // This conditional will check if understand store in redux already has
    // a value and will display that value in the input
    // This is used to populate the input if the user uses the back button
    // a question and returns to the previous question
    useEffect(() => {
        if (feedback.comments) {
            setComments(feedback.comments);
        }
    }, [])
    // This function will store the user inputted comments (if any)
    // This is the only optional input on the form
    // After comments are moved to redux store, the local state
    // is cleared and the user is moved to the 'Review' page (/review)
    const handleNext = (e) => {
        e.preventDefault();
        dispatch({ // dispatch to redux store
            type: 'ADD_COMMENTS',
            payload: comments
        });
        setComments(''); // clear local state
        history.push('/review'); // move user
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
        history.push('/supported'); // move user
    }
    // Renders the question and input for user to enter answer
    // A next button will move the user to the next page of
    // application
     // A 'back' button will move the user to the previous question (supported)
    return (
        <motion.div // add transition to all children elements
            className='commentsInputDiv'
            exit='out'
            animate='in'
            initial='initial'
            variants={pageTransitionForward} // controls in, out and intial states
            transition={pageTransitions} // controls animation type
            key={4}>
        <Box sx={{ width: 'inherit' }}>
        <Paper elevation={8} sx={{ mt: 1 }}>
        <h3 style={{paddingTop: '1%'}} className="questionHead">Any comments you want to leave?</h3>
            <TextField
                variant='filled'
                multiline
                sx={{mb: 1, padding: 1}}
                onChange={(e) => setComments(e.target.value)} // keeps state current with inputs value
                placeholder="Type here..."
                value={comments} // binds value to state
                type="text" />
                <br />
        {/* This component makes the buttons stay side by side nicely */}
        <ButtonGroup
            variant="contained"
            aria-label="outlined primary button group"
            sx={{ mb: 2 }}
        >
        <Button variant='outlined' color='info' startIcon={<NavigateBefore />} onClick={handleBack}>Prev</Button>
        <Button variant='contained' endIcon={<NavigateNext />} onClick={handleNext}>Next</Button>
        </ButtonGroup>
        </Paper>
        </Box>
        </motion.div>
    )
}

export default Comments;