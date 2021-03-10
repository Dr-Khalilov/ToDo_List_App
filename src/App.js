import React, { useState } from 'react';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';
import ToDoList from './components/ToDoList';

function App (props) {
  const [todoArray, setTodoArray] = useState([
    {
      id: Date.now(),
      body: '',
      isDone: false,
      createdAt: new Date(),
    },
  ]);

  return (
    <>
      <Header />
      <ToDoForm
        onSubmit={values => {
          const newTodo = {
            body: values.todoBody,
            id: Date.now(),
            isDone: false,
          };
          setTodoArray([...todoArray, newTodo]);
        }}
      />
      <ToDoList todoArray={todoArray} />
    </>
  );
}

export default App;
