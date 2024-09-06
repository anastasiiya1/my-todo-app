import {useState} from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import TodoItem from "../TodoItem/TodoItem";
import TodoForm from "../TodoForm/TodoForm";
import { Todo } from "../types";
import {
  getAllTodos,
  deleteTodo,
  updateTodoById
} from "../../api";
import "./TodoList.css";

const TodoList: React.FC = () => {
  const queryClient = useQueryClient();
  const [isFormVisible, setFormVisible] = useState(false);

  const { data: todosResponse, isLoading, isError } = useQuery({
    queryKey: ["todos"],
    queryFn: getAllTodos,
  });
  
  const todos = todosResponse?.data;


  const mutationDelete = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => queryClient.invalidateQueries({queryKey: ["todos"]}),
  });

  const mutationUpdate = useMutation({
    mutationFn: ({ id, updatedTodo }: { id: string; updatedTodo: Partial<Omit<Todo, "id" | "createdAt">> }) => {
      return updateTodoById(id, updatedTodo);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["todos"] });
    },
  });


  const handleDelete = (id: string) => {
    mutationDelete.mutate(id);
  };

  const handleEdit = (id: string, updatedTodo: { title: string; completed: boolean }) => {
    mutationUpdate.mutate({ id, updatedTodo });
  };

  const handleAddTodo = () => {
    setFormVisible(true);
  };

  const handleFormSuccess = () => {
    setFormVisible(false);
    queryClient.invalidateQueries({queryKey: ["todos"]});
  };


  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error loading todos</div>;

  return (
    <div className="todo-list">
      {isFormVisible ? (
        <TodoForm onSuccess={handleFormSuccess} />
      ) : (
        <button className="create-button" onClick={handleAddTodo}>
          Create new task
        </button>
      )}
      {todos?.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
};

export default TodoList;