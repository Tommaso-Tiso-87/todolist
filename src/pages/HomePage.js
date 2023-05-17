import { useSelector, useDispatch } from "react-redux";
import Todo from "../components/Todo";
import { deleteAllTodos } from "../todoSlice";
import { Link } from "react-router-dom";
import TodoForm from "./TodoForm";


const HomePage = () => {
  const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos);
    
    const handleDeleteAll = () => {
      dispatch(deleteAllTodos());
    };


    



  return (
    <div className="homePage">
      <h1>To Do List</h1>
      <section className="homePage__todo-section">
        
        {todos?.map((todo) => (
          <Todo key={todo.id} todo={todo} />
        ))}
      </section>
      <div className="homePage__todo-section-buttons">
        <button className="eraseAll" onClick={handleDeleteAll}>
          Erase All
        </button>
        {/* <Link to={<TodoForm />}>
          <button className="addItem">Add ToDo</button>
        </Link> */}
      </div>
    </div>
  );
};

export default HomePage;
