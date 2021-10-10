import React from 'react'
import { ErrorMessage, Field, Form, Formik, FieldArray, FastField } from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'



const initialValues = {
    name: '',
    email: '',
    channal: '',
    commnts: '',
    address: '',
    // nested object
    social: {
        facebook: '',
        twitter: ''
    },
    // array object
    // phoneNumbers: ['', ''],
    phNumber: ['']
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
                    <ErrorMessage name='name' component={TextError} />
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <Field
                        type='email'
                        id='email'
                        name='email'
                    />
                    <ErrorMessage name='email' component={TextError} />
                </div>

                <div className='form-control'>
                    <label htmlFor='channal'>Channal</label>
                    <Field
                        type='text'
                        id='channal'
                        name='channal'
                    />
                    <ErrorMessage name='channal' component={TextError} />
                </div>

                <div className='form-control'>
                    <label htmlFor='commnts'>Comment</label>
                    <Field component='textarea' id='commnts' name='commnts' />
                </div>

                <div className='form-control'>
                    <label htmlFor='address'>Address</label>
                    <FastField name='address'>
                        {/*function for getting props and using those props we will return jsx*/}
                        {
                            (props) => {
                                const { field, meta } = props
                                // console.log('Render props', props)
                                console.log('Field render')
                                return (
                                    <div>
                                        <input type='text' id='address' {...field} />
                                        {meta.touched && meta.error ? <div>{meta.error}</div> : null}
                                    </div>
                                )
                            }
                        }
                    </FastField>
                </div>

                <div className='form-control'>
                    <label htmlFor='facebook'>Facebook profile</label>
                    <Field type='text' id='facebook' name='social.facebook' />
                </div>

                <div className='form-control'>
                    <label htmlFor='twitter'>Twitter profile</label>
                    <Field type='text' id='twitter' name='social.twitter' />
                </div>
                {/* 
                <div className='form-control'>
                    <label htmlFor='primaryPh'>Primary phone number</label>
                    <Field type='text' id='primaryPh' name='phoneNumbers[0]' />
                </div>

                <div className='form-control'>
                    <label htmlFor='secondaryPh'>secondery phone number</label>
                    <Field type='text' id='secondaryPh' name='phoneNumbers[1]' />
                </div>
                */}
                <div className='form-control'>
                    <label>List of phone number</label>
                    <FieldArray name="phNumber">
                        {
                            fieldArrayProps => {
                                // console.log('fieldArray', fieldArrayProps)
                                const { push, remove, form } = fieldArrayProps
                                const { values } = form
                                const { phNumber } = values
                                console.log('Form Error', form.errors)
                                return (<div>
                                    {
                                        phNumber.map((phNumber, index) => (
                                            <div key={index}>
                                                <Field name={`phNumber[${index}]`} />
                                                {
                                                    index > 0 && (
                                                        <button type='button' onClick={() => remove(index)}> - </button>
                                                    )
                                                }
                                                <button type='button' onClick={() => push('')}> + </button>
                                            </div>
                                        ))
                                    }
                                </div>)
                            }
                        }
                    </FieldArray>
                </div>

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    )
}

export default YtForm
