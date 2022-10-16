
export const fade_in_out = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,
        transition: {
            duration: 0.8,
        },

    },

    exit: {
        opacity: 0,
        transition: {
            duration: 0.8
        },
    },
};


export const nav_drop_down = {
    hidden: {
        x: "-100vw",
        opacity: 0
    },
    visible: {
        x: 0,
        opacity: 1,
        transition: { type: "spring", duration: 1, bounce: 0.05, staggerChildren: .5 },
    },
    exit: {
        x: "-100vw",
        opacity: 0,
        transition: { duration: 1, staggerChildren: .5 },
    },
}

export const category_animation = {

}

export const left_to_right_scroll_animation = {
    hidden: {
        y: "20vh",
        opacity: 0,
    },

    inView: {
        y: 0,
        opacity: 1,

        transition: {
            delay: 0.3,
            duration: 0.7,
            staggerChildren: 0.5,
        },
    },
}

