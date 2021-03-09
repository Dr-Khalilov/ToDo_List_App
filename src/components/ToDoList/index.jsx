import React from 'react';
import styles from './ToDoList.module.scss';

const ToDoList = props => {
  const { todoArray } = props;
  return (
    <ul className={styles.container}>
      {todoArray.map(item => {
        return <li key={item.id}>{item.body}</li>
      })}
    </ul>
  )
}

export default ToDoList;
