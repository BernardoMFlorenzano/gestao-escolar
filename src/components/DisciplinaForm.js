import React, { useState } from 'react';

const DisciplinaForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || { nome: '', codigo: '', professor: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Nome: <input type="text" name="nome" value={formData.nome} onChange={handleChange} required /></label>
      <label>Código: <input type="text" name="codigo" value={formData.codigo} onChange={handleChange} required /></label>
      <label>Professor: <input type="text" name="professor" value={formData.professor} onChange={handleChange} required /></label>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default DisciplinaForm;
