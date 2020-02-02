import React from "react"

export const ProjectSummary = ({project}) => {
    return (
        <div className="card z-depth-0 project-summaty">
            <div className="card-container grey-text text-darken-3">
                <span className="card-title">{project.title}</span>
                <p> Project be the my</p>
                <p className="grey-text"> 28 January 2020</p>
            </div>
        </div>
    );
            
}