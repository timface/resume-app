import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class WorkHistory extends Component{
    constructor(props){
        super(props);

        this.state = {
            workHistory: null,
        };
    }

    async componentDidMount(){
        const workHistory = (await axios.get('http://localhost:8081/')).data;
        this.setState({
            workHistory,
        });
    }

    render(){
        return (
            <div className="container">
                <div className="row">
                    {this.state.workHistory === null && <p>Loading History...</p>}
                    {this.state.workHistory && this.state.workHistory.map(history => (
                        <div key={history.id} className="col-sm-12 col-md-4 col-lg-3">
                            <Link to={`/history/${history.id}`}>
                                <div className="card text-white bg-success mb-3">
                                    <div className="card-header">Details: {history.details}</div>
                                    <div className="card-body">
                                        <h4 className="card-title">{history.title}</h4>
                                        <p className="card-text">{history.description}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))
                    }
                </div>
            </div>
        )
    }
}

export default WorkHistory;