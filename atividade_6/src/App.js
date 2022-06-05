import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home'
import About from './components/About';
import CreateStudent from './components/student/CreateStudent';
import EditStudent from './components/student/EditStudent';
import ListStudent from './components/student/ListStudent';
import CreateProfessor from './components/professor/CreateProfessor';
import EditProfessor from './components/professor/EditProfessor';
import ListProfessor from './components/professor/ListProfessor';

function App() {
  return (
    <div className='container'>
      <nav className='navbar navbar-expand-sm navbar-light bg-light'>
        <Link to={'/'} className='navbar-brand' style={{ paddingLeft: 10 }}>
          CRUD
        </Link>
        <div className='collapse navbar-collapse' id='navbarSupportedContent'>
          <ul className='navbar-nav mr-auto'>
            <li className='navitem'>
              <Link to='/' className='nav-link'>
                Home
              </Link>
            </li>
            <li className='navitem'>
              <Link to='/about' className='nav-link'>
                About
              </Link>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Estudante
              </a>
              <ul
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li className='navitem'>
                  <Link to='/createStudent' className='dropdown-item'>
                    Criar Estudante
                  </Link>
                </li>
                <li className='navitem'>
                  <Link to='/listStudent' className='dropdown-item'>
                    Listar Estudante
                  </Link>
                </li>
              </ul>
            </li>
            <li className='nav-item dropdown'>
              <a
                className='nav-link dropdown-toggle'
                href='#'
                id='navbarDropdownMenuLink'
                role='button'
                data-bs-toggle='dropdown'
                aria-expanded='false'
              >
                Professor
              </a>
              <ul
                className='dropdown-menu'
                aria-labelledby='navbarDropdownMenuLink'
              >
                <li className='navitem'>
                  <Link to='/createProfessor' className='dropdown-item'>
                    Criar Professor
                  </Link>
                </li>
                <li className='navitem'>
                  <Link to='/listProfessor' className='dropdown-item'>
                    Listar Professor
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='createStudent' element={<CreateStudent />} />
        <Route path='listStudent' element={<ListStudent />} />
        <Route path='editStudent/:id' element={<EditStudent />} />
        <Route path='createProfessor' element={<CreateProfessor />} />
        <Route path='listProfessor' element={<ListProfessor />} />
        <Route path='editProfessor/:id' element={<EditProfessor />} />
      </Routes>
    </div>
  );
}

export default App;