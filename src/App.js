// import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Land from './Pages/Land';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="nav"></div>
        <div className="contents">
          <Routes>
            <Route element={<Land />} path='/' />
          </Routes>
        </div>
        <div className="footer"></div>
      </div>
    </Router>
  );
}

export default App;
