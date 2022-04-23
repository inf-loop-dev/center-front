import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, Link } from "react-router-dom";
import Header from './component/Header'
import Home from './component/Home'
import Footer from './component/Footer'
import './styles/common.scss'

function App() {
  return (
    <div className="App">
      <div className='app-container'>


        <div className='header'>
          <Header></Header>
        </div>



        <div className='main'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" />
          </Routes>
        </div>

        <div className='footer'>
          <Footer></Footer>
        </div>



      </div>

    </div>
  );
}
export default App;
