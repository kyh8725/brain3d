import React from "react";
import Select from "react-select";

export default class createNew extends React.Component {
  state = {
    options: [{ value: "lifestyle", label: "llifestyle" }]
  };

  // window.alert("Successfully added product to inventory");
  // event.target.reset();

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
        <h2 className="form__value"> 120 </h2>
        <h1 className="form__title"># pictures</h1>
        <h2 className="form__value"> 2 </h2>

        <button>find result</button>
      </form>
    );
  }
}
