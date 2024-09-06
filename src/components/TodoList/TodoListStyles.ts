import styled from "styled-components";


export const TodoListContainer = styled.div`
  max-width: 600px;
  text-align: center;
  margin: 0 auto;
  padding: 20px;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const CreateButton = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #ffffff;
  background-color: #007bff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-bottom: 20px;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;