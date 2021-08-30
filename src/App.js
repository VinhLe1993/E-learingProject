import React from "react";
import "./App.css";
import CourseDetailScreen from "./Screens/Detail";
import HomeScreen from "./Screens/Home";
import SignupScreen from "./Screens/Signup";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./Layouts/Header";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/detail" exact component={CourseDetailScreen} />
        <Route path="/signup" exact component={SignupScreen} />
        <Route path="/" exact component={HomeScreen} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
