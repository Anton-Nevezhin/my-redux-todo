import { useSelector } from 'react-redux'
import TodoItem from "./TodoItem";

const TodoList = () => {

  const todos = useSelector (state => state.todos.todos)
  const filter = useSelector (state => state.filter.filter)
  console.log('list: ', todos)

  return (
    <>
    {/* {todos.map(item => item)} */}
    <ul>
      {todos.map((item) => ((filter === 'Невыполненные' && !item.complete &&
        <TodoItem item = {item} /> ) ||
        (filter === 'Выполненные' && item.complete &&
        <TodoItem item = {item} /> ) ||
        (filter === 'Все' &&
        <TodoItem item = {item} /> )
        // <li key={item.id}>
        //   <span>{item.name}</span>
        //   <span className="imgDelete" onClick={() => removeTodo(item.id)}>
        //     &times;
        //   </span>
        //   <input
        //     type="checkbox"
        //     checked={item.completed}
        //     onChange={() => toogleCompleted(item.id)}
        //   />
        // </li>
      ))}
    </ul>
    </>
  );
};

export default TodoList;
