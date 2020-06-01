import React, { useState } from 'react';
import {Link} from 'react-router-dom';

function TestimonialPage(props) {
    const [testimonials, setTestimonials] = useState(props.data);

    return (
        <div className="container">
            <div className="row">
                <h4 className="">Testimonials:</h4>
                <small>Quotes pulled from JCU student feedback surveys during <Link to="/history/1">Academic Role</Link></small>
                <ul className="list-unstyled">
                    {testimonials === null && <div className="spinner-border">Loading...</div>}
                    {testimonials && testimonials
                        .map((test, idx) => (
                            <li className="test-list-item" key={idx}>"{test}"</li>
                        ))
                    }
                </ul>

            </div>
        </div>
    )
}

export default TestimonialPage;