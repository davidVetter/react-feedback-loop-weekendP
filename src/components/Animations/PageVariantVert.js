const pageTransition = {
    initial: {
        opacity: 0,
        y: '-100vw',
        scale: 0.8
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1
    },
    out: {
        opacity: 0,
        y: '100vw',
        scale: 1.4
    }
};

export default pageTransition;