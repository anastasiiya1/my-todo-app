export interface Todo {
	id?: string;
	createdAt?: string;
	title: string;
	completed: boolean;
  }

  export interface TodoItemProps {
	todo: Todo;
	onToggleComplete?: (id: string) => void;
	onDelete: (id: string) => void;
  }
export interface TodoFormProps {
	onSuccess: () => void;
  }
  
  export interface TodosResponse {
	data: Todo[];
  }