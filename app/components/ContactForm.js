"use client";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phone: Yup.string(),
  subject: Yup.string().required("Subject is required"),
  message: Yup.string().required("Message is required"),
});

const ContactForm = () => {
  return (
    <div>
      <h1>Contact Us</h1>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values, { setSubmitting, resetForm }) => {
          // submit form data to backend or do something with the data
          console.log(values);
          setSubmitting(false);
          resetForm();
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <div>
              <div>
                <label htmlFor="name">Name</label>
                <Field name="name" type="text" />
                <ErrorMessage name="name" component="div" />
              </div>
              <div>
                <label htmlFor="email">Email</label>
                <Field name="email" type="email" />
                <ErrorMessage name="email" component="div" />
              </div>
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <Field name="phone" type="text" />
              <ErrorMessage name="phone" component="div" />
            </div>
            <div>
              <label htmlFor="subject">Subject</label>
              <Field name="subject" type="text" />
              <ErrorMessage name="subject" component="div" />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <Field name="message" as="textarea" />
              <ErrorMessage name="message" component="div" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ContactForm;