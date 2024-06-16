import React, { useState } from 'react';

const MatriculaForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(
    initialData || {
      aluno: '',
      anoLetivo: '',
      turma: '',
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
        <label className="text-left block w-full">Aluno:</label>
        <input
          type="text"
          name="aluno"
          value={formData.aluno}
          onChange={handleChange}
          required
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label className="text-left block w-full">Ano Letivo:</label>
        <input
          type="text"
          name="anoLetivo"
          value={formData.anoLetivo}
          onChange={handleChange}
          required
          className="border rounded p-2 w-full"
        />
      </div>
      <div>
        <label className="text-left block w-full">Turma:</label>
        <input
          type="text"
          name="turma"
          value={formData.turma}
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

export default MatriculaForm;
