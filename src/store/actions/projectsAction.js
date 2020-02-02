import { CREATE_PROJECT } from "../types"


// ====> simple actionCreator

// export const createProject = (project) => {
//     return {
//         type: "ADD_PROJECT",
//         project: project
//     }
// }

export const createProjectAction = (project) => {
    console.log("IN ACTION CREATOR  ", project)
    return (dispatch, getState) => {
        dispatch({
            type: CREATE_PROJECT,
            project: project
        })
    }

}