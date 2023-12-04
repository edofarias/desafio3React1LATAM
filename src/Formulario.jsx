import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Formulario = ({ handleAddColaborador, setAlertMessage }) => {
  const [formData, setFormData] = useState({
    id: '',
    nombre: '',
    correo: '',
    edad: '',
    cargo: '',
    telefono: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Check si hay vacios
    if (Object.values(formData).some((value) => value === '')) {
      setAlertMessage({ type: 'danger', message: 'Todos los campos son obligatorios' });
      return;
    }

    // si no doy id se genera solo
    const newColaborador = { ...formData, id: formData.id || uuidv4() };

    // llama los componenetes padres de la funcion para agregar nuevo collaborador
    handleAddColaborador(newColaborador);

    // muestra mensaje de exito
    setAlertMessage({ type: 'success', message: 'Colaborador agregado exitosamente' });

    // limpia los campos del form
    setFormData({
      id: '', // Keep 'id' empty for automatic generation
      nombre: '',
      correo: '',
      edad: '',
      cargo: '',
      telefono: '',
    });
  };

  return (
    <div>
      <h2>Agregar Colaborador</h2>
      <form onSubmit={handleSubmit}>
        {/* Input fields for each collaborator attribute */}
        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            ID:
          </label>
          <input
            type="text"
            className="form-control"
            id="id"
            name="id"
            value={formData.id}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre:
          </label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">
            Correo:
          </label>
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label">
            Edad:
          </label>
          <input
            type="text"
            className="form-control"
            id="edad"
            name="edad"
            value={formData.edad}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cargo" className="form-label">
            Cargo:
          </label>
          <input
            type="text"
            className="form-control"
            id="cargo"
            name="cargo"
            value={formData.cargo}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">
            Teléfono:
          </label>
          <input
            type="text"
            className="form-control"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Agregar Colaborador
        </button>
      </form>
    </div>
  );
};

export default Formulario;
