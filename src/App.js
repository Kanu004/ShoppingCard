import './App.css';
import {Router,Routes,Route} from "react-router-dom";
import Navbar from './components/navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/"/>
          <Route path="/card"/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
