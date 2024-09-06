import { useState, useEffect } from 'react';
import TodoItem from '../TodoItem/TodoItem';
import TodoForm from '../TodoForm/TodoForm';
import { Todo } from '../types';
import { getAllTodos, updateTodoById, deleteTodo } from '../../api';
import './TodoList.css'

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [editingTodo, setEditingTodo] = useState<Todo | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await getAllTodos();
        if (response) {
          setTodos(response.data);
        }
      } catch (error) {
        console.error('Error fetching todos:', error);
      }
    };
    fetchTodos();
  }, []);

  const handleToggleComplete = async (id: string) => {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
      try {
        await updateTodoById(id, { completed: !todo.completed });
        setTodos(todos.map(t => (t.id === id ? { ...t, completed: !t.completed } : t)));
      } catch (error) {
        console.error('Error updating todo:', error);
      }
    }
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter(todo => todo.id !== id));
    } catch (error) {
      console.error('Error deleting todo:', error);
    }
  };

  const handleSuccess = async () => {
    try {
      const response = await getAllTodos();
      if (response) {
        setTodos(response.data);
        setEditingTodo(null); 
      }
    } catch (error) {
      console.error('Error fetching todos after success:', error);
    }
  };

  const handleAddTodo = () => {
    setEditingTodo({
      id: '', 
      createdAt: new Date().toISOString(),
      title: '',
      completed: false
    });
  };

  return (
    <div className="todo-list">
      <button className="create-button" onClick={handleAddTodo}>
        Create new task
      </button>
      {editingTodo && (
        <TodoForm onSuccess={handleSuccess} />
      )}
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onToggleComplete={handleToggleComplete}
          onDelete={handleDelete}
          onEdit={() => setEditingTodo(todo)}
        />
      ))}
    </div>
  );
};

export default TodoList;