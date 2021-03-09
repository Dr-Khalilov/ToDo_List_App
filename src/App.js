import React, { useState } from 'react';
import Header from './components/Header';
import ToDoForm from './components/ToDoForm';

function App () {
  const [todoArray, setTodoArray] = useState([
    {
      id: Date.now(),
      body: '',
      isDone: false,
      createdAt: new Date(),
    },
  ]);

  return (
    <div>
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
    </div>
  );
}

export default App;
