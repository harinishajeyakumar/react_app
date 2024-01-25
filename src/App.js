//import logo from './logo.svg';
import './App.css';
//import TestComp from './classComponents/functionalComponents/testComponent';
//import TestClassComp from './classComponents/functionalComponents/testClassComponent';
// import PropsComponent from './classComponents/functionalComponents/PropsComponent';
// import StateComponent from './classComponents/StateComponent';
import NavBar from './classComponents/functionalComponents/NavBar';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import About from './classComponents/functionalComponents/About';
import Contact from './classComponents/functionalComponents/contact';
import Login from './classComponents/functionalComponents/Login';
import Home from './classComponents/functionalComponents/Home';
import Footer from './classComponents/functionalComponents/footer';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home />}></Route>
        <Route path="/About" element={<About/>}></Route>
        <Route path="/Contact" element={<Contact/>}></Route>
        <Route path="/Login" element={<Login/>}></Route>
      </Routes>
      </BrowserRouter>
      
      {/* <PropsComponent name ="Harinisha" course="Mern"></PropsComponent> */}
      {/* <header className="App-header"> */}
      
      
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <TestComp></TestComp> */}
        {/* <StateComponent></StateComponent> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
        
      {/* </header> */}
      
      <Footer />
      
    </div>
    
  );
  
}

export default App;
