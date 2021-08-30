function App(){
  const [todos, setTodos] = React.useState([
    {
      text: 'Learn react',
      isCompleted: false,
    },
    {
      text: 'Meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'Build todo app',
      isCompleted: false,
    }        
  ])
  const addItem = text => {
    const newToDoList =[...todos,{text:text, isCompleted:false}];  
    setTodos(newToDoList);
  }
  const removeItem = index =>{
    let temp =[...todos];
    temp.splice(index,1); //remove that 1 item by the index
    setTodos(temp);

  }
  return(
    <>
      {todos.map((todo, i) => 
      <TodoItem key={i} index={i} todo={todo} remove={removeItem} />
      )}
      <TodoForm addItem={addItem}/> 
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
