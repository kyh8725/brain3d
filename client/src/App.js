import React from "react";
//import Helper from "./helper/helper";
import data from "./models/data.json";

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
    return <div className="App">{this.getData()}</div>;
  }
}

export default App;
