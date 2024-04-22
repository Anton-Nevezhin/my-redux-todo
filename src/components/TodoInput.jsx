const TodoInput = ( { todo, setTodo, addTodo } ) => {
  return (
    <>
      <input value={todo} onChange={(e) => setTodo(e.target.value)} />
      <button onClick={() => addTodo(todo)}>Добавить</button>
    </>
  );
};

export default TodoInput;
