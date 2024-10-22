'use client';
import { useAppDispatch, useAppSelector } from "@/lib/hooks";
import { edit, selectToDos } from "@/lib/features/todos/todosSlice";
import { Card } from "@/components/atoms/Card/Card";
import styles from './ToDoList.module.css'

export const TodoList = () => {
  const toDos = useAppSelector(selectToDos);
  const dispatch = useAppDispatch();


  return (
    <div>
      <ul>
        {toDos.map((toDo) => (
          <Card key={toDo.id}>
            <div className={styles.row}>
              <input onChange={
                () => {
                  dispatch(edit({
                    ...toDo,
                    completed: !toDo.completed,
                  }));
                }
              } className={styles.checkbox} type="checkbox" id="scales" name="scales" checked={toDo.completed} />
              {toDo.text}
            </div>
          </Card>
        ))}
      </ul>
    </div>
  );
}

