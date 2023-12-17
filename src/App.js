import './App.css';
import headerImg from './assets/1.jpg';
import bannerImg from './assets/2.jpg';
import addressImg from './assets/3.jpg';
function App() {
  return (
    <div className="App">
      <img src={headerImg} alt='header' />
      <img src={bannerImg} alt='banner' />
      <img src={addressImg} alt='address' />
    </div>
  );
}

export default App;
