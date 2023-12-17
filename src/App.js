import logo from './logo.svg';
import './App.css';
import mehndi from './mehndi.png'
import waleema from './waleema.jpeg'

function App() {
  return (
    <div className="App">
      <div>
        <h1>Wellcome</h1>
      </div>
        <img src={mehndi} className="" alt="logo" />
        {/* <img src={waleema} className="" alt="logo" /> */}
    </div>
  );
}

export default App;
