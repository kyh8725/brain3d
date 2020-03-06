import React from "react";
import Select from "react-select";
import { Link } from "react-router-dom";

export default class createNew extends React.Component {
  state = {
    options: [{ value: "lifestyle", label: "llifestyle" }],
    color: { color: "red" },
    number: 500
  };

  componentDidMount() {
    this.getColor();
  }

  getColor = () => {
    if (this.state.number > 1000) {
      this.setState({ color: { color: "green" } });
    } else if (this.state.number > 200) {
      this.setState({ color: { color: "yellow" } });
    }
  };

  render() {
    return (
      <form className="form">
        <h1 className="form__title"> Genre</h1>
        <Select
          className="form__select"
          placeholder="lifestyle"
          options={this.state.options}
          // value={this.state.selecTedCountry}
          // onChange={this.getSelected}
        />
        <h1 className="form__title"># words written</h1>
        <h2 className="form__value">120</h2>
        <h1 className="form__title" style={this.state.color}>
          # pictures
        </h1>
        <h2 className="form__value"> 2 </h2>

        <Link to="/news">
          <button>find result</button>
        </Link>
      </form>
    );
  }
}
