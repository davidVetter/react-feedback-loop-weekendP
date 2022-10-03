// This determines some of the animations to be used during the transition
// This makes the element move in a horizontal fashion along the x-axis
// from left to right
const pageTransitionForward = {
    initial: {
        opacity: 0,
        x: '-100vw',
        scale: 0.8
    },
    in: {
        opacity: 1,
        x: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        x: '100vw',
        scale: 1.2
    }
};

export default pageTransitionForward;