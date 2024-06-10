import React from 'react';
import AlunoList from './components/AlunoList';
import DisciplinaList from './components/DisciplinaList';
import './App.css';

function App() {
  return (
    <div className="App container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Gestão Escolar</h1>
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Manter Alunos</h2>
        <AlunoList />
      </div>
      <div>
        <h2 className="text-xl font-semibold mb-2">Manter Disciplinas</h2>
        <DisciplinaList />
      </div>
    </div>
  );
}

export default App;
