import React, { useState } from 'react';
import TurmaForm from './TurmaForm';
import Modal from './Modal';

const TurmaList = () => {
  const [turmas, setTurmas] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = (turma) => {
    setTurmas([...turmas, turma]);
    setIsModalOpen(false);
  };

  const handleEdit = (index, updatedTurma) => {
    const newTurmas = [...turmas];
    newTurmas[index] = updatedTurma;
    setTurmas(newTurmas);
    setEditingIndex(null);
    setIsModalOpen(false);
  };

  const handleDelete = (index) => {
    setTurmas(turmas.filter((_, i) => i !== index));
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
        Adicionar Turma
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <TurmaForm
          onSubmit={
            editingIndex !== null
              ? (data) => handleEdit(editingIndex, data)
              : handleAdd
          }
          initialData={editingIndex !== null ? turmas[editingIndex] : null}
        />
      </Modal>
      <ul className="space-y-2 mt-4">
        {turmas.map((turma, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 bg-gray-100 rounded"
          >
            <span>
              {turma.nome} - {turma.anoLetivo}
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

export default TurmaList;
