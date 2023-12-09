import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from './pages/Login';
import Signup from './pages/Signup';
import useAuth from './hooks/useAuth';
import Chat from './pages/Chat';
import Messages from './pages/Messages';
import NewChat from './components/NewChat';
function App() {
  const {user}=useAuth()
  return (
    <div className="App ">
      <BrowserRouter>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={!user ? <Login/>: <Navigate to="/Chat"/>} />
        <Route path="/Signup" element={!user ? <Signup/>: <Navigate to="/Chat"/>}/>
        <Route path="/Chat" element={user ? <Chat/> : <Navigate to="/login"/>}/>
        <Route path='/Chat/:id' element={user ? <Messages /> : <Navigate to="/login"/>}/>
        <Route path="/CreateChat" element={user ? <NewChat/> : <Navigate to="/login"/>}/>
        <Route path="/Courses"/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
