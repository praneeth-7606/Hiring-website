// import logo from './logo.svg';
import './App.css';

import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Login from './components/login';
import Home from './components/home';
import Next from './components/next';
import Page1 from './components/page1';
import Forgotpassword from './components/forgotpassword';
import Signup from './components/signup';
import Google from './components/google';



function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/page1" element={<Page1/>}/>
      <Route path="/next" element={<Next/>}/>
      <Route path="/forgot" element={<Forgotpassword/>}/>
      <Route path="/signup"element={<Signup/>}/>
      <Route path="/google" element={<Google/>}/>
      </Routes>
    </BrowserRouter>
    {/* <Home/> */}
    
    
    
    </div>
  );
}

export default App;
