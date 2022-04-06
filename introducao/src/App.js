import './App.css';
import World from './components/atividade_2/World';
import Arena from './components/atividade_2'
import Hero from './components/atividade_2'
import Enemy from './components/atividade_2'
// import Casa from './components/got/Casa';
// import Personagem from './components/got/Personagem';
// import HelloWorld from './components/HelloWord';
// import MeusDados from './components/MeusDados';
// import MeusDadosProps from './components/MeusDadosProps';

// function App() {
//   return (
//     <div className="App">
//       {/* <HelloWorld /> */}
//       {/* <MeusDados /> */}
//       <MeusDadosProps nome="Adailton Bezerra" curso="Ciência da Computação" universidade="UFC - Quixadá"/>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className="App">
//       <Casa titulo="Stark">
//         <Personagem nome="Arya"/>
//         <Personagem nome="Robert"/>
//         <Personagem nome="Sansa"/>
//         <Personagem nome="John"/>
//         <Personagem nome="Ned"/>
//       </Casa>
//     </div>
//   );
// }

function App() {
  return (
    <div className="App">
      <World>
        <h1>~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h1>
        <Arena arena="Castelão">
          <Hero name="Sicrano de Tal 1" />
          <Enemy name="Fulano de Tal 1" />
        </Arena>
        <h1>~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h1>
        <Arena arena="Morumbi">
          <Hero name="Sicrano de Tal 2" />
          <Enemy name="Fulano de Tal 2" />
        </Arena>
        <h1>~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h1>
        <Arena arena="Camp Nou">
          <Hero name="Sicrano de Tal 3" />
          <Enemy name="Fulano de Tal 3" />
        </Arena>
        <h1>~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h1>
      </World>
    </div>
  );
}


export default App;
