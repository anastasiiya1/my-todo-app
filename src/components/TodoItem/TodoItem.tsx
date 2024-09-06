import { useState } from "react";
import { TodoItemProps } from "../types";
import {
  TodoItemContainer,
  EditForm,
  EditButton,
  EditCheckbox,
  EditInput,
  TodoCheckbox,
  SaveButton,
  CheckboxLabel,
  DeleteButton,
} from "./TodoItem.styles";

const TodoItem: React.FC<TodoItemProps> = ({
  todo,
  onToggleComplete,
  onDelete,
  onEdit,
}) => {
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
    <TodoItemContainer>
      {isEditing ? (
        <EditForm>
          <EditInput
            type="text"
            value={newTitle}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <EditCheckbox>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={() => setIsCompleted(!isCompleted)}
            />
            Completed
          </EditCheckbox>
          <SaveButton onClick={handleEdit}>Save</SaveButton>
        </EditForm>
      ) : (
        <>
          <TodoCheckbox $completed={todo.completed}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={handleToggleComplete}
            />
            <CheckboxLabel>{todo.title}</CheckboxLabel>
          </TodoCheckbox>
          <EditButton onClick={handleEdit}>
            {isEditing ? "Cancel" : "Edit"}
          </EditButton>
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        </>
      )}
    </TodoItemContainer>
  );
};

export default TodoItem;
