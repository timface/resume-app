import React, { useState } from 'react';
import HistoryCard from '../HistoryCard/HistoryCard';

function HistoryPage(props){
    //eslint-disable-next-line
    const [hist, setHistory] = useState(props.data);

    return(
        <div className="container">
                <div className="row">
                    {hist === null && <p>Loading History...</p>}
                    {hist && props.match.path.localeCompare("/workHistory") === 0 && hist
                        .filter(history => history.isEmpHist)
                        .map(history => (
                            <HistoryCard key={history.id} {...history} />
                        ))
                    }
                    {hist && props.match.path.localeCompare("/eduHistory") === 0 && hist
                        .filter(history => !history.isEmpHist)
                        .map(history => (
                            <HistoryCard key={history.id} {...history} />
                        ))
                    }
                </div>
            </div>
    )
}

export default HistoryPage;