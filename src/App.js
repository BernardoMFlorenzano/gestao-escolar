import React from 'react';
import AlunoList from './components/AlunoList';
import DisciplinaList from './components/DisciplinaList';
import TurmaList from './components/TurmaList';
import MatriculaList from './components/MatriculaList';
import ProfessorList from './components/ProfessorList';
import './App.css';

function App() {
  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestão Escolar</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Manter Alunos</h2>
        <AlunoList />
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Manter Disciplinas</h2>
        <DisciplinaList />
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Manter Turmas</h2>
        <TurmaList />
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Manter Matrículas</h2>
        <MatriculaList />
      </div>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Manter Professores</h2>
        <ProfessorList />
      </div>
    </div>
  );
}

export default App;
