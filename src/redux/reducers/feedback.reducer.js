// empty default object for feedback
const feedback = {
    feelings: '',
    understanding: '',
    supported: '',
    comments: ''
};

// This is the feedbackReducer for the feedback redux store
const feedbackReducer = (state = feedback, action) => {
    if (action.type === 'ADD_FEELING') {
        let newFeeling = {...state} // copy current state
        newFeeling.feelings = action.payload // update feelings property to value from payload
        return newFeeling; // return the state object with the updated property
    } else if (action.type === 'ADD_UNDERSTANDING') {
        let newFeeling = {...state} // copy current state
        newFeeling.understanding = action.payload // update understanding property to value from payload
        return newFeeling; // return the state object with the updated property
    } else if (action.type === 'ADD_SUPPORT') {
        let newFeeling = {...state} // copy current state
        newFeeling.supported = action.payload // update supported property to value from payload
        return newFeeling; // return the state object with the updated property
    } else if (action.type === 'ADD_COMMENTS') {
        let newFeeling = {...state} // copy current state
        newFeeling.comments = action.payload // update comments property to value from payload
        return newFeeling; // return the state object with the updated property
    } else if (action.type === 'CLEAR_FEEDBACK') {
        return feedback; // resets the state to default empty state
    }
    return state; // default return if no action matched
}

export default feedbackReducer;