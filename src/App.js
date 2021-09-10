import React from "react";
import "./App.css";
import CourseDetailScreen from "./Screens/Detail";
import HomeScreen from "./Screens/Home";
import SignupScreen from "./Screens/Signup";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Layouts/Header";
import SigninScreen from "./Screens/Signin";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();


 function App() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/detail/:courseID" exact component={CourseDetailScreen} />
        <Route path="/signup" exact component={SignupScreen} />
        <Route path="/signin" exact component={SigninScreen} />
        <Route path="/" exact component={HomeScreen} />
      </Switch>
    </Router>
  );
};

export default App;
