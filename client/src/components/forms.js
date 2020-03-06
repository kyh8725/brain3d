import React from "react";
import Select from "react-select";
import Woman from "../assets/home-corner.svg";

export default class createNew extends React.Component {
  state = {
    options: [{ value: "lifestyle", label: "lifestyle" }]
  };

  // window.alert("Successfully added product to inventory");
  // event.target.reset();

  render() {
    return (
      <div className="home">
        <form className="home__form">
          <h1 className="home__form-title"> Genre</h1>
          <Select
            className="home__form-select"
            placeholder="lifestyle"
            options={this.state.options}
            // value={this.state.selecTedCountry}
            // onChange={this.getSelected}
          />
          <h1 className="home__form-title">Title Word Count</h1>
          <input className="home__form-value" value="120" />
          <h1 className="home__form-title">Content Word Count</h1>
          <input className="home__form-value" value="2" />
          <h1 className="home__form-title">Image Count</h1>
          <input className="home__form-value" value="5" />

          <button className="home__form-button">Optify!</button>
        </form>
        <aside className="home__right">
          <div className="home__title-container">
            <h1 className="home__right-title">What's this?</h1>
          </div>
          <div className="home__woman-container">
            <img className="home__woman" src={Woman} />
          </div>
        </aside>
      </div>
    );
  }
}
