import { useFormik, Formik, Form, Field, ErrorMessage } from 'formik'
import { signupValidation } from './signupValidation'

const initialValues = {
  name: '',
  email: '',
  password: '',
  cpassword: ''
}

function App() {
  // const {values, handleBlur, handleChange, handleSubmit, errors} = useFormik({
  //   initialValues: initialValues,
  //   validationSchema : signupValidation,
  //   onSubmit: (values) => {
  //     console.log(values)
  //   }
  // })

  return (
    <div>
      <Formik
        initialValues={initialValues}
        validationSchema={signupValidation}>
        <Form className='form'>
          <label className='title'>Login</label>
          <br />
          <Field type="text" name="name" placeholder="Name" ></Field>
          <br />
          <ErrorMessage className='err' name="name" component="small" />
          <br />
          <Field type="email" name="email" placeholder="Email" ></Field>
          <br />
          <ErrorMessage className='err' name="email" component="small" />
          <br />
          <Field type="password" name="password" placeholder="Create Password" ></Field>
          <br />
          <ErrorMessage className='err' name="password" component="small" />
          <br />
          <Field type="password" name="cpassword" placeholder="Conform Password" ></Field>
          <br />
          <ErrorMessage className='err' name="cpassword" component="small" />
          <br />
          <button type='submit'>Submit</button>
        </Form>
      </Formik>
    </div>
  )
}

export default App
