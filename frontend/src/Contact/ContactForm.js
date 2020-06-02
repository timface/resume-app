import React, { useState } from 'react';
import { useFormik } from 'formik';


const validate = values => {
    const errors = {};
    if (!values.name) {
        errors.name = 'Required';
    }

    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid Email Address';
    }

    if (!values.msg) {
        errors.msg = 'Required';
    }

    return errors;
}

function ContactForm(props) {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: 'example@org.com',
            org: '',
            msg: 'Hi Tim, \n I\'d like to arrange an interview',
        },
        validate,
        onSubmit: values => {
            alert(JSON.stringify(values, null, 2))
        }
    })

    return (
        <div className="container">
            <div className="row">
                <form onSubmit={formik.handleSubmit}>
                    <div className="row">
                    <label for="name" className="col text-right">Your name:</label>
                    <input
                    className="col"
                        id="name"
                        name='name'
                        type='text'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
                    </div>
                    <div className="row">
                    <label for="email" className="col">Your work email:</label>
                    <input
                    className="col"
                        id="email"
                        name="email"
                        type="email"
                        value={formik.values.email}
                        placeholder={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
                    </div>
                    <div className="row">
                    <label for="org" className="col">Your Organisation:</label>
                    <input
                    className="col"
                        id="org"
                        name="org"
                        type="text"
                        value={formik.values.org}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                        </div>
                        <div className="row">
                    <label for="msg" className="col">Subject:</label>
                    <input
                    className="col"
                        id="msg"
                        name="msg"
                        type="textarea"
                        value={formik.values.msg}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur} />
                    {formik.touched.msg && formik.errors.msg ? <div>{formik.errors.msg}</div> : null}
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default ContactForm;