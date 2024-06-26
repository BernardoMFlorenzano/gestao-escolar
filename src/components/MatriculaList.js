import React, { useState } from 'react';
import MatriculaForm from './MatriculaForm';
import Modal from './Modal';

const MatriculaList = () => {
  const [matriculas, setMatriculas] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleAdd = (matricula) => {
    setMatriculas([...matriculas, matricula]);
    setIsModalOpen(false);
  };

  const handleEdit = (index, updatedMatricula) => {
    const newMatriculas = [...matriculas];
    newMatriculas[index] = updatedMatricula;
    setMatriculas(newMatriculas);
    setEditingIndex(null);
    setIsModalOpen(false);
  };

  const handleDelete = (index) => {
    setMatriculas(matriculas.filter((_, i) => i !== index));
  };

  const handleOpenModal = () => {
    setEditingIndex(null);
    setIsModalOpen(true);
  };

  return (
    <div>
      <h2 className="font-bold text-2xl mb-3">Manter Matrícula</h2>
      <button
        onClick={handleOpenModal}
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Adicionar Matrícula
      </button>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <MatriculaForm
          onSubmit={
            editingIndex !== null
              ? (data) => handleEdit(editingIndex, data)
              : handleAdd
          }
          initialData={editingIndex !== null ? matriculas[editingIndex] : null}
        />
      </Modal>
      <ul className="space-y-2 mt-4">
        {matriculas.map((matricula, index) => (
          <li
            key={index}
            className="flex justify-between items-center p-2 bg-gray-100 rounded"
          >
            <span>
              {matricula.aluno} - {matricula.anoLetivo}
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

export default MatriculaList;
