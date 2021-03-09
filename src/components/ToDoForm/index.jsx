import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { WORKING_RULES_SCHEMA } from '../../utils/validationSchemas.js';

const ToDoForm = props => {
  return (
    <Formik
      onSubmit={props.onSubmit}
      initialValues={{ todoBody: '' }}
      validationSchema={WORKING_RULES_SCHEMA}
    >
      <Form>
        <Field name='todoBody' />
        <ErrorMessage name='todoBody' component='div' />
      </Form>
    </Formik>
  );
};

export default ToDoForm;
