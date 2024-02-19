import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Hero from './Hero/Hero';
import Menu from './Menu/Menu';
import HomePage from './HomePage/HomePage';
import Footer from './Footer/Footer';
import LoginPage from './LoginPage/LoginPage';
import Aboutpage from './AboutPage/Aboutpage';

function App() {
  return (
    <Router>
      <Menu/>
      <Hero/>
      <div className="mainContainer">
        <Routes>
        <Route path="/about" element={<Aboutpage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/" element={<HomePage/>} />
        </Routes>
      </div>
      <Footer/>
    </Router>
  );
}

export default App;
