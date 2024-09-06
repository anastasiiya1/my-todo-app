import { Formik, Form } from "formik";
import * as Yup from "yup";
import { createNewTodo } from "../../api";
import { TodoFormProps } from "../types";
import {
  FormContainer,
  FormGroup,
  Label,
  FormControl,
  ErrorMessageStyled,
  SubmitButton,
} from "./TodoFormStyles";

const validationSchema = Yup.object().shape({
  title: Yup.string().required("Title is required"),
  completed: Yup.boolean(),
});

const initialValues = {
  title: "",
  completed: false,
};

const TodoForm: React.FC<TodoFormProps> = ({ onSuccess }) => {
  const handleSubmit = async (
    values: { title: string; completed: boolean },
    { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }
  ) => {
    try {
      await createNewTodo({ title: values.title, completed: values.completed });
      onSuccess();
    } catch (error) {
      console.error("Error creating todo:", error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <FormContainer>
          <Form className="todo-form">
            <FormGroup>
              <Label htmlFor="title">Title</Label>
              <FormControl type="text" name="title" id="title" />
              <ErrorMessageStyled name="title" component="div" />
            </FormGroup>
            <SubmitButton type="submit" disabled={isSubmitting}>
              Add Task
            </SubmitButton>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
};

export default TodoForm;
