import React, { useState } from 'react';
import AlunoForm from './AlunoForm';

const AlunoList = () => {
  const [alunos, setAlunos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);

  const handleAdd = (aluno) => {
    setAlunos([...alunos, aluno]);
  };

  const handleEdit = (index, updatedAluno) => {
    const newAlunos = [...alunos];
    newAlunos[index] = updatedAluno;
    setAlunos(newAlunos);
    setEditingIndex(null);
  };

  const handleDelete = (index) => {
    setAlunos(alunos.filter((_, i) => i !== index));
  };

  return (
    <div>
      <AlunoForm onSubmit={editingIndex !== null ? (data) => handleEdit(editingIndex, data) : handleAdd} initialData={editingIndex !== null ? alunos[editingIndex] : null} />
      <ul>
        {alunos.map((aluno, index) => (
          <li key={index}>
            {aluno.nome} - {aluno.cpf}
            <button onClick={() => setEditingIndex(index)}>Editar</button>
            <button onClick={() => handleDelete(index)}>Remover</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlunoList;
