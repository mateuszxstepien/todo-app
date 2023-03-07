import React from "react";
import "./TaskList.css";
import Task from "./Task";

const TaskList = (props) => {
  const active = props.tasks.filter((task) => task.active);
  const done = props.tasks.filter((task) => !task.active);

  // done.sort((a, b) => b.finishDate - a.finishDate);
  if (active.length >= 2) {
    active.sort((a, b) => {
      a = a.text.toLowerCase();
      b = b.text.toLowerCase();

      if (a < b) {
        return -1;
      }

      if (a > b) {
        return 1;
      }

      return 0;
    });
  }

  if (done.length >= 2) {
    done.sort((a, b) => {
      if (a.finishDate < b.finishDate) {
        return 1;
      }
      if (a.finishDate > b.finishDate) {
        return -1;
      }
      return 0;
    });
  }

  const activeTasks = active.map((task) => (
    <Task
      key={task.id}
      task={task}
      changeTask={props.changeTask}
      deleteTask={props.deleteTask}
    />
  ));
  const doneTasks = done.map((task) => (
    <Task key={task.id} task={task} deleteTask={props.deleteTask} />
  ));
  return (
    <>
      <h3>
        Zadania do zrobienia <em>({active.length})</em>
      </h3>
      <h5>{active.length > 0 ? activeTasks : "brak zadań do zrobienia"}</h5>
      <hr />
      <h3>
        Zadania zrobione{" "}
        <em>
          (
          {done.length > 5
            ? "wyświetlonych jest jedynie 5 ostatnich elementów"
            : done.length}
          )
        </em>
      </h3>
      <h5>
        {done.length > 0 ? doneTasks.slice(0, 5) : "brak zadań zrobionych"}
      </h5>
    </>
  );
};

export default TaskList;
