import React, { useState } from 'react';

const Buscador = ({ handleSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchTerm);
  };

  return (
    <div>
      <h2>Buscar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="searchTerm"
          placeholder="Buscar colaborador"
          value={searchTerm}
          onChange={handleChange}
        />
        <button type="submit" className="btn btn-secondary">
          Buscar
        </button>
      </form>
    </div>
  );
};

export default Buscador;
