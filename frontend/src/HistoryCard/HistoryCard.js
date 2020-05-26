import React from 'react';
import {Link} from 'react-router-dom';

function HistoryCard(props){
    return (
        <div key={props.id} className="col-sm-12 col-md-4 col-lg-3">
            <Link to={`/history/${props.history.id}`}>
                <div className="card text-white bg-info mb-3">
                    <div className="card-body">
                        <h4 className="card-title">{props.history.title}</h4>
                        <p className="card-text">{props.history.description}</p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default HistoryCard;