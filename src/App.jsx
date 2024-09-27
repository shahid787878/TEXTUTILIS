import React from 'react';
import Navbar from './components/Navbar';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Link
} from "react-router-dom";
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import NoteState from './context/notes/noteState';
import Today from './components/Today';
import Gallary from './components/Gallary';
import Shop from './components/Shop';
function App() {
  return (
    <>
 <NoteState>
 <Router>
  {/* <Incdec/> */}
     <header style={{height:'100px'}}> <Navbar /></header>
      <Shop/>
     
      {/* <Link to='/home'>Home</Link> is type ke off hone chahiye element ke liye
      <Link to='/about'>About</Link> */}
      <Routes>
      <Route path='/home' element={<Home/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/contact' element={<Contact/>} />
      <Route path='/converter' element={<Today/>} />
      <Route path='/gallary' element={<Gallary/>} />
    
      </Routes>
        <About/>
        
    
    </Router>

    </NoteState>
</>
  );
}
export default App;
