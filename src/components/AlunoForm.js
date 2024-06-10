import React, { useState } from 'react';

const AlunoForm = ({ onSubmit, initialData }) => {
  const [formData, setFormData] = useState(initialData || { nome: '', cpf: '', dataNascimento: '', responsavel: '', matricula: '' });

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
      <label>CPF: <input type="text" name="cpf" value={formData.cpf} onChange={handleChange} required /></label>
      <label>Data de Nascimento: <input type="date" name="dataNascimento" value={formData.dataNascimento} onChange={handleChange} required /></label>
      <label>Responsável: <input type="text" name="responsavel" value={formData.responsavel} onChange={handleChange} required /></label>
      <label>Matrícula: <input type="text" name="matricula" value={formData.matricula} onChange={handleChange} required /></label>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default AlunoForm;
