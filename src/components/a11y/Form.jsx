import React from "react";
import { Formik, Field, Form } from "formik";

export default function CompetitionForm() {
  return (
    <div className="a11y-form">
      <h3>Competition</h3>
      <Formik
        initialValues={{ email: "", answer: "" }}
        onSubmit={async (values) => {
          await new Promise((r) => setTimeout(r, 500));
          alert(JSON.stringify(values, null, 2));
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          isSubmitting,
        }) => (
          <Form>
            <div className="field">
              <label htmlFor="email-field">Email</label>
              <input
                type="email"
                id="email-field"
                name="email"
                onChange={handleChange}
                onBlur={handleBlur}
                placeholder="Enter your email..."
                value={values.email}
              />
              {errors.email && touched.email && errors.email}
            </div>

            <div className="field">
              <div id="my-radio-group">Question</div>
              <p>
                It is a truth universally acknowledged, that a single man in
                possession of a good fortune, must be in want of ...
              </p>
              <fieldset role="group" aria-labelledby="my-radio-group">
                <legend>Your answer:</legend>
                <label>
                  <Field type="radio" name="answer" value="a banana" />a banana
                </label>
                <label>
                  <Field type="radio" name="answer" value="a wife" />a wife
                </label>
                <label>
                  <Field type="radio" name="answer" value="an Aria Role" />
                  an Aria Role
                </label>
              </fieldset>
              <button type="submit" disabled={isSubmitting}>
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
