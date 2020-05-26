/* eslint-disable */
import React, {Component, useState, useEffect} from 'react';
import axios from 'axios';

// class History extends Component{
//     constructor(props){
//         super(props);
//         this.state = {
//             history: null,
//         };
//     }

//     async componentDidMount(){
//         const { match: { params } } = this.props;
//         const history = (await axios.get(`http://localhost:8081/${params.historyId}`)).data;
//         this.setState({
//             history,
//         });        
//     }

//     render(){
//         const {history} = this.state;
//         if (history === null) return <p>Loading...</p>;
//         return (
//             <div className="container">
//                 <div className="row">
//                     <div className="jumbotron col-12">
//                         <h1 className="display-3">{history.title}</h1>
//                         <p className="lead">{history.location}</p>
//                         <hr className="my-4" />
//                             <p>Details:</p>
//                             {
//                                 history.details.map((detail, idx) => (
//                                  <p className="lead" key={idx}>{detail.detail}</p>
//                                 ))
//                             }
//                     </div>
//                 </div>
//             </div>
//         )
//     }
// }

function HistoryFull(props){
    console.log(props.id);
    const [history, setHistory] = useState(null);
    console.log(history)

    async function fetchData(){
        setHistory(await axios.get(`http://localhost:8081/${props.id}`).data);
    }

    useEffect(()=> 
        { 
            console.log("fething");
            fetchData();
        },
    );

    if (history){

    return (
        <div className="container">
                <div className="row">
                    <div className="jumbotron col-12">
                        <h1 className="display-3">{history.title}</h1>
                        <p className="lead">{history.location}</p>
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
                        else return (<p>Nothing</p>)
}

export default HistoryFull;
