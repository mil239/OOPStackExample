import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Login from './Login';
import Register from './Register';
import AuctionList from './AuctionList';
import Auction from './Auction';

function App() {
  return (
    <Router>
      <div>
        {/* Navigation bar with links */}
        <nav>
          <ul>
              <li>
                <Link to = "/">Home</Link>
              </li>
              <li>
                <Link to = "/Register">Register</Link>
              </li>
              <li>
                <Link to = "/Login">Login</Link>
              </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/Login" element ={<Login />} />
        <Route path="/Register" element ={<Register /> } />
        <Route exact path="/" element ={<AuctionList /> } />
        <Route path="/auction/:id" element ={<Auction /> } />
      </Routes>
    </Router>
  );
}

export default App;
