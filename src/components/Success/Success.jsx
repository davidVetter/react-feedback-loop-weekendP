import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Button, Paper } from '@mui/material';
import { RestartAlt } from '@mui/icons-material';
import { motion } from 'framer-motion';
import pageTransitions from '../Animations/PageTransitions';
import pageTransitionForward from '../Animations/PageVariantForward';

// This is the Success page component
function Success() {
    const dispatch = useDispatch();
    const history = useHistory();
    // This function handles the "new feedback" button
    // On click a dispatch will clear the current
    // data in the redux store and move the user
    // back to the first page to start a new feedback
    // submission
    const handleReset = (e) => {
        e.preventDefault();
        dispatch({
            type: 'CLEAR_FEEDBACK'
         });
        history.push('/');
    }
    // Renders 2 div elements that contain some text to indicate
    // to user that the feedback has been added to our database
    return (
        <motion.div // add transition to all children elements
            className="successDiv"
            exit='out'
            animate='in'
            initial='initial'
            variants={pageTransitionForward} // controls in, out and intial states
            transition={pageTransitions} // controls animation type
            key={6}>
            <Paper elevation={8} className='questionPaper'>
            <div className="successMessage">
                <p>YOUR FEEDBACK WAS RECEIVED!</p>
            </div>
            <div className="thxMessageBtnDiv">
                <p>THANK YOU!</p>
                <Button 
                    variant='contained' 
                    color='success' 
                    type='button' 
                    endIcon={<RestartAlt />} 
                    onClick={handleReset}>
                    New Feedback
                </Button>
            </div>
            </Paper>
        </motion.div>
    )
}

export default Success;