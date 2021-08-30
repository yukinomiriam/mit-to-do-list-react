function TodoItem({todo,index,remove}){
    function handle (){
        remove(index);
    }
    return <div className="todo" key={index} id={index} > 
    <img src="img/next.png"/>
    {todo.text} 
        <img src="img/delete.png" onClick={handle} className="cursor-pointer"/>
    </div>;
}