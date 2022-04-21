import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
// import World from './components/atividade_1/World';
// import Arena from './components/atividade_1/Arena'
// import Hero from './components/atividade_1/Hero'
// import Enemy from './components/atividade_1/Enemy'
// import Casa from './components/got/Casa';
// import Personagem from './components/got/Personagem';
// import HelloWorld from './components/HelloWord';
// import MeusDados from './components/MeusDados';
// import MeusDadosProps from './components/MeusDadosProps';
import Home from './components/atividade_2/crud/Home';
import About from './components/atividade_2/crud/About';
import CreateStudent from './components/atividade_2/crud/student/CreateStudent';
import EditStudent from './components/atividade_2/crud/student/EditStudent';
import ListStudent from './components/atividade_2/crud/student/ListStudent';
import CreateProfessor from './components/atividade_2/crud/professor/CreateProfessor';
import EditProfessor from './components/atividade_2/crud/professor/EditProfessor';
import ListProfessor from './components/atividade_2/crud/professor/ListProfessor';

function App() {
  return (
    <div className="container">
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <Link to={"/"} className="navbar-brand" style={{ paddingLeft: 10 }}>
          CRUD
        </Link>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="navitem">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="navitem">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Estudante
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="navitem">
                  <Link to="/createStudent" className="dropdown-item">
                    Criar Estudante
                  </Link>
                </li>
                <li className="navitem">
                  <Link to="/listStudent" className="dropdown-item">
                    Listar Estudante
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                id="navbarDropdownMenuLink"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Professor
              </a>
              <ul
                className="dropdown-menu"
                aria-labelledby="navbarDropdownMenuLink"
              >
                <li className="navitem">
                  <Link to="/createProfessor" className="dropdown-item">
                    Criar Professor
                  </Link>
                </li>
                <li className="navitem">
                  <Link to="/listProfessor" className="dropdown-item">
                    Listar Professor
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="createStudent" element={<CreateStudent />} />
        <Route path="listStudent" element={<ListStudent />} />
        <Route path="editStudent/:id" element={<EditStudent />} />
        <Route path="createProfessor" element={<CreateProfessor />} />
        <Route path="listProfessor" element={<ListProfessor />} />
        <Route path="editProfessor/:id" element={<EditProfessor />} />
      </Routes>
    </div>
  );
}

// function App() {
//   return (
//     <div className='App'>
//       {/* <HelloWorld /> */}
//       {/* <MeusDados /> */}
//       <MeusDadosProps nome='Adailton Bezerra' curso='Ciência da Computação' universidade='UFC - Quixadá'/>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className='App'>
//       <Casa titulo='Stark'>
//         <Personagem nome='Arya'/>
//         <Personagem nome='Robert'/>
//         <Personagem nome='Sansa'/>
//         <Personagem nome='John'/>
//         <Personagem nome='Ned'/>
//       </Casa>
//     </div>
//   );
// }

// function App() {
//   return (
//     <div className='App'>
//       <World>
//         <h1>~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h1>
//         <Arena arena='Castelão'>
//           <Hero name='Sicrano de Tal 1' />
//           <Enemy name='Fulano de Tal 1' />
//         </Arena>
//         <h1>~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h1>
//         <Arena arena='Morumbi'>
//           <Hero name='Sicrano de Tal 2' />
//           <Enemy name='Fulano de Tal 2' />
//         </Arena>
//         <h1>~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h1>
//         <Arena arena='Camp Nou'>
//           <Hero name='Sicrano de Tal 3' />
//           <Enemy name='Fulano de Tal 3' />
//         </Arena>
//         <h1>~~~~~~~~~~~~~~~~~~~~~~~~~~~~</h1>
//       </World>
//     </div>
//   );
// }

export default App;
