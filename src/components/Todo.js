import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo } from "../todoSlice";

import { AiFillDelete } from "react-icons/ai";
import { BsFillPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import TodoForm from "../pages/TodoForm";

const Todo = ({ todo }) => {
  const dispatch = useDispatch();
  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <>
      <div className="todo__items">
        <div className="todo__item">
          <p className="item">{todo.value}</p>
          <div className="icon">
            <Link to={<TodoForm />}>
              <BsFillPencilFill color="#5E90F2" fontSize="1.5rem" />
            </Link>
            <AiFillDelete
              color="#FE0C0C"
              fontSize="1.5rem"
              onClick={handleDelete}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
