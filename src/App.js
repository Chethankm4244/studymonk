import "./App.css";
import Header from "./components/Header";
import Header2 from "./components/Header2";
import HomePage from "./components/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Search from "./components/Search";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            Component={() => (
              <>
                <Header />
                <Header2 />
                <HomePage />
                {/* <Contact/> */}
                
              </>
            )}
          />

          < Route path="/Login" Component={()=>(
            <Login />
          )}/>
          <Route  path="/Search" Component={()=>(
            <Search />
          )}/>
            
          
          < Route path="/Work" Component={()=>(
            <About/>
          )}/>
          < Route path="/Contact" Component={()=>(
            <Contact/>
          )}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
