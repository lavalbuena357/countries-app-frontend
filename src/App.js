import './App.css';
import { Route } from 'react-router-dom';
import Social from './components/Social/Social';
import Header from './components/Header/Header';
import Filters from './components/Filters/Filters';
import Main from './components/Main/Main';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {
  return (
    <div className="App">
      <div className='left_container'>
        <Route path='/' component={Social} />
        <Route path='/' component={Header} />
      </div>
      <div className='right_container'>
        <Route exact path='/' component={Filters} />
        <Route exact path='/' component={Main} />
        <Route path='/detail/:id' component={CountryDetail} />
      </div>
    </div>
  );
}

export default App;
