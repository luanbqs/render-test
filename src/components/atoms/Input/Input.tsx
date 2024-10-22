'use client';

import { useState } from 'react';
import styles from './Input.module.css'
import { useAppDispatch } from '@/lib/hooks';
import { add } from '@/lib/features/todos/todosSlice';

export const Input = () => {
  const [toDoText, setToDoText] = useState('');
  const dispatch = useAppDispatch();


  return (
    <div className={styles.row}>
      <input
        className={styles.textbox}
        aria-label="Set increment amount"
        value={toDoText}
        onChange={(e) => {
          setToDoText(e.target.value);
        }}
      />
      <button
        className={styles.button}
        aria-label="Increment value"
        onClick={() => {
          dispatch(add(toDoText));
        }}
      >
        +
      </button>
    </div>
  )
}