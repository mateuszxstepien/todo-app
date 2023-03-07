import React, { Component } from "react";
import "./App.css";
import AddTask from "./AddTask";
import TaskList from "./TaskList";

class App extends Component {
  counter = 6;

  state = {
    tasks: [
      {
        id: 0,
        text: "Zadanie 1 pierwsze",
        date: "24.12.2022",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 1,
        text: "Zadanie 2 drugie",
        date: "23.12.2022",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 2,
        text: "Zadanie 3 trzecie",
        date: "25.12.2022",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 3,
        text: "Zadanie 4 czwarte",
        date: "24.12.2022",
        important: false,
        active: true,
        finishDate: null,
      },
      {
        id: 4,
        text: "Zadanie 5 piąte",
        date: "26.12.2022",
        important: true,
        active: true,
        finishDate: null,
      },
      {
        id: 5,
        text: "Zadanie 6 szóste",
        date: "26.12.2022",
        important: true,
        active: true,
        finishDate: null,
      },
    ],
  };

  addTask = (text, important, date) => {
    const task = {
      id: this.counter,
      text,
      date,
      important,
      active: true,
      finishDate: null,
    };

    this.counter++;
    console.log(task);
    this.setState((prevState) => ({
      tasks: [...prevState.tasks, task],
    }));

    return true;
  };

  changeTask = (id) => {
    let tasks = [...this.state.tasks];
    tasks.forEach((task) => {
      if (task.id === id) {
        task.active = false;
        task.finishDate = new Date().getTime();
      }
    });
    this.setState({
      tasks,
    });
  };

  deleteTask = (id) => {
    //kopia tablicy
    let tasks = [...this.state.tasks];
    // const tasks = [...this.state.tasks];
    // let tasks = Array.from(this.state.tasks);

    // modyfikacja/usuwanie lementu z tablicy tablicy
    tasks = tasks.filter((task) => task.id !== id);
    // const index = tasks.findIndex((task) => task.id === id);
    // tasks.splice(index, 1);

    this.setState({
      tasks,
    });
  };

  render() {
    return (
      <>
        <h2>ToDo App</h2>
        <AddTask addTask={this.addTask} />
        <hr />
        <TaskList
          tasks={this.state.tasks}
          changeTask={this.changeTask}
          deleteTask={this.deleteTask}
        />
      </>
    );
  }
}

export default App;
