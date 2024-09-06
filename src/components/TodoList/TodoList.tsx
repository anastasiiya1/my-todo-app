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
// import "./TodoList.css";
import { TodoListContainer, CreateButton } from "./TodoListStyles";

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
    <TodoListContainer>
    {isFormVisible ? (
      <TodoForm onSuccess={handleFormSuccess} />
    ) : (
      <CreateButton onClick={handleAddTodo}>Create new task</CreateButton>
    )}
    {todos?.map((todo) => (
      <TodoItem key={todo.id} todo={todo} onDelete={handleDelete} onEdit={handleEdit} />
    ))}
  </TodoListContainer>
  );
};

export default TodoList;