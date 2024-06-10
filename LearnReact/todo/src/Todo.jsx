import { useState } from "react";
import "./App.css";
import { InputTodo } from "./components/InputTodo";
import { IncompleteTodo } from "./components/IncompleteTodo";
import { CompleteTodo } from "./components/CompleteTodo";

export const App = () => {
  const [todoText, setTodoText] = useState([]);
  const [incompleteTodos, setIncompleteTodos] = useState([]);
  const [completeTodos, setCompleteTodos] = useState([]);

  // react フック　フォームを使った方が楽
  const onChangeTodoText = (event) => setTodoText(event.target.value);

  const onClickAdd = () => {
    if (todoText === "") return;

    const newTodos = [...incompleteTodos, todoText];
    setIncompleteTodos(newTodos);
    setTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompleteTodos];
    newTodos.splice(index, 1);
    setIncompleteTodos(newTodos);
  };

  const onClickComplete = (index) => {
    const newIncompleteTodos = [...incompleteTodos];

    const completedTodo = newIncompleteTodos.splice(index, 1)[0];
    const newCompleteTodos = [...completeTodos, completedTodo];

    setIncompleteTodos(newIncompleteTodos);
    setCompleteTodos(newCompleteTodos);
  };

  const onClickBack = (index) => {
    const newCompleteTodos = [...completeTodos];
    const IncompleteTodo = newCompleteTodos.splice(index)[0];
    const newIncompleteTodos = [...incompleteTodos, IncompleteTodo];

    setCompleteTodos(newCompleteTodos);
    setIncompleteTodos(newIncompleteTodos);
  };

  const isMaxLimitIncompleteTodos = incompleteTodos.length > 5

  return (
    <>
      <InputTodo 
        todoText={todoText} 
        onChange={onChangeTodoText} 
        onClick={onClickAdd} 
        disabled = {isMaxLimitIncompleteTodos}
      />

      {isMaxLimitIncompleteTodos && (
        <p>Finish Your task</p>
      )}

      <IncompleteTodo
        todos={incompleteTodos}
        onComplete={onClickComplete}
        onDelete={onClickDelete}
      />

      
      <CompleteTodo
        todos={completeTodos}
        onBack={onClickBack}
      />

    </>
  );
};
