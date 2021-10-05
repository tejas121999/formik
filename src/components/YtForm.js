import React from 'react'
import { ErrorMessage, Field, Form, Formik } from 'formik'
import * as Yup from 'yup'



const initialValues = {
    name: '',
    email: '',
    channal: ''
}

const onSubmit = values => {
    console.log('Form values', values)
}


const validationSchema = Yup.object({
    name: Yup.string().required('Required'),
    email: Yup.string().email('Invilade Email Format').required('Required'),
    channal: Yup.string().required('Required')
})



// console.log('visited field', formik.touched)
function YtForm() {
   
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <Form>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <Field
                        type='text'
                        id='name'
                        name='name'
                    />
                    <ErrorMessage name='name' />
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <Field
                        type='email'
                        id='email'
                        name='email'
                      
                    />
                    <ErrorMessage name='email' />
                </div>

                <div className='form-control'>
                    <label htmlFor='channal'>Channal</label>
                    <Field
                        type='text'
                        id='channal'
                        name='channal'
                    />
                    <ErrorMessage name='channal' />
                </div>
                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default YtForm
