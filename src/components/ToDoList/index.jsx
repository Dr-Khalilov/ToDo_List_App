import React from 'react';

const ToDoList = props => {
  const { todoArray } = props;
  return (
    <ul>
      {todoArray.map(item => {
        return <li key={item.id}>{JSON.stringfy(item)}</li>;
      })}
    </ul>
  );
};

export default ToDoList;
