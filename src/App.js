import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route, Link} from "react-router-dom";
import Header from './component/Header'
import Home from './component/HOME/Home'
import Footer from './component/Footer'
import Login from './component/auth/Login'
import Layout from "./component/Layout";
import './styles/common.scss'
import CodeGathering from "./component/CODEGATHERING/CodeGathering";
import LoginCallback from "./component/LoginCallback";

function App() {
  return (
      <div className="App">
        <div className='app-container'>
          <Routes>
            <Route path="/" element={<Layout/>}>
                <Route path="" element={<Home />} />
                <Route path="code-gathering" element={<CodeGathering/>} />
                <Route path="test"/>
            </Route>
            <Route path="/login" element={<Login/>}/>
            <Route path="/:name/callback" element={<LoginCallback/>} />
            <Route path="about"/>
          </Routes>

        </div>

      </div>
  );
}

export default App;
