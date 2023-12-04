import React, { useState } from 'react';
import Listado from './Listado';
import Formulario from './Formulario';
import Buscador from './Buscador';
import Alert from './Alert';
import baseColaboradores from './BaseColaboradores';

function App() {
  const [colaboradores, setColaboradores] = useState(baseColaboradores);
  const [alertMessage, setAlertMessage] = useState(null);

  const handleDelete = (id) => {
    const updatedColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id);
    setColaboradores(updatedColaboradores);
    setAlertMessage({ type: 'success', message: 'Colaborador eliminado exitosamente' });
  };

  const handleAddColaborador = (newColaborador) => {
    setColaboradores((prevColaboradores) => [...prevColaboradores, newColaborador]);
  };

  const handleSearch = (searchTerm) => {
    const filteredColaboradores = baseColaboradores.filter((colaborador) =>
      Object.values(colaborador).some((value) =>
        value.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setColaboradores(filteredColaboradores);
  };

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Listado de Colaboradores</h1>
      {alertMessage && <Alert type={alertMessage.type} message={alertMessage.message} />}
      <Formulario handleAddColaborador={handleAddColaborador} setAlertMessage={setAlertMessage} />
      <Buscador handleSearch={handleSearch} />
      <Listado colaboradores={colaboradores} handleDelete={handleDelete} />
    </div>
  );
}

export default App;
