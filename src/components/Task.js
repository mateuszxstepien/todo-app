import React from "react";
import "./Task.css";

const Task = (props) => {
  const style = {
    color: "red",
  };

  const { id, text, date, important, active, finishDate } = props.task;

  if (active) {
    return (
      <>
        <div>
          <p>
            <strong style={important ? style : null}>{text}</strong> - do {date}
            <button onClick={() => props.changeTask(id)}>
              Zostało zrobione
            </button>
            <button onClick={() => props.deleteTask(id)}>Usuń</button>
          </p>
        </div>
      </>
    );
  } else {
    const finish = new Date(finishDate).toLocaleString();
    return (
      <>
        <div>
          <p>
            {text} (zrobić do {date}) - potwierdzenie wykonania {finish}
            <button onClick={() => props.deleteTask(id)}>Usuń</button>
          </p>
        </div>
      </>
    );
  }
};

export default Task;
