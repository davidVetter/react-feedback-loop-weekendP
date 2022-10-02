import labels from "./Labels";

function getLabelText(value) {

    return `${value} Star${value !== 1 ? 's' : ''}, ${labels[value]}`;

}

export default getLabelText;