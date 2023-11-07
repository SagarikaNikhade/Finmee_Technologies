import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import Footer2 from './Components/Footer2';

function App() {
  return (
    <div className="App" style={{ backgroundImage: 'url("https://i.ytimg.com/vi/Pf1Lj_SHF28/sddefault.jpg")' }}>
      <Navbar/>
      <Home/>
      <Footer/>
      <Footer2/>
    </div>
  );
}

export default App;
