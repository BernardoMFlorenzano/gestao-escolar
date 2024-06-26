import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import AlunoList from './components/AlunoList';
import DisciplinaList from './components/DisciplinaList';
import TurmaList from './components/TurmaList';
import MatriculaList from './components/MatriculaList';
import ProfessorList from './components/ProfessorList';
import './App.css';

const DropdownMenu = ({ title, items }) => {
  return (
    <div className="dropdown inline-block relative">
      <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded inline-flex items-center">
        <span className="mr-1">{title}</span>
      </button>
      <ul className="dropdown-menu absolute hidden text-gray-700 pt-1">
        {items.map((item) => (
          <li className="" key={item.name}>
            <Link
              to={item.path}
              className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

function App() {
  const gestaoAcademica = [
    { name: 'Disciplinas', path: '/disciplinas' },
    { name: 'Turmas', path: '/turmas' },
    { name: 'Matrículas', path: '/matriculas' },
  ];

  const gestaoPessoas = [
    { name: 'Alunos', path: '/alunos' },
    { name: 'Professores', path: '/professores' },
  ];

  return (
    <Router>
      <div className="App container mx-auto p-4">
        <h1 className="text-4xl text-center font-bold mb-4">Gestão Escolar</h1>
        <div className="flex gap-3 items-center justify-center">
          <DropdownMenu title="Gestão Acadêmica" items={gestaoAcademica} />

          <DropdownMenu title="Gestão de Pessoas" items={gestaoPessoas} />
        </div>

        <Routes>
          <Route path="/alunos" element={<AlunoList />} />
          <Route path="/disciplinas" element={<DisciplinaList />} />
          <Route path="/turmas" element={<TurmaList />} />
          <Route path="/matriculas" element={<MatriculaList />} />
          <Route path="/professores" element={<ProfessorList />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
