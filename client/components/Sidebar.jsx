import React, { Component } from 'react';
import {
  BrowserRouter as Router, Route, Link, Redirect,
} from 'react-router-dom';
// import { connect } from 'react-redux';
import Login from './Login';

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
                  return (
                  <div>
                    <h1>WELCOME TO THE WUNDERBOARD!!</h1>
                    <Login/>
                  </div>
                  )
                }
            },
        //     {
        //       path: '/login',
        //       main: () => {
        //         <div>
        //           <h2>Login here:</h2>
        //           <Login/>
        //         </div>
        //       }
        //   },
        //   {
        //     path: '/',
        //     main: () => {
        //       <div>
        //         <h2>Login here:</h2>
        //         <Login/>
        //       </div>
        //     }
        // }
        ];
        return (
          <Router>
            <div className="sideBar">
              {/* <div>
                <ul>
                <li><Link to="/">Login</Link></li>
                </ul>
              </div> */}
              {
                routes.map((route, index) => <Route key={index} exact path={route.path} component={route.main} />)
              }
            </div>
          </Router>
        )
    }
}


export default Sidebar;
