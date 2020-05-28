/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HistoryFull(props) {
    const [hist, setHistory] = useState(null);

    async function fetchData() {
        const data = await axios.get(`http://localhost:8081/${props.id}`).then(
            resp => resp.data
        );
        setHistory(data);
    }

    useEffect(() => {
        fetchData();
    }, []
    );

    return (
        <div className="container">
            <div className="row d-flex justify-content-center">
                {hist === null && <div className="text-center spinner-border"></div>}
                {hist && <div className="jumbotron col-12 bg-primary pt-1">
                    <h1 className="display-3">{hist.title}</h1>
                    <p className="font-italic">{hist.yearStart} - {hist.yearEnd}</p>
                    <h3>{hist.location}</h3>
                    <hr className="my-4" />
                    <h4>Key Responsibilities:</h4>
                    <ul>
                        {
                            hist.activities.map((detail, idx) => (
                                <li className="lead" key={idx}>{detail}</li>
                            ))
                        }
                    </ul>
                    {/* <h4>Achievements:</h4>
                    <ul>
                        {
                            hist.achievements.map((detail, idx) => (
                                <li className="lead" key={idx}>{detail}</li>
                            ))
                        }
                    </ul> */}
                </div>
                }
            </div>
        </div>
    )
}

export default HistoryFull;
