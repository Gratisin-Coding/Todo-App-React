import { FC } from 'react'

type TodoItemProps = {
  todo: string
  onDelete: VoidFunction
}

const TodoItem: FC<TodoItemProps> = ({ todo, onDelete }) => {
  return (
    <li>
      <span>{todo}</span>
      <button onClick={onDelete}>Delete Todo</button>
    </li>
  )
}

export default TodoItem
