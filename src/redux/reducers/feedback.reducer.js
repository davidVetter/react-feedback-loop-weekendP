const feedback = {
    feelings: '',
    understanding: '',
    supported: '',
    comments: ''
};

const feedbackReducer = (state = feedback, action) => {
    if (action.type === 'ADD_FEELING') {
        let newFeeling = {...state}
        newFeeling.feelings = action.payload
        return newFeeling;
    } else if (action.type === 'ADD_UNDERSTANDING') {
        let newFeeling = {...state}
        newFeeling.understanding = action.payload
        return newFeeling;
    } else if (action.type === 'ADD_SUPPORT') {
        let newFeeling = {...state}
        newFeeling.supported = action.payload
        return newFeeling;
    } else if (action.type === 'ADD_COMMENTS') {
        let newFeeling = {...state}
        newFeeling.comments = action.payload
        return newFeeling;
    } else if (action.type === 'CLEAR_FEEDBACK') {
        return feedback;
    }
    return state;
}

export default feedbackReducer;