import "./App.css";
import { useState, useEffect } from "react";
// import TodoInput from "./components/TodoInput";
import TodoFilter from "./components/TodoFilter";
import TodoList from "./components/TodoList";
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, uploadTodo } from './store/todoSlice'

export const App = () => {
  const [todo, setTodo] = useState('')
  const todos = useSelector((state) => state.todos)
  const filter = useSelector((state) => state.filter)
  const dispatch = useDispatch()
  console.log('App todos: ', todos)
  console.log('App filter: ', filter)

  const sendTodo = () => {
    todo && 
      dispatch (addTodo(todo))
      setTodo('')       
  }

  useEffect(() => {
    dispatch (uploadTodo())
  }, [])

   return (
    <div className="App">
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick = {sendTodo} >Добавить</button>

      <TodoFilter />

      {/* <p>Показать элементы:</p>
  <div>
    <input type="radio" id="contactChoice1" name="contact" value="Все" 
    onChange={() => dispatch(toogleFilterAll())}
    />
    <label for="contactChoice1">Все</label>

    <input type="radio" id="contactChoice2" name="contact" value="Выполненные"
        onChange={() => dispatch(toogleFilterComplete())}
    />
    <label for="contactChoice2">Выполненные</label>

    <input type="radio" id="contactChoice3" name="contact" value="Невыполненные"
    onChange={() => dispatch(toogleFilterNonComplete())}
    />
    <label for="contactChoice3">Невыполненные</label>
  </div> */}
      {/* <TodoInput todo = {todo} setTodo = {setTodo} addTodo = {addTodo} /> */}
      <TodoList />
      {/* <ul>
        {todos.map((item) => (
          <li key={item.id}>
            <span>{item.name}</span>
            <span className="imgDelete" onClick={() => removeTodo(item.id)}>
              &times;
            </span>
            <input
              type="checkbox"
              checked={item.completed}
              onChange={() => toogleCompleted(item.id)}
            />
          </li>
        ))}
      </ul> */}
    </div>
  );
}
  