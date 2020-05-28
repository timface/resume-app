import React, { Component } from 'react';
import axios from 'axios';
import HistoryCard from '../HistoryCard/HistoryCard';

class WorkHistory extends Component {
    constructor(props) {
        super(props);

        this.state = {
            workHistory: null,
        };

    }

    async componentDidMount() {
        const workHistory = (await axios.get('http://localhost:8081/')).data;
        this.setState({
            workHistory,
        });
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    {this.state.workHistory === null && <p>Loading History...</p>}
                    {this.state.workHistory && this.props.match.path.localeCompare("/workHistory") === 0 && this.state.workHistory
                        .filter(history => history.isEmpHist)
                        .map(history => (
                            <HistoryCard key={history.id} {...history} />
                        ))
                    }
                    {this.state.workHistory && this.props.match.path.localeCompare("/eduHistory") === 0 && this.state.workHistory
                        .filter(history => !history.isEmpHist)
                        .map(history => (
                            <HistoryCard key={history.id} {...history} />
                        ))
                    }
                </div>
            </div>
        )
    }
}

export default WorkHistory;