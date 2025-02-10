import logo from './logo.svg';
import './App.css';
import './buttons.css';
import './list.css';
import List from './Components/List';
import Input from './Components/Input';
import { useState } from 'react';

function App() {

  const [note, setNote] = useState('');
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);

  return (
    <div className="App">
      <header className="App-header">
        <button className='button-53'>Spausk mygtuką, nieko nebus</button>
        <List notes={notes} setNotes={setNotes} />
        <Input note={note} setNote={setNote} notes={notes} setNotes={setNotes} />
      </header>
    </div>
  );
}


export default App;
