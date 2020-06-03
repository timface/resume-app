import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function TestimonialPage(props) {
    const [testimonials, setTestimonials] = useState(props.data);

    return (
        <div className="container text-white">
            <div className="row justify-content-center">
                <h2 className="">Testimonials</h2>
                <ul className="list-unstyled">
                    {testimonials === null && <div className="spinner-border">Loading...</div>}
                    {testimonials && testimonials
                        .map((test, idx) => (
                            <li className="test-list-item" key={idx}>"{test}"</li>
                        ))
                    }
                </ul>
                <small>Quotes pulled from JCU student feedback surveys during <Link to="/history/1">Academic Role</Link></small>
            </div>
        </div>
    )
}

export default TestimonialPage;