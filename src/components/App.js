import Dashboard from "./Dashboard";
import Navigation from "./Navigation";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from "react-bootstrap";
import { AuthProvider } from "../contexts/AuthContext";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import SignupPage from "../pages/SignupPage";
import LoginPage from "../pages/LoginPage";
function App() {
  return (
    <Router>
      <AuthProvider>
        <Navigation />
        <Routes>
          <Route exact path='/' element={<Dashboard />}/>
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
