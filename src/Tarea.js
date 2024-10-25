import React, { useState } from 'react';

function Tarea({ tarea, onDelete, onEdit, completada, onToggleCompletada }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(tarea.texto);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    onEdit(editedText);
    setIsEditing(false);
  };

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <input type="checkbox" checked={completada} onChange={onToggleCompletada} />
      {isEditing ? (
        <>
          <input
            type="text"
            className="form-control me-2"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <button className="btn btn-primary me-2" onClick={handleSaveClick}>Guardar</button>
        </>
      ) : (
        <>
          <span style={{ textDecoration: completada ? 'line-through' : 'none' }}>{tarea.texto}</span>
          <button className="btn btn-danger me-2" onClick={onDelete}>Eliminar</button>
          <button className="btn btn-secondary" onClick={handleEditClick}>Editar</button>
        </>
      )}
    </li>
  );
}

export default Tarea;
