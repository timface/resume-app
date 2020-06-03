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
        <div className="container">
            <div className="row justify-content-center">
                <h2>Contact Tim</h2>
            </div>
            <div className="row justify-content-center">
                <p className="lead">timhart404@gmail.com</p>
            </div>

        </div>
    )

    // TODO - need to create an API and all that here yet
    // return (
    //     <React.Fragment>
    //         <h2 className='text-center text-white'>Contact Tim</h2>
    //         <Formik
    //             initialValues={{
    //                 name: '',
    //                 email: '',
    //                 org: '',
    //                 msg: '',
    //             }}
    //             validate={validate}
    //             onSubmit={(values, { setSubmitting }) => {
    //                 alert(JSON.stringify(values, null, 2));
    //                 setSubmitting(false);
    //             }}>
    //             <div className="container text-white">
    //                 <Form>
    //                     <div className="form-group">
    //                         <div className='row'>
    //                             <label className='col-sm-2 col-form-label text-right' htmlFor='name'>Your name*: </label>
    //                             <div className='col-sm-4'>
    //                                 <Field className="form-control" name='name' type='text' />
    //                                 <ErrorMessage component='span' className='p-2 text-danger' name='name' />
    //                             </div>
    //                         </div>
    //                         <div className='row'>
    //                             <label className='col-sm-2 col-form-label text-right' htmlFor='email'>Your work email*: </label>
    //                             <div className='col-sm-4'>
    //                                 <Field className='form-control' name='email' type='email' />
    //                                 <ErrorMessage component='span' className='p-2 text-danger' name='email' />
    //                             </div>
    //                         </div>
    //                         <div className='row'>
    //                             <label className='col-sm-2 col-form-label text-right' htmlFor='org'>Your Organisation: </label>
    //                             <div className='col-sm-4'>
    //                                 <Field className='form-control' name='org' type='text' />
    //                                 <ErrorMessage component='span' className='p-2 text-danger' name='org' />
    //                             </div>
    //                         </div>
    //                         <div className='row'>
    //                             <label className='col-sm-2 col-form-label text-right' htmlFor='msg'>Message*: </label>
    //                             <div className='col-sm-4'>
    //                                 <Field className='form-control' name='msg' as='textarea' />
    //                                 <ErrorMessage component='span' className='p-2 text-danger' name='msg' />
    //                             </div>
    //                         </div>
    //                         <div className='row mt-1'>
    //                             <button className='col-sm-1 offset-md-5 btn-primary' type="submit">Submit</button>
    //                         </div>
    //                     </div>
    //                 </Form>
    //             </div>
    //         </Formik>
    //     </React.Fragment>
    // )
}

export default ContactForm;