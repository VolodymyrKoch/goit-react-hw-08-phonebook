import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { connect } from 'react-redux';
import * as Yup from 'yup';

import { login } from '../../redux/reducers/contacts/contactsOperations.js';
import contactSelector from '../../redux/reducers/contacts/contactsSelectors.js';

const signInSchema = Yup.object().shape({
  email: Yup.string()
    .email('Email is not valid!')
    .required('Field is required!'),
  password: Yup.string()
    .min(7, 'min length 7 char')
    .required('Field is required!'),
});

const LoginPage = ({ login, LoginError }) => {
  return (
    <div className="row">
      <div className="col-6 offset-3 mt-5">
        {LoginError && (
          <th className="text-danger invalid-feedback d-block">
            Incorrectly entered @email or password. Please try again.
          </th>
        )}
        <Formik
          initialValues={{ email: '', password: '' }}
          validationSchema={signInSchema}
          onSubmit={(values, { resetForm }) => {
            login(values);
            resetForm({});
          }}
        >
          {({ errors, touched, values }) => (
            <Form className="form">
              <Field
                type="email"
                name="email"
                className={`form-control mt-2 ${
                  errors.email && touched.email ? 'is-invalid' : ''
                }`}
              />

              <ErrorMessage
                name="email"
                component="small"
                className="invalid-feedback d-block"
              />
              <Field
                type="password"
                name="password"
                className={`form-control mt-2 ${
                  errors.password && touched.password ? 'is-invalid' : ''
                }`}
              />
              <ErrorMessage
                name="password"
                component="small"
                className="invalid-feedback d-block"
              />
              <button
                type="submit"
                className="btn btn-primary btn-lg mt-2"
                disabled={
                  !values.email ||
                  !values.password ||
                  errors.password ||
                  errors.email
                }
              >
                Login
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};
const mapStateToProps = state => ({
  LoginError: contactSelector.getError(state),
});
export default connect(mapStateToProps, { login })(LoginPage);
