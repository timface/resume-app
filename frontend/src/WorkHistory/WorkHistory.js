import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import HistoryCard from '../HistoryCard/HistoryCard';

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
                        <HistoryCard history={history}/>
                    ))
                    }
                </div>
            </div>
        )
    }
}

export default WorkHistory;