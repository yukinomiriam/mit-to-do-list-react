function TodoForm({addItem}){ // too pass the function, dont forget the curly braces
    const [value, setValue] = React.useState('');

//this function is triggered when pressing enter button
  const handleSubmit = e =>{
    e.preventDefault(); //prevents page reload
    if(!value) return;
    addItem(value);
    setValue('');
  }

    return (
        <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            className="input"
            value={value}
            placeholder="Add ToDo ..."
            onChange={e => setValue(e.target.value)}
        />
        
      </form>
    );
}