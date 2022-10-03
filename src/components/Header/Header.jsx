import { Paper } from '@mui/material';
import {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
// Header component that displays on all pages of the app
// These text of header and an associated emoji update
// as the user moved back and forth bewteen the form pages
function Header() {
    // array to store the current page url that is split at the # in every url
    let path = window.location.href.split('#');
    // two local states to hold the emoji and message to display
    const [emoji, setEmoji] = useState('🤔');
    const [message, setMessage] = useState(`Let's hear how things are going!`);
    // access to feedback and backBtn stores
    const feedback = useSelector(store => store.feedback);
    const backBtn = useSelector(store => store.backBtn);
    // This function will run anytime either store it changed
    // It checks what the path after the # in the current url is
    // and displays an emoji and message
    // It updates the 2 local states which trigger a re-render of the header
    useEffect(() => {
        console.log('this is path: ', path);
        if (path[1] === '/success') {
            setEmoji('🎉');
            setMessage(`We value your feedback!`);
        } else if (path[1] === '/') {
            setEmoji('🌡');
            setMessage(`Let's hear how things are going!`);   
        }else if (path[1] === '/understanding') {
            setEmoji('👍');
            setMessage(`Do you have a handle on the current material?`);
        } else if (path[1] === '/supported') {
            setEmoji('🤲');
            setMessage(`How can we help pick you up?`);
        } else if (path[1] === '/review') {
            setEmoji('👀');
            setMessage(`Does everything look okay?`);
        } else if (path[1] === '/comments') {
            setEmoji('📝');
            setMessage(`Suggestions, Comments?`);
        } else if (path[1] === '/admin') {
            setEmoji('📋');
            setMessage(`Feedback Results`);
        }
    }, [feedback, backBtn])
    // render the header with a message and emoji determined by current url
    return (
        <Paper elevation={16} id="headerPaper">
        <header className='App-header'>
            <h1 className='App-title'>{message} <span className="headerEmoji">{emoji}</span></h1>
        </header>
        </Paper>
    )
}

export default Header;