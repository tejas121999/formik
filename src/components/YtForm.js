import React from 'react'
import { useFormik } from 'formik'

function YtForm() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            channal: ''
        },
        onSubmit: values => {
            console.log('Form values', values)
        },
        validate:values => {
            
        }
    })

    // console.log('Form values', formik.values)

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <label htmlFor='name'>Name</label>
                <input type='text' id='name' name='name' onChange={formik.handleChange} value={formik.values.name} />

                <label htmlFor='email'>E-mail</label>
                <input type='email' id='email' name='email' onChange={formik.handleChange} value={formik.values.email} />

                <label htmlFor='channal'>Channal</label>
                <input type='text' id='channal' name='channal' onChange={formik.handleChange} value={formik.values.channal} />

                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default YtForm
