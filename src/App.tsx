import { FormEvent, useState } from 'react'
import TodoItem from './components/TodoItem'

function App() {
  const [todos, setTodos] = useState<string[]>([])

  const [inputValue, setInputValue] = useState('')
  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (todos.indexOf(inputValue) >= 0) return alert('Todo already exist')

    setTodos([...todos, inputValue])
    setInputValue('')
  }

  function deleteFunction(todo: string) {
    setTodos((current) => {
      const deletedItemIndex = current.indexOf(todo)
      const newTodos = [...current]
      newTodos.splice(deletedItemIndex, 1)
      return newTodos
    })
  }

  return (
    <>
      <h1>Todo List</h1>

      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="whatcha gonna do"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />
        <button type="submit">Add Todo</button>
      </form>

      <ol>
        {todos.map((todo) => (
          <TodoItem
            key={todo}
            onDelete={() => deleteFunction(todo)}
            todo={todo}
          />
        ))}
      </ol>
    </>
  )
}

export default App
