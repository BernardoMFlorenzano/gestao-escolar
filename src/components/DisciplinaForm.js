import React, { useState } from 'react';

const DisciplinaForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || { nome: '', codigo: '', professor: '' }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label classname="text-left block w-full">Nome:</label>
        <input
          type="text"
          name="nome"
          value={formData.nome}
          onChange={handleChange}
          required
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label classname="text-left block w-full">Código:</label>
        <input
          type="text"
          name="codigo"
          value={formData.codigo}
          onChange={handleChange}
          required
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label classname="text-left block w-full">Professor:</label>
        <input
          type="text"
          name="professor"
          value={formData.professor}
          onChange={handleChange}
          required
          className="border rounded p-2 w-full"
        />
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
      >
        Salvar
      </button>
    </form>
  );
};

export default DisciplinaForm;
