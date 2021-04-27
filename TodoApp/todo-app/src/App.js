import { useState, useEffect } from "react";
import "./App.css";
import { Button, FormControl, Input, InputLabel } from "@material-ui/core";
import Todo from "./Todo";
import db from './firebase';

function App() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState('');
  // when the app loads, we need to listen to the database and fetch the new todos as they get added/removed.
  
  useEffect(()=> {
    // this code here... fires when the app.js loads.
    db.collection('todos').onSnapshot(snapshot =>{
      // console.log(snapshot.docs.map(doc=> doc.data().todo))
      setTodos(snapshot.docs.map(doc=> doc.data().todo))
    })
  },[]);
  

  const addTodo = (e) => {
    e.preventDefault();
    // setTodos([...todos, input]);
    db.collection('todos').add({
      todo: input
    })
    setInput("");
  };
  return (
    <div className='App'>
      <h2>Todo App</h2>
      <FormControl>
        <InputLabel >Write a Todo</InputLabel>
        <Input value={input} onChange={(e) => setInput(e.target.value)}></Input>
      </FormControl>
      <Button
       disabled={!input}
        type='submit'
        onClick={addTodo}
        variant='contained'
        color='primary'
      >
        Add Todo
      </Button>

      <ul>
        {todos.map((todo) => {
          return(
            <Todo text={todo}></Todo>
          )
          
        })}
      </ul>
    </div>
  );
}

export default App;
