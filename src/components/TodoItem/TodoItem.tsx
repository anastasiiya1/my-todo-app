import { TodoItemProps } from '../types';
import './TodoItem.css';

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete, onDelete }) => {
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

  return (
    <div className="todo-item">
      <label className={`todo-checkbox ${todo.completed ? 'completed' : ''}`}>
        <input
          type="checkbox"
          checked={todo.completed}
          onChange={handleToggleComplete}
        />
        <span className="checkbox-label">{todo.title}</span>
      </label>
      <button className="delete-button" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default TodoItem;