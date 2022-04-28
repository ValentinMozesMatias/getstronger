import React from 'react';
// import Navbar from '../src/Components/Navbar';
// import Header from '../src/Components/Header';
// import Services from './Components/Services';
// import About from './Components/About';
// import Contact from './Components/Contact';
// import JoinMentors from './Components/JoinMentors';
import Mentors from './Components/Mentors';
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
    return (
        <Router>
            <Switch>
        <div className="App">
            <Route path="/" component={Home} exact />
            <Route path="/Mentors" component={Mentors} exact />
        </div>
        </Switch>
      </Router>      
    )
}

export default App;
