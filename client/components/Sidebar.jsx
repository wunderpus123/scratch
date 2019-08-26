import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Link, Redirect,
} from 'react-router-dom';
import { connect } from 'react-redux';
import Login from './Login';
import Header from "./Header";
import ProjectBar from "./ProjectBar";
import TaskContainer from '../containers/TasksContainer'

//mapStateToProps:

const mapStateToProps = state => {
  const { isLoggedIn } = state.tasks;
  return { isLoggedIn }
}
//working on the side bar; tomorrows goal should be to have login on click to project view;
class Sidebar extends Component {
    constructor(props){
        super(props);
    }
    render() {
    
        //array of options/paths that are possible via the side bar;
        const routes = [
            {
                path: '/',
                main: () => {
                  if (!this.props.isLoggedIn) {
                    return (
                      <div>
                        <h1>WELCOME TO THE WUNDERBOARD!!</h1>
                        <Login/>
                      </div>
                    )
                  }
                  return (
                    <div>
                      <ProjectBar />
                      <Header addTask={this.props.addTask} projectTitle={"Project #1"} />
                      <TaskContainer />
                    </div>
                  )
                }
        }
        ];
        return (
          <Router>
            <div className="sideBar">
              {
                routes.map((route, index) => <Route key={index} exact path={route.path} component={route.main} />)
              }
            </div>
          </Router>
        )
    }
}


export default connect (mapStateToProps)(Sidebar);
