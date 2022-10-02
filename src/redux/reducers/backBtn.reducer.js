// This reducer will help trigger if the user used a backbutton
// so the proper emoji will be displayed in the header component
let defaultState = true;

const backBtnReducer = (state = defaultState, action) => {
    if (action.type === 'BACK_USED') {
        return !state;
    }
    return state;
}

export default backBtnReducer;