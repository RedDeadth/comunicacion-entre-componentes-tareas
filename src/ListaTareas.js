import React from 'react';
import Tarea from './Tarea';

function ListaTareas({ tareas, eliminarTarea, editarTarea, toggleCompletada }) {
  return (
    <ul className="list-group">
      {tareas.map((tarea, index) => (
        <Tarea
          key={index}
          tarea={tarea}
          onDelete={() => eliminarTarea(index)}
          onEdit={(nuevoTexto) => editarTarea(index, nuevoTexto)}
          completada={tarea.completada}
          onToggleCompletada={() => toggleCompletada(index)}
        />
      ))}
    </ul>
  );
}

export default ListaTareas;
