import './App.css';
import Social from './components/Social/Social';
import Header from './components/Header/Header';

function App() {
  return (
    <div className="App">
      <div className='left_container'>
        <Social />
        <Header />
      </div>
    </div>
  );
}

export default App;
