import labels from "./Labels";

// This function determines which text is to be displayed
// based on the number the user selected on the Rating component
function getLabelText(value) {
    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;
}

export default getLabelText;