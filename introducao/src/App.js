import './App.css';
// import HelloWorld from './components/HelloWord';
// import MeusDados from './components/MeusDados';
import MeusDadosProps from './components/MeusDadosProps';

function App() {
  return (
    <div className="App">
      {/* <HelloWorld /> */}
      {/* <MeusDados /> */}
      <MeusDadosProps nome="Adailton Bezerra" curso="Ciência da Computação" universidade="UFC - Quixadá"/>
    </div>
  );
}

export default App;
