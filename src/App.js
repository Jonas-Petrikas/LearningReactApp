import logo from './logo.svg';
import './App.css';
import './buttons.css';
import './list.scss';
import List from './Components/List';
import Input from './Components/Input';
import Edit from './Components/Edit';
import { useState } from 'react';

function App() {

  const [note, setNote] = useState('');
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")) || []);
  const [show, setShow] = useState('none');


  return (
    <div className="App">
      <header className="App-header">
        <List notes={notes} setNotes={setNotes} show={show} setShow={setShow} />
        <Input note={note} setNote={setNote} notes={notes} setNotes={setNotes} />
        <Edit show={show} setShow={setShow} notes={notes} setNotes={setNotes} />
      </header>
    </div>
  );
}


export default App;
