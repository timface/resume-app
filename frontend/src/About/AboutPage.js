import React, { useState } from 'react';

function AboutPage(props){
    const [about, setAbout] = useState(props.data.split(']]'));

    return (
        <div className="container text-white">
            <div className="row d-flex">
                <div className="col">
                    {about.map((para, idx) => <p key={idx}>{para}</p>)}
                </div>
                <div className="col">
                    <img src={require('../images/profile.jpg')} className="img-fluid" alt="Timothy Hart" />
                </div>
            </div>
        </div>
    )
}

export default AboutPage;