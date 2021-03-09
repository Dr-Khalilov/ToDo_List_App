import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import ToDoList from '../ToDoList';
import { WORKING_RULES_SCHEMA } from '../../utils/validationSchemas.js';

const ToDoForm = props => {
  return (
    <div>
      <Formik
        initialValues={{ todoBody: '' }}
        validationSchemas={WORKING_RULES_SCHEMA}
      >
        <Form>
          <Field name='todoBody' />
          <ErrorMessage name='todoBody' component='div' />
        </Form>
      </Formik>
      <ToDoList />
    </div>
  );
};

export default ToDoForm;
