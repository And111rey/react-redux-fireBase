import React from "react"
import { Notification } from "./Notification"
import { ProjectList } from "../projects/ProjectList"
import { useSelector } from "react-redux"

export const Dashboard = () => {
    
    const projects = useSelector(state => state.project )


    return(
        <div className="dashboard container">
            <div className="row">
                <div className="col s12 m6">
                <ProjectList projects={projects.projects} />
                </div>
                <div className="col s12 m5 offset-m1">
                    <Notification />
                </div>
            </div>
        </div>
    )
}