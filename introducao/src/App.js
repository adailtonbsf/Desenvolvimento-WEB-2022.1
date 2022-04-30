import './App.css';

// import HelloWorld from './components/HelloWord';
// import MeusDados from './components/MeusDados';
// import MeusDadosProps from './components/MeusDadosProps';
import Casa from './components/got/Casa';
import Personagem from './components/got/Personagem';

// function App() {
//   return (
//     <div className='App'>
//       {/* <HelloWorld /> */}
//       {/* <MeusDados /> */}
//       <MeusDadosProps nome='Adailton Bezerra' curso='Ciência da Computação' universidade='UFC - Quixadá'/>
//     </div>
//   );
// }

function App() {
  return (
    <div className='App'>
      <Casa titulo='Stark'>
        <Personagem nome='Arya'/>
        <Personagem nome='Robert'/>
        <Personagem nome='Sansa'/>
        <Personagem nome='John'/>
        <Personagem nome='Ned'/>
      </Casa>
    </div>
  );
}

export default App;