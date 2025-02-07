import logo from './logo.svg';
import './App.css';
import './buttons.css';
import './list.css';
import List from './Components/List';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <button className='button-53'>Spausk mygtuką, nieko nebus</button>
        <List />

      </header>
    </div>
  );
}


export default App;
