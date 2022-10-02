import {useState} from 'react';
import {useDispatch} from 'react-redux';
import { useHistory } from 'react-router-dom';

function Supported() {
    const [support, setSupport] = useState('');
    const [notNumber, setNotNumber] = useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const handleNext = (e) => {
        e.preventDefault();
        if (Number(support) < 6 && Number(support) > 0) {
        dispatch({
            type: 'ADD_SUPPORT',
            payload: support
        });
        setSupport('');
        setNotNumber(false);
        history.push('/comments');
        } else {
            setNotNumber(true);
        }
    }

    return (
        <div className='supportedInputDiv'>
            <h3>How well are you being supported?</h3>
            <label>How well are you being supported?<br />
                <input
                    onChange={(e) => setSupport(e.target.value)}
                    placeholder="Supported?"
                    value={support}
                    type="text" />
            </label>
            <button onClick={handleNext}>Next</button>
            {notNumber && <p>Please use a number between 1-5</p>}
        </div>
    )
}

export default Supported;