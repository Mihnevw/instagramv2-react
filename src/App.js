import { Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';

import Login from './components/Login';
import Register from './components/Register';
import Message from './components/Message';
import Home from './components/Home';
import Search from './components/Search';
import Explore from './components/Explore';
import Reels from './components/Reels';
import Notification from './components/Notifications';
import Create from './components/Create';
import Profile from './components/Profile';
import NotificationCard from './components/NotificationCard';
import NotificationList from './components/NotificationList';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <AuthProvider>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/search" element={<Search />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/message" element={<Message />} />
          <Route path="/notifications" element={<Notification />} />
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/threads" element={<Message />} />
          <Route path="/more" element={<Message />} />
          <Route path="/card" element={<NotificationCard />} />
          <Route path="/list" element={<NotificationList />} />
        </Routes>
      </div>
    </AuthProvider>
  );
}

export default App;
