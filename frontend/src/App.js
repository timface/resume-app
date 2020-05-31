import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import HistoryFull from './History/History';
import axios from 'axios';
import HistoryPage from './WorkHistory/HistoryPage';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
        data: null,
    };

}

async componentDidMount() {
    const data = (await axios.get('http://localhost:8081/')).data;
    this.setState({
        data,
    });
}

  render(){
    return (
      <div>
        <NavBar/>
        <Route exact path="/" />
        <Route exact path='/workHistory' render={(props) => <HistoryPage {...props} data={this.state.data}/>}/>
        <Route exact path='/eduHistory' render={(props) => <HistoryPage {...props} data={this.state.data}/>} />
        <Route exact path='/history/:historyId' render={(props) => <HistoryFull {...props}/>}/>
      </div>
    )
  }
}

export default App;
