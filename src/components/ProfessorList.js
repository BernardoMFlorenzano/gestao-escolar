import React, { useState } from 'react';
import ProfessorForm from './ProfessorForm';
import Modal from './Modal';

const ProfessorList = () => {
  const [professores, setProfessores] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = (professor) => {
    setProfessores([...professores, professor]);
    setIsModalOpen(false);
  };

  const handleEdit = (index, updatedProfessor) => {
    const newProfessores = [...professores];
    newProfessores[index] = updatedProfessor;
    setProfessores(newProfessores);
    setEditingIndex(null);
    setIsModalOpen(false);
  };

  const handleDelete = (index) => {
    setProfessores(professores.filter((_, i) => i !== index));
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
        Adicionar Professor
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ProfessorForm
          onSubmit={
            editingIndex !== null
              ? (data) => handleEdit(editingIndex, data)
              : handleAdd
          }
          initialData={editingIndex !== null ? professores[editingIndex] : null}
        />
      </Modal>
      <ul className="space-y-2 mt-4">
        {professores.map((professor, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 bg-gray-100 rounded"
          >
            <span>
              {professor.nome} - {professor.cpf}
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

export default ProfessorList;
