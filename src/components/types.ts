export interface Todo {
	id?: string;
	createdAt?: string;
	title: string;
	completed: boolean;
  }

export interface TodoItemProps {
	todo: Todo;
	onToggleComplete: (id: string) => Promise<void>;
	onDelete: (id: string) => Promise<void>;
	onEdit: () => void;
  }

export interface TodoFormProps {
	onSuccess: () => void;
  }
  
  export interface TodosResponse {
	data: Todo[];
  }