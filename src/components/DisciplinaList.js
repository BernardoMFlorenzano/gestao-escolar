import React, { useState } from 'react';
import DisciplinaForm from './DisciplinaForm';

const DisciplinaList = () => {
  const [disciplinas, setDisciplinas] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAdd = (disciplina) => {
    setDisciplinas([...disciplinas, disciplina]);
  };

  const handleEdit = (index, updatedDisciplina) => {
    const newDisciplinas = [...disciplinas];
    newDisciplinas[index] = updatedDisciplina;
    setDisciplinas(newDisciplinas);
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    setDisciplinas(disciplinas.filter((_, i) => i !== index));
  };

  return (
    <div>
      <DisciplinaForm onSubmit={editingIndex !== null ? (data) => handleEdit(editingIndex, data) : handleAdd} initialData={editingIndex !== null ? disciplinas[editingIndex] : null} />
      <ul>
        {disciplinas.map((disciplina, index) => (
          <li key={index}>
            {disciplina.nome} - {disciplina.codigo}
            <button onClick={() => setEditingIndex(index)}>Editar</button>
            <button onClick={() => handleDelete(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DisciplinaList;
