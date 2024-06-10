import React, { useState } from 'react';
import AlunoForm from './AlunoForm';
import Modal from './Modal';

const AlunoList = () => {
  const [alunos, setAlunos] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = (aluno) => {
    setAlunos([...alunos, aluno]);
    setIsModalOpen(false);
  };

  const handleEdit = (index, updatedAluno) => {
    const newAlunos = [...alunos];
    newAlunos[index] = updatedAluno;
    setAlunos(newAlunos);
    setEditingIndex(null);
    setIsModalOpen(false);
  };

  const handleDelete = (index) => {
    setAlunos(alunos.filter((_, i) => i !== index));
  };

  const handleOpenModal = () => {
    setEditingIndex(null);
    setIsModalOpen(true);
  };

  return (
    <div>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Adicionar Aluno
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <AlunoForm
          onSubmit={
            editingIndex !== null
              ? (data) => handleEdit(editingIndex, data)
              : handleAdd
          }
          initialData={editingIndex !== null ? alunos[editingIndex] : null}
        />
      </Modal>
      <ul className="space-y-2 mt-4">
        {alunos.map((aluno, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 bg-gray-100 rounded"
          >
            <span>
              {aluno.nome} - {aluno.cpf}
            </span>
            <div>
              <button
                onClick={() => {
                  setEditingIndex(index);
                  setIsModalOpen(true);
                }}
                className="bg-yellow-500 text-white py-1 px-3 rounded hover:bg-yellow-700 mr-2"
              >
                Editar
              </button>
              <button
                onClick={() => handleDelete(index)}
                className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-700"
              >
                Remover
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AlunoList;
