import React, { useState } from 'react';
import DisciplinaForm from './DisciplinaForm';
import Modal from './Modal';

const DisciplinaList = () => {
  const [disciplinas, setDisciplinas] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = (disciplina) => {
    setDisciplinas([...disciplinas, disciplina]);
    setIsModalOpen(false);
  };

  const handleEdit = (index, updatedDisciplina) => {
    const newDisciplinas = [...disciplinas];
    newDisciplinas[index] = updatedDisciplina;
    setDisciplinas(newDisciplinas);
    setEditingIndex(null);
    setIsModalOpen(false);
  };

  const handleDelete = (index) => {
    setDisciplinas(disciplinas.filter((_, i) => i !== index));
  };

  const handleOpenModal = () => {
    setEditingIndex(null);
    setIsModalOpen(true);
  };

  return (
    <div>
      <h2 className="font-bold text-2xl mb-3">Manter Disciplina</h2>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Adicionar Disciplina
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <DisciplinaForm
          onSubmit={
            editingIndex !== null
              ? (data) => handleEdit(editingIndex, data)
              : handleAdd
          }
          initialData={editingIndex !== null ? disciplinas[editingIndex] : null}
        />
      </Modal>
      <ul className="space-y-2 mt-4">
        {disciplinas.map((disciplina, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 bg-gray-100 rounded"
          >
            <span>
              {disciplina.nome} - {disciplina.codigo}
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

export default DisciplinaList;
