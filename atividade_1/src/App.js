import './App.css';

import World from './components/World';
import Arena from './components/Arena'
import Hero from './components/Hero'
import Enemy from './components/Enemy'

function App() {
  return (
    <div className='App'>
      <World>
        <h1>~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h1>
        <Arena arena='Castelão'>
          <Hero name='Sicrano de Tal 1' />
          <Enemy name='Fulano de Tal 1' />
        </Arena>
        <h1>~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h1>
        <Arena arena='Morumbi'>
          <Hero name='Sicrano de Tal 2' />
          <Enemy name='Fulano de Tal 2' />
        </Arena>
        <h1>~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h1>
        <Arena arena='Camp Nou'>
          <Hero name='Sicrano de Tal 3' />
          <Enemy name='Fulano de Tal 3' />
        </Arena>
        <h1>~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h1>
      </World>
    </div>
  );
}

export default App;
