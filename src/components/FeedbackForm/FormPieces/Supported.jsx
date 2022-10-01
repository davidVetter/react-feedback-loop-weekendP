import {useState} from 'react';
import {useDispatch} from 'react-redux';

function Supported() {
    const [support, setSupport] = useState('');
    const dispatch = useDispatch();

    const handleNext = (e) => {
        e.preventDefault();
        dispatch({
            type: 'ADD_SUPPORT',
            payload: support
        });
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
        </div>
    )
}

export default Supported;