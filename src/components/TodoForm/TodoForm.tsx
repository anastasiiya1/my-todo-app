import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { createNewTodo } from '../../api';
import {TodoFormProps} from '../types'
import './TodoForm.css'

const validationSchema = Yup.object().shape({
  title: Yup.string().required('Title is required'),
  completed: Yup.boolean(),
});

const initialValues = {
  title: '',
  completed: false,
};


const TodoForm: React.FC<TodoFormProps> = ({ onSuccess }) => {
  const handleSubmit = async (values: { title: string; completed: boolean }, { setSubmitting }: { setSubmitting: (isSubmitting: boolean) => void }) => {
    try {
      await createNewTodo({ title: values.title, completed: values.completed });
      onSuccess();
    } catch (error) {
      console.error('Error creating todo:', error);
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
        <Form className="todo-form">
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <Field
              type="text"
              name="title"
              id="title"
              className="form-control"
            />
            <ErrorMessage name="title" component="div" className="error-message" />
          </div>
          <div className="form-group">
          </div>
          <button type="submit" className="submit-button" disabled={isSubmitting}>
            Add Task
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default TodoForm;