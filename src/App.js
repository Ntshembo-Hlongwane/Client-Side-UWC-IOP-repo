import React from "react";
import Upload from "./Upload";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/upload-video">
          <Upload />
        </Route>
        <Route path="/">
          <Header />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
