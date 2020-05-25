import React, {Component} from 'react';
import axios from 'axios';

class History extends Component{
    constructor(props){
        super(props);
        this.state = {
            history: null,
        };
    }

    async componentDidMount(){
        const { match: { params } } = this.props;
        const history = (await axios.get(`http://localhost:8081/${params.historyId}`)).data;
        this.setState({
            history,
        });        
    }

    render(){
        const {history} = this.state;
        if (history === null) return <p>Loading...</p>;
        return (
            <div className="container">
                <div className="row">
                    <div className="jumbotron col-12">
                        <h1 className="display-3">{history.title}</h1>
                        <p className="lead">{history.description}</p>
                        <hr className="my-4" />
                            <p>Details:</p>
                            {
                                history.details.map((detail, idx) => (
                                 <p className="lead" key={idx}>{detail.detail}</p>
                                ))
                            }
                    </div>
                </div>
            </div>
        )
    }
}

export default History;