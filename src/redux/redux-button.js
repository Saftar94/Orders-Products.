import React from "react";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { removeTask } from "./actions";

export const TodoList = () => {
  const updatedItems = useSelector((state) => state.updatedItems);
  const dispatch = useDispatch();

  const handleRemoveTodo = (id) => {
    dispatch(removeTask(id));
  };
  return (
    <div>
      {updatedItems.map((todo) => (
        <div key={todo.id}>
          <span>{todo.text}</span>
          <button onClick={() => handleRemoveTodo(todo.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

const mapDispatchToProps = {
  removeTask,
};

export default connect(mapStateToProps, mapDispatchToProps);
