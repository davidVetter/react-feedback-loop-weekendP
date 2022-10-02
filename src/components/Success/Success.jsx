import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';
import { Button } from '@mui/material';
import { RestartAlt } from '@mui/icons-material';
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
        <div className="successDiv">
            <div className="successMessage">
                <p>YOUR FEEDBACK WAS RECEIVED!</p>
            </div>
            <div className="thxMessageBtnDiv">
                <p>THANK YOU!</p>
                <Button variant='contained' type='button' endIcon={<RestartAlt />} onClick={handleReset}>New Feedback</Button>
            </div>
        </div>
    )
}

export default Success;