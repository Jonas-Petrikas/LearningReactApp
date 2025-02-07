import logo from './logo.svg';
import './App.css';
import './buttons.css';
import './list.css';
import List from './Components/List';
import Input from './Components/Input';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className='button-53'>Spausk mygtuką, nieko nebus</button>
        <List />

        <Input />
      </header>
    </div>
  );
}


export default App;
