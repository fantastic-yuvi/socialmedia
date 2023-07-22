import React from 'react';
import './App.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import { Home } from './pages/main/home';
import { Login } from './pages/login';
import { Navbar } from './Components/navbar';
import {CreatePost} from './pages/create-post/create-post';
import {NavbarNew} from './Components/navbarnew';
function App() {
  return (
    <div className="App">
     <Router>
      <NavbarNew />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route  path="/createpost" element={<CreatePost />}/>
      </Routes>
     </Router>
    </div>
  );
}

export default App;
