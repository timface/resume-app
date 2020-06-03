import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import NavBar from './Navbar/NavBar';
import HistoryFull from './History/History';
import axios from 'axios';
import HistoryPage from './History/HistoryPage';
import SkillPage from './Skills/SkillPage';
import TestimonialPage from './TestimonialPage/TestimonialPage';
import AboutPage from './About/AboutPage';
import ContactForm from './Contact/ContactForm';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
    };

  }

  async componentDidMount() {
    await axios.get('/data.json').then(resp => {
       //console.log(resp.data)
       const data = JSON.parse(JSON.stringify(resp.data));
       this.setState({
        data,
      });
    }
    ).catch( error => 
      console.log(error)
    );
 }

  render() {
    return (
      <div>
        <NavBar />
        {this.state.data === null && <div className="spinner-border"></div>}
        {this.state.data &&
          <React.Fragment>
            <Route exact path='/' render={props => <AboutPage {...props} data={this.state.data.about} />} />
            <Route exact path='/workHistory' render={(props) => <HistoryPage {...props} data={this.state.data.histories} />} />
            <Route exact path='/eduHistory' render={(props) => <HistoryPage {...props} data={this.state.data.histories} />} />
            <Route exact path='/history/:historyId' render={(props) => <HistoryFull {...props} data={this.state.data.histories}/>} />
            <Route exact path='/skills' render={(props) => <SkillPage {...props} data={this.state.data.skills} />} />
            <Route exact path='/testimonials' render={props => <TestimonialPage {...props} data={this.state.data.testimonials} />} />
            <Route exact path='/contact' component={ContactForm} />
          </React.Fragment>
        }
      </div>
    )
  }
}

export default App;
