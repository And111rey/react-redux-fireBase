import React from 'react';
import { BrowserRouter, Switch,Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar"
import { Dashboard } from './components/dashboard/DashBoard';
import { ProjectDetails } from "./components/projects/ProjectDetails"
import { SignIn } from './components/auth/Signin';
import { SignUp } from "./components/auth/SignUp"
import { CreateProject } from "./components/projects/CreateProject"
// import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/project/:id" component={ProjectDetails} />
          <Route path="/signin" component={SignIn}/>
          <Route path="/signUp" component={SignUp}/>
          <Route path="/create" component={CreateProject}/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
  