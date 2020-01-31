import React from "react"

export const ProjectDetails = (props) => {

    console.log(props)
    const id = props.match.params.id
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project title - {id}</span>
                    <p>
                        Lorem Lorem Lorem Lorem Lorem vLorem Lorem Lorem Lorem
                        Lorem Lorem Lorem Lorem vLorem Lorem Lorem Lorem Lorem
                        Lorem Lorem Lorem vLorem Lorem Lorem{" 8"}
                    </p>
                </div>
                <div className="card-action gret lighten-4 grey-text"></div>
                <div>Posted the NET</div>
                <div>29 january 2020</div>
            </div>
        </div>
    );
} 