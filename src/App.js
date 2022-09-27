import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import{BrowserRouter,Route,Link, Routes,NavLink} from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';
import Welcome from './components/Welcome';
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Login/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/welcome" element={<Welcome/>}/>
      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
