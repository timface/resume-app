import React from 'react';
import {Link} from 'react-router-dom';

function HistoryCard(props){    
    return (
        <div className="col-sm-4 col-md-4 col-lg-6">
            <Link to={`/history/${props.id}`}>
                <div className="card text-white bg-info mb-3">
                    <div className="card-body">
                        <h4 className="card-title">{props.title}</h4>
                        <p className="card-text">{props.location}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default HistoryCard;