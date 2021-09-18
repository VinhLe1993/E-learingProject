import React from "react";
import "./App.css";
import CourseDetailScreen from "./Screens/Detail";
import HomeScreen from "./Screens/Home";
import SignupScreen from "./Screens/Signup";
import { Router, Route, Switch } from "react-router-dom";
import Header from "./Layouts/Header";
import SigninScreen from "./Screens/Signin";
import { createBrowserHistory } from "history";
import CourseList from "./Screens/CourseList";
import Footer from "./Layouts/Footer";
import CourseSearch from "./Screens/CourseSearch"

export const history = createBrowserHistory();


 function App() {
  return (
    <Router history={history}>
      <Header />
      <Switch>
        <Route path="/detail/:courseID" exact component={CourseDetailScreen} />
        <Route path="/courseslist/:listID" exact component={CourseList} />
        <Route path="/coursesearch" exact component={CourseSearch} />
        <Route path="/signup" exact component={SignupScreen} />
        <Route path="/signin" exact component={SigninScreen} />
        <Route path="/" exact component={HomeScreen} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
