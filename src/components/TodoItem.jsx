import { useDispatch } from 'react-redux'
import { removeTodo, toogleCompleted } from '../store/todoSlice';
import '../App.css'

const TodoItem = ({ item }) => {
  const dispatch = useDispatch()
  
  return (
    <li key={item.id}>
      <span className={item.complete && 'text-close'}>{item.name}</span>
      <span className="imgDelete" onClick={() => dispatch(removeTodo(item.id))}>
        &times;
      </span>
      <input
        type="checkbox"
        checked={item.complete}
        onChange={() => dispatch(toogleCompleted(item.id))}
      />
    </li>
  );
};

export default TodoItem;
