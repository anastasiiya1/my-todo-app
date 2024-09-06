import axios, { AxiosResponse } from "axios";
import { Todo } from "./components/types";

axios.defaults.baseURL = "https://66dac4c3f47a05d55be5e6ab.mockapi.io";

export const getAllTodos = async (): Promise<AxiosResponse<Todo[]> | void> => {
  try {
    const response = await axios.get<Todo[]>("/todos");
    return response;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(err.response?.data.message || err.message);
    } else {
      console.error(err);
    }
  }
};

export const createNewTodo = async (
  todo: Omit<Todo, "id" | "createdAt">
): Promise<AxiosResponse<Todo> | void> => {
  try {
    const response = await axios.post<Todo>("/todos", todo);
    return response;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(err.response?.data.message || err.message);
    } else {
      console.error(err);
    }
  }
};

export const getTodoById = async (
  id: string
): Promise<AxiosResponse<Todo> | void> => {
  try {
    const response = await axios.get<Todo>(`/todos/${id}`);
    return response;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(err.response?.data.message || err.message);
    } else {
      console.error(err);
    }
  }
};

export const updateTodoById = async (
  id: string,
  updatedTodo: Partial<Omit<Todo, "id" | "createdAt">>
): Promise<AxiosResponse<Todo> | void> => {
  try {
    const response = await axios.put<Todo>(`/todos/${id}`, updatedTodo);
    return response;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(err.response?.data.message || err.message);
    } else {
      console.error(err);
    }
  }
};

export const deleteTodo = async (
  id: string
): Promise<AxiosResponse<void> | void> => {
  try {
    const response = await axios.delete<void>(`/todos/${id}`);
    return response;
  } catch (err) {
    if (axios.isAxiosError(err)) {
      console.error(err.response?.data.message || err.message);
    } else {
      console.error(err);
    }
  }
};
