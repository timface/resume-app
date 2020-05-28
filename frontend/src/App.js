import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import WorkHistory from './WorkHistory/WorkHistory';
//import History from './History/History'
import HistoryFull from './History/History';

class App extends Component {
  render(){
    return (
      <div>
        <NavBar/>
        <Route exact path="/" component={WorkHistory}/>
        <Route exact path='/workHistory' component={WorkHistory}/>
        <Route exact path='/history/:historyId' render={(props) => <HistoryFull {...props}/>}/>
      </div>
    )
  }
}

export default App;
