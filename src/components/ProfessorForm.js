import React, { useState } from 'react';

const ProfessorForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || {
      nome: '',
      cpf: '',
      disciplina: '',
      dataAdmissao: '',
    }
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
        <label className="text-left block w-full">Nome:</label>
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
        <label className="text-left block w-full">CPF:</label>
        <input
          type="text"
          name="cpf"
          value={formData.cpf}
          onChange={handleChange}
          required
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label className="text-left block w-full">Disciplina:</label>
        <input
          type="text"
          name="disciplina"
          value={formData.disciplina}
          onChange={handleChange}
          required
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label className="text-left block w-full">Data de Admissão:</label>
        <input
          type="date"
          name="dataAdmissao"
          value={formData.dataAdmissao}
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

export default ProfessorForm;
