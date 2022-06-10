import React from 'react';
import Navbar from '../src/Components/Navbar';
import Header from '../src/Components/Header';
import Services from './Components/Services';
import About from './Components/About';
import Contact from './Components/Contact';
import JoinMentors from './Components/JoinMentors';
import Login from './Components/Login';

function Home() {
    return (
        <div className="App">
            <Navbar/>
            <Header/>
            {/* <Login/> */}
            <Services/>
            <JoinMentors/>
            <About/>
            <Contact/>
        </div>      
    )
}

export default Home;
