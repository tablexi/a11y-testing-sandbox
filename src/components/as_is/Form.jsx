import React from "react";
import { Formik, Field, Form } from "formik";

export default function CompetitionForm() {
  return (
    <div className="form">
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

              <div>
                <label>a banana</label>
                <Field type="radio" name="answer" value="a banana" />

                <label>a wife</label>
                <Field type="radio" name="answer" value="a wife" />

                <label>an Aria Role</label>
                <Field type="radio" name="answer" value="an Aria Role" />
              </div>

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
