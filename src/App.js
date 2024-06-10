import React from 'react';
import AlunoList from './components/AlunoList';
import DisciplinaList from './components/DisciplinaList';

function App() {
  return (
    <div className="App">
      <h1>Gestão Escolar</h1>
      <h2>Manter Alunos</h2>
      <AlunoList />
      <h2>Manter Disciplinas</h2>
      <DisciplinaList />
    </div>
  );
}

export default App;
