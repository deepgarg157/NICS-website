import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import About from './components/About/About';
import Team from './components/Team/Team';
import Contact from './components/Contact/Contact'
import Pricing from './components/Pricing/Pricing';
import Portfolio from './components/Portfolio/Portfolio';
import axios from 'axios'

// server URL
axios.defaults.baseURL = 'http://localhost:7000/'
// axios.defaults.baseURL = 'https://relieved-hare-veil.cyclic.app/'

function App() {
  return (
    <>
      <BrowserRouter >
        <Header />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/about' element={<About />}></Route>
          <Route path='/team' element={<Team />}></Route>
          <Route path='/contact' element={<Contact />}></Route>
          <Route path='/pricing' element={<Pricing />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
