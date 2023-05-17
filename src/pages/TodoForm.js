import React, { useState } from "react";
import { useDispatch} from "react-redux";
import { addTodo, updateTodo } from "../todoSlice";
import { Link } from "react-router-dom";

const TodoForm = ({ todoId }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { id: Date.now(), value };
    dispatch(
      addTodo({
        id: Date.now(),
        value,
      })
    );
    setValue("");

    if (todoId) {
      const updatedTodo = { id: todoId, value };
      dispatch(updateTodo(updatedTodo));
    } else {
      dispatch(addTodo(newTodo));
    }

    setValue("");
  };

  const buttonText = todoId ? "Update Todo" : "Add Todo";

  return (
    <>
      <section className="todoForm__section">
        <form className="todoForm" onSubmit={handleSubmit}>
          <label for="toDo">What do you want to do today?</label>
          <input
            type="text"
            id="toDo"
            name="toDo"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
          <Link to="/"><button className="submitButton" type="submit">
            {buttonText}
          </button></Link>
          
        </form>
      </section>
    </>
  );
};

export default TodoForm;
