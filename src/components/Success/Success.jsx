import {useDispatch} from 'react-redux';
import {useHistory} from 'react-router-dom';

function Success() {
    const dispatch = useDispatch();
    const history = useHistory();
    
    const handleReset = (e) => {
        e.preventDefault();
        dispatch({
            type: 'CLEAR_FEEDBACK'
         });
        history.push('/');
    }
    
    return (
        <div className="successDiv">
            <div className="successMessage">
                <p>YOUR FEEDBACK WAS RECEIVED!</p>
            </div>
            <div className="thxMessageBtnDiv">
                <p>THANK YOU!</p>
                <button type='button' onClick={handleReset}>New Feedback?</button>
            </div>
        </div>
    )
}

export default Success;