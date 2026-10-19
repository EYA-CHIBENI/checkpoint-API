import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavUsers from './NavUsers';
import UserList from './UserList';
import Home from './Home';
import Profile from './Profile';

function App() {
  return (
    <div className="App">
      <NavUsers></NavUsers>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<UserList />}></Route>
        <Route path='/profile/:id' element={<Profile></Profile>}></Route>
      </Routes>
    </div>
  );
}

export default App;
