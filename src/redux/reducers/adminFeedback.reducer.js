// This reducer is for holding all current feedback in the database
const adminFeedbackReducer = (state = [], action) => {
    if (action.type === 'SET_FEEDBACK') {
        return action.payload; // set state to everything recieved from GET performed in Admin component
    }
    return state; // default return if no matching action
}

export default adminFeedbackReducer;