import { useState } from 'react';
import { TodoItemProps } from '../types';
import './TodoItem.css';

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onDelete, onEdit }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(todo.title);
  const [isCompleted, setIsCompleted] = useState(todo.completed);

  const handleToggleComplete = () => {
    if (todo.id && onToggleComplete) {
      onToggleComplete(todo.id);
    }
  };

  const handleDelete = () => {
    if (todo.id) {
      onDelete(todo.id);
    }
  };


  const handleEdit = () => {
    if (isEditing && todo.id) {
      onEdit(todo.id, { title: newTitle, completed: isCompleted });
    }
    setIsEditing(!isEditing);
  };

  return (
    <div className="todo-item">
    {isEditing ? (
      <div className="edit-form">
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="edit-input"
        />
        <label className="edit-checkbox">
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={() => setIsCompleted(!isCompleted)}
          />
          Completed
        </label>
        <button onClick={handleEdit} className="save-button">
          Save
        </button>
      </div>
    ) : (
      <>
        <label className={`todo-checkbox ${todo.completed ? 'completed' : ''}`}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={handleToggleComplete}
          />
          <span className="checkbox-label">{todo.title}</span>
        </label>
        <button className="edit-button" onClick={handleEdit}>
          {isEditing ? 'Cancel' : 'Edit'}
        </button>
        <button className="delete-button" onClick={handleDelete}>
          Delete
        </button>
      </>
    )}
  </div>
  );
};

export default TodoItem;