import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import Helper from "./helper/helper";
import data from "./models/data.json";
import Header from "./components/header";
import Forms from "./components/forms";

class App extends React.Component {
  state = {};
  getData = () => {
    console.log(data);
    const productArray = data.map(item => {
      return item.country;
    });
    return productArray;
  };
  render() {
    return (
      <Router>
        <Switch>
          <Route
            path="/"
            exact
            render={() => {
              return (
                <>
                  <Header />
                  <Forms />
                </>
              );
            }}
          />
          <Route
            path="/news"
            exact
            render={() => {
              return (
                <>
                  <Header />
                </>
              );
            }}
          />
          <Route
            path="/post"
            exact
            render={() => {
              return (
                <>
                  <Header />
                </>
              );
            }}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
