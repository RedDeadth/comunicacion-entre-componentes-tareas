import React from 'react';

function Filtros({ filtrarTareas }) {
  return (
    <div className="mb-3">
      <button className="btn btn-outline-primary me-2" onClick={() => filtrarTareas('Todas')}>Todas</button>
      <button className="btn btn-outline-primary me-2" onClick={() => filtrarTareas('Pendientes')}>Pendientes</button>
      <button className="btn btn-outline-primary" onClick={() => filtrarTareas('Completadas')}>Completadas</button>
    </div>
  );
}

export default Filtros;
