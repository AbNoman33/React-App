import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Blog from './components/Blog/Blog';
import About from './components/About/About';

import Home from './components/Home/Home';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  return (
    <>
    
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/blog' element={<Blog/>} />
        <Route path='/about' element={<About/>} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
