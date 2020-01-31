import React, { useReducer } from "react";

export const CreateProject = () => {
    const [data, setData] = useReducer(
        (state, newState) => ({ ...state, ...newState }),{ title: "", content: "" });
    //title
    // content

    const handleChange = e => {
        const name = e.target.name;
        const newState = e.target.value;
        setData({ [name]: newState });
    };

    const handleSubmit = e => {
        e.preventDefault();
        console.log(data);
    };

    return (
        <div className="container">
            <h5 className="grey-text text-darken-3"> Create Project</h5>

            <div className="input-field">
                <label htmlFor="tite">Title</label>
                <input type="text" name="title" onChange={handleChange} />
            </div>
            
            <div className="input-field">
                <label htmlFor="content">Content</label>
                <textarea
                    name="content"
                    className="matirialize-textarea"
                    onChange={handleChange} 
                />
            </div>

            <div className="input-field">
                <button
                    onClick={handleSubmit}
                    className="btn pink lighten-1 z-depth-0"
                >
                    Create
                </button>
            </div>
        </div>
    );
};
