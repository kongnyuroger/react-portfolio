import React from "react";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Block from "./components/pages/Block";
import Work from "./components/pages/Work";

function App() {
  return (
    <div className="App">
       <Router>
          <NavBar></NavBar>
          <Routes>
            <Route path='/' exact element={<Home/>}/>
            <Route path='block' exact element={<Block/>}/>
            <Route path='/work' exact element={<Work/>}/>
          </Routes>
       </Router>
    </div>
  );
}

export default App;
