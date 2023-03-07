import React, { Component } from "react";
import "./AddTask.css";

class AddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: this.minDate,
  };

  handleText = (e) => {
    this.setState({
      text: e.target.value,
    });
  };

  handleChecked = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  };

  handleDate = (e) => {
    this.setState({
      date: e.target.value,
    });
  };

  handleClick = () => {
    const { text, checked, date } = this.state;
    if (text.length > 2) {
      const add = this.props.addTask(text, checked, date);
      if (add) {
        this.setState({
          text: "",
          checked: false,
          date: this.minDate,
        });
      } else {
        alert("Błąd dodania, spróbuj ponownie później");
      }
    } else {
      alert("Nazwa zadania jest za krótka!");
    }
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";

    return (
      <>
        <div className="form">
          <input
            type="text"
            placeholder="dodaj zadanie"
            value={this.state.text}
            onChange={this.handleText}
          />
          <input
            type="checkbox"
            id="checkbox"
            // value={this.state.checked}
            checked={this.state.checked}
            onChange={this.handleChecked}
          />
          <label htmlFor="checkbox">Piorytet</label>
          <br />
          <label htmlFor="date">Do kiedy zrobić</label>
          <input
            type="date"
            id="date"
            min={this.minDate}
            max={maxDate}
            value={this.state.date}
            onChange={this.handleDate}
          />
          <br />
          <button onClick={this.handleClick}>Dodaj</button>
        </div>
      </>
    );
  }
}

export default AddTask;
