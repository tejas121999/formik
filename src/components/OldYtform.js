import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

function YtForm() {

    const initialValues = {
        name: '',
        email: '',
        channal: ''
    }

    const onSubmit = values => {
        console.log('Form values', values)
    }

    const validate = values => {
        let errors = {}

        if (!values.name) {
            errors.name = 'Required'
        }

        if (!values.email) {
            errors.email = 'Required'
        } else if (!/^[A-z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
            errors.email = 'Invalid Email'
        }

        if (!values.channal) {
            errors.channal = 'Required'
        }

        return errors
    }

    const validationSchema = Yup.object({
        name: Yup.string().required('Required'),
        email: Yup.string().email('Invilade Email Format').required('Required'),
        channal: Yup.string().required('Required')
    })

    const formik = useFormik({
        initialValues,
        onSubmit,
        // validate
        validationSchema
    })

    // console.log('visited field', formik.touched)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className='form-control'>
                    <label htmlFor='name'>Name</label>
                    <input
                        type='text'
                        id='name'
                        name='name'
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.name && formik.errors.name ?
                            <div className='error'>{formik.errors.name}</div>
                            : null
                    }
                </div>

                <div className='form-control'>
                    <label htmlFor='email'>E-mail</label>
                    <input
                        type='email'
                        id='email'
                        name='email'
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.email && formik.errors.email ?
                            <div className='error'>{formik.errors.email}</div>
                            : null
                    }
                </div>

                <div className='form-control'>
                    <label htmlFor='channal'>Channal</label>
                    <input
                        type='text'
                        id='channal'
                        name='channal'
                        onChange={formik.handleChange}
                        value={formik.values.channal}
                        onBlur={formik.handleBlur}
                    />
                    {
                        formik.touched.channal && formik.errors.channal ?
                            <div className='error'>{formik.errors.channal}</div>
                            : null
                    }
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default YtForm
