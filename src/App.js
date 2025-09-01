import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './frontend/Login';
import Register from './frontend/Register';
import Listing from './frontend/Listing';
import Home from './frontend/Home';
import Infrom from './frontend/Infrom';
import './App.css';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path="/" element={<Login/>}/>
          <Route path="/Login" element={<Login/>}/>
          <Route path="/Register" element={<Register />} />
          <Route path="/Listing" element={<Listing />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Infrom" element={<Infrom />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;