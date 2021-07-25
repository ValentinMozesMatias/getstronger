import React from 'react';
import Navbar from '../src/Components/Navbar';
import Header from '../src/Components/Header';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import JoinMentors from './Components/JoinMentors';
// import Mentors from './Components/Mentors';
import { Route } from 'react-router';

function App() {
    return (
        <div className="App">
            <Navbar/>
            <Header/>
            <Services/>
            <Route>
            <JoinMentors />
            </Route>
            {/* <Mentors/> */}
            <About/>
            <Contact/>
        </div>
    )
}

export default App;
