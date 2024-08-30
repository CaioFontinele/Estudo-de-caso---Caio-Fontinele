import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import { Dashboard } from './Pages/Dashboard/Dashboard';
import { Login } from './Pages/Login/Login';



function App( ) {
  return (
    <div className="App">
      <header className="App-header">
        <Router>
 

          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />            
          </Routes>
        </Router>
      
      </header>
    </div>
  );
}

export default App;
