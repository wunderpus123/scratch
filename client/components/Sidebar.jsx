import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { connect } from "react-redux";
import Login from "./Login";
import Header from "./Header";
import ProjectBar from "./ProjectBar";
import TaskContainer from "../containers/TasksContainer";

//mapStateToProps:

const mapStateToProps = state => {
  const { isLoggedIn } = state.tasks;
  return { isLoggedIn };
};
//working on the side bar; tomorrows goal should be to have login on click to project view;
class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //array of options/paths that are possible via the side bar;
    const routes = [
      {
        path: "/",
        main: () => {
          if (!this.props.isLoggedIn) {
            return (
              <div>
                <h1>WELCOME TO THE WUNDERBOARD!!</h1>
                <Login />
              </div>
            );
          }
          return (
            <div>
              {/* See comment in ProjectBar component */}
              {/* <ProjectBar /> */}
              <h1>Project #1</h1>
              <Header addTask={this.props.addTask} />
              <TaskContainer />
            </div>
          );
        }
        // {
        //   return (
        //   <div>
        //     <h1>WELCOME TO THE WUNDERBOARD!!</h1>
        //     <Login/>
        //   </div>
        //   )
        // }
        // },
        // {
        //   path: '/home',
        //   main: () => (this.props.isLoggedIn ? <Redirect to="/home" /> : (
        //     <div>
        //       <TaskContainer />
        //     </div>
        //   )),
        // }
        //   {
        //     path: '/',
        //     main: () => {
        //       <div>
        //         <h2>Login here:</h2>
        //         <Login/>
        //       </div>
        //     }
      }
    ];
    return (
      <Router>
        <div className="sideBar">
          {/* <div>
                <ul>
                <li><Link to="/">Login</Link></li>
                </ul>
              </div> */}
          {routes.map((route, index) => (
            <Route key={index} exact path={route.path} component={route.main} />
          ))}
        </div>
      </Router>
    );
  }
}

export default connect(mapStateToProps)(Sidebar);
