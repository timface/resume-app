import React, { useState } from 'react';
import { Form, Formik, Field, ErrorMessage } from 'formik';


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

    return (
        <React.Fragment>
            <h3 className='text-center'>Contact Tim</h3>
            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    org: '',
                    msg: '',
                }}
                validate={validate}
                onSubmit={(values, { setSubmitting }) => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }}>
                <div className="container">
                    <Form>
                        <div className="form-group">
                            <div className='row'>
                                <label className='col-sm-2 col-form-label text-right' htmlFor='name'>Your name*: </label>
                                <div className='col-sm-4'>
                                    <Field className="form-control" name='name' type='text' />
                                    <ErrorMessage component='span' className='p-2 text-danger' name='name' />
                                </div>
                            </div>
                            <div className='row'>
                                <label className='col-sm-2 col-form-label text-right' htmlFor='email'>Your work email*: </label>
                                <div className='col-sm-4'>
                                    <Field className='form-control' name='email' type='email' />
                                    <ErrorMessage component='span' className='p-2 text-danger' name='email' />
                                </div>
                            </div>
                            <div className='row'>
                                <label className='col-sm-2 col-form-label text-right' htmlFor='org'>Your Organisation: </label>
                                <div className='col-sm-4'>
                                    <Field className='form-control' name='org' type='text' />
                                    <ErrorMessage component='span' className='p-2 text-danger' name='org' />
                                </div>
                            </div>
                            <div className='row'>
                                <label className='col-sm-2 col-form-label text-right' htmlFor='msg'>Message*: </label>
                                <div className='col-sm-4'>
                                    <Field className='form-control' name='msg' as='textarea' />
                                    <ErrorMessage component='span' className='p-2 text-danger' name='msg' />
                                </div>
                            </div>
                            <div className='row mt-1'>
                                <button className='col-sm-1 offset-md-5 btn-primary' type="submit">Submit</button>
                            </div>
                        </div>
                    </Form>
                </div>
            </Formik>
        </React.Fragment>
    )

    // const formik = useFormik({
    //     initialValues: {
    //         name: '',
    //         email: 'example@org.com',
    //         org: '',
    //         msg: 'Hi Tim, \n I\'d like to arrange an interview',
    //     },
    //     validate,
    //     onSubmit: values => {
    //         alert(JSON.stringify(values, null, 2))
    //     }
    // })

    // return (
    //     <div className="container">
    //         <div className="row">
    //             <form onSubmit={formik.handleSubmit}>
    //                 <div className="row">
    //                 <label for="name" className="col text-right">Your name:</label>
    //                 <input
    //                 className="col"
    //                     id="name"
    //                     name='name'
    //                     type='text'
    //                     value={formik.values.name}
    //                     onChange={formik.handleChange}
    //                     onBlur={formik.handleBlur} />
    //                 {formik.touched.name && formik.errors.name ? <div>{formik.errors.name}</div> : null}
    //                 </div>
    //                 <div className="row">
    //                 <label for="email" className="col">Your work email:</label>
    //                 <input
    //                 className="col"
    //                     id="email"
    //                     name="email"
    //                     type="email"
    //                     value={formik.values.email}
    //                     placeholder={formik.values.email}
    //                     onChange={formik.handleChange}
    //                     onBlur={formik.handleBlur} />
    //                 {formik.touched.email && formik.errors.email ? <div>{formik.errors.email}</div> : null}
    //                 </div>
    //                 <div className="row">
    //                 <label for="org" className="col">Your Organisation:</label>
    //                 <input
    //                 className="col"
    //                     id="org"
    //                     name="org"
    //                     type="text"
    //                     value={formik.values.org}
    //                     onChange={formik.handleChange}
    //                     onBlur={formik.handleBlur} />
    //                     </div>
    //                     <div className="row">
    //                 <label for="msg" className="col">Subject:</label>
    //                 <input
    //                 className="col"
    //                     id="msg"
    //                     name="msg"
    //                     type="textarea"
    //                     value={formik.values.msg}
    //                     onChange={formik.handleChange}
    //                     onBlur={formik.handleBlur} />
    //                 {formik.touched.msg && formik.errors.msg ? <div>{formik.errors.msg}</div> : null}
    //                 </div>
    //                 <button type='submit'>Submit</button>
    //             </form>
    //         </div>
    //     </div>
    // )
}

export default ContactForm;