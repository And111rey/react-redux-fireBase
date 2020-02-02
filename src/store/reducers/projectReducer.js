import { CREATE_PROJECT } from "../types"

const initState = {
    projects: [
        {id: 1, title: "this is just first text"},
        {id: 1, title: "second text? second text"},
        {id: 1, title: "thid is just first text"},
    ]
}

export const projecthReducer = (state = initState, action) => {
    switch(action.type) {
        case CREATE_PROJECT:
            console.log("reducer is working ->>", action.project)
    }
    return state
}