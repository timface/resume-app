/* eslint-disable */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HistoryFull(props) {
    const historyId = props.match.params.historyId;
    let history = props.data.find(el => el.id == historyId);
    //eslint-disable-next-line
    const [hist, setHistory] = useState(history);

    // async function fetchData() {
    //     const data = await axios.get(`http://localhost:8081/histories/${historyId}`).then(
    //         resp => resp.data
    //     );
    //     setHistory(data);
    // }

    // useEffect(() => {
    //     fetchData();
    // }, []
    // );

    return (
        <div className="container text-white">
            <div className="row d-flex justify-content-center">
                {hist === null && <div className="text-center spinner-border"></div>}
                {hist && <div className="jumbotron col-12 bg-info pt-1">
                    <h1 className="display-3">{hist.title}</h1>
                    <p className="font-italic">{hist.yearStart} - {hist.yearEnd}</p>
                    <h3>{hist.location}</h3>
                    <hr className="my-4" />
                    {hist.isEmpHist && <HistoryWorkDetails {...hist} />}
                    {!hist.isEmpHist && <HistoryEduDetails {...hist} />}
                </div>
                }
            </div>
        </div>
    )
}

function HistoryWorkDetails(props) {
    return (
        <div>
            <p className="text-justify">{props.overview}</p>
            <h4>Key Responsibilities:</h4>
            <ul>
                {
                    props.activities.map((detail, idx) => (
                        <li className="lead" key={idx}>{detail}</li>
                    ))
                }
            </ul>
            <h4>Achievements:</h4>
            <ul>
                {
                    props.achievements.map((detail, idx) => (
                        <li className="lead" key={idx}>{detail}</li>
                    ))
                }
            </ul>
        </div>
    )
}

function HistoryEduDetails(props){
    return (
        <div>
            <p className="text-justify">{props.overview}</p>
            <h4>Achievements:</h4>
            <ul>
                {
                    props.achievements.map((detail, idx) => (
                        <li className="lead" key={idx}>{detail}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default HistoryFull;
