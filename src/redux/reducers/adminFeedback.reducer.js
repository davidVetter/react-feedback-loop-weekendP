const adminFeedbackReducer = (state = [], action) => {
    if (action.type === 'SET_FEEDBACK') {
        return action.payload;
    }
    return state;
}

export default adminFeedbackReducer;