import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import useAuth from './hooks/useAuth';
import Chat from './pages/Chat';
import LandingPage from './pages/LandingPage';
import Dawarat from './pages/Dawarat';
function App() {
  const {user}=useAuth()
  return (
    <div className="App bg-white">

      <BrowserRouter>
      <Routes>
      <Route path="/" element={<LandingPage/>} />
      <Route path="/Dawarat" element={<Dawarat/>} />
        <Route path="/login" element={!user ? <Login/>: <Navigate to="/Chat"/>} />
        <Route path="/Signup" element={!user ? <Signup/>: <Navigate to="/Chat"/>}/>
        <Route path="/Chat" element={user ? <Chat/> : <Navigate to="/login"/>}/>
        <Route path="/Courses"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
