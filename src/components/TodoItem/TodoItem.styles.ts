import styled from 'styled-components';

export const TodoItemContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  padding: 10px;
  border-bottom: 1px solid #e1e1e1;
`;

export const EditForm = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const EditInput = styled.input`
  padding: 5px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const EditCheckbox = styled.label`
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const SaveButton = styled.button`
  background-color: #28a745;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #218838;
  }
`;

export const TodoCheckbox = styled.label<{ $completed: boolean }>`
 display: flex;
  align-items: center;
  gap: 10px;
  text-decoration: ${({ $completed }) => ($completed ? 'line-through' : 'none')};
`;

export const CheckboxLabel = styled.span`
  font-size: 18px;
  color: #333;
`;

export const EditButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 10px;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DeleteButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-left: 10px;

  &:hover {
    background-color: #c82333;
  }
`;