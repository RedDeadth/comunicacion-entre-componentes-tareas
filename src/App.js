import React, { useState } from 'react';
import TareaForm from './TareaForm';
import ListaTareas from './ListaTareas';
import Filtros from './Filtros';

function App() {
  const [tareas, setTareas] = useState([]);
  const [filtro, setFiltro] = useState('Todas');
  const [error, setError] = useState('');

  const agregarTarea = (texto) => {
    if (texto.trim() === '') {
      setError('La tarea no puede estar vacía');
      return;
    } else if (texto.length > 100) {
      setError('La tarea no puede tener más de 100 caracteres');
      return;
    }
    setError('');
    const nuevaTarea = { texto, completada: false, fechaCreacion: new Date() };
    setTareas([...tareas, nuevaTarea]);
  };

  const eliminarTarea = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas.splice(index, 1);
    setTareas(nuevasTareas);
  };

  const editarTarea = (index, nuevoTexto) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].texto = nuevoTexto;
    setTareas(nuevasTareas);
  };

  const toggleCompletada = (index) => {
    const nuevasTareas = [...tareas];
    nuevasTareas[index].completada = !nuevasTareas[index].completada;
    setTareas(nuevasTareas);
  };

  const filtrarTareas = (filtro) => {
    setFiltro(filtro);
  };

  const ordenarTareasPorFecha = (ascendente) => {
    const tareasOrdenadas = [...tareas].sort((a, b) =>
      ascendente ? a.fechaCreacion - b.fechaCreacion : b.fechaCreacion - a.fechaCreacion
    );
    setTareas(tareasOrdenadas);
  };

  let tareasFiltradas = tareas;
  if (filtro === 'Pendientes') {
    tareasFiltradas = tareas.filter((tarea) => !tarea.completada);
  } else if (filtro === 'Completadas') {
    tareasFiltradas = tareas.filter((tarea) => tarea.completada);
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">Lista de Tareas</h1>
      {error && <div className="alert alert-danger">{error}</div>}
      <div className="card p-4">
        <TareaForm agregarTarea={agregarTarea} />
        <Filtros filtrarTareas={filtrarTareas} />
        <div className="d-flex justify-content-between mb-3">
          <button className="btn btn-primary" onClick={() => ordenarTareasPorFecha(true)}>
            Ordenar por Fecha Ascendente
          </button>
          <button className="btn btn-primary" onClick={() => ordenarTareasPorFecha(false)}>
            Ordenar por Fecha Descendente
          </button>
        </div>
        <ListaTareas
          tareas={tareasFiltradas}
          eliminarTarea={eliminarTarea}
          editarTarea={editarTarea}
          toggleCompletada={toggleCompletada}
        />
      </div>
    </div>
  );
}

export default App;
