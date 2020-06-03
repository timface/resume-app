import React, { useState } from 'react';
import HistoryCard from './HistoryCard';

function HistoryPage(props) {
    //eslint-disable-next-line
    const [hist, setHistory] = useState(props.data);

    const renderWorkHistory = () => {
        return (
            <React.Fragment>
                <div className="row justify-content-center mb-2">
                    <h2>Employment History</h2>
                </div>
                <div className="row justify-content-center">
                    {hist
                        .filter(history => history.isEmpHist)
                        .map(history => (
                            <HistoryCard key={history.id} {...history} />
                        ))}
                </div>
            </React.Fragment>
        )
    }

    const renderEduHistory = () => {
        return (
            <React.Fragment>
                <div className="row justify-content-center mb-2">
                    <h2>Education History</h2>
                </div>
                <div className="row justify-content-center">
                    {hist
                        .filter(history => !history.isEmpHist)
                        .map(history => (
                            <HistoryCard key={history.id} {...history} />
                        ))}
                </div>
            </React.Fragment>
        )
    }


    return (
        <div className="container text-white">
            {hist === null && <p>Loading History...</p>}
            {hist && props.match.path.localeCompare("/workHistory") === 0 && renderWorkHistory()
            }
            {hist && props.match.path.localeCompare("/eduHistory") === 0 && renderEduHistory()
            }
        </div>
    )
}

export default HistoryPage;