import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Hello Cloudfare!
        </h1>
        <a href="/about">About</a>
      </header>
    </div>
  );
}

export default App;
