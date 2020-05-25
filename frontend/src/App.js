import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import WorkHistory from './WorkHistory/WorkHistory';
import History from './History/History'

class App extends Component {
  render(){
    return (
      <div>
        <NavBar/>
        <Route exact path="/" component={WorkHistory}/>
        <Route exact path='/history/:historyId' component={History}/>
      </div>
    )
  }
}

export default App;
