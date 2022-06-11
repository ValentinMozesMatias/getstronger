import React from 'react';
// import Navbar from '../src/Components/Navbar';
// import Header from '../src/Components/Header';
// import Services from './Components/Services';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import JoinMentors from './Components/JoinMentors';
import Mentors from './Components/Mentors';
import Home from './Home';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
    return (
        <Router>
            
        <div 
            className="/App">
            <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/Mentors" component={Mentors} exact />
            </Switch>
        </div>
      </Router>      
    )
}

export default App;
