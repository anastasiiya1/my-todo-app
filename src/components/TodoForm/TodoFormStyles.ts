import styled from "styled-components";
import { Field, ErrorMessage } from "formik";

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 400px;
  margin: 0 auto;
  margin-bottom: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: #f9f9f9;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 15px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
`;

export const FormControl = styled(Field)`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;

  &:focus {
    border-color: #007bff;
    outline: none;
    box-shadow: 0 0 0 0.2rem rgba(38, 143, 255, 0.25);
  }
`;

export const ErrorMessageStyled = styled(ErrorMessage)`
  color: #d9534f;
  font-size: 14px;
`;

export const SubmitButton = styled.button<{ disabled: boolean }>`
  background-color: ${props => props.disabled ? '#d6d6d6' : '#007bff'};
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 4px;
  font-size: 16px;
  cursor: ${props => props.disabled ? 'not-allowed' : 'pointer'};
  transition: background-color 0.2s ease-in-out;

  &:hover {
    background-color: ${props => props.disabled ? '#d6d6d6' : '#0056b3'};
  }
`;