/* eslint-disable */
import React, { Component, useState, useEffect } from 'react';
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

    if (hist) {

        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron col-12 bg-primary pt-1">
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
                    </div>
                </div>
            </div>
        )
    }
    else return (<div className="text-center spinner-border"></div>)
}

export default HistoryFull;
