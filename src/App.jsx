import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './user/pages/Home';
import CheckHimaya from './user/pages/CheckHimaya';
import Login from './admin/pages/Login';
import Dashboard from './admin/pages/Dashboard';
import UsersList from './admin/pages/UsersList';
import ExpiredUsers from './admin/pages/ExpiredUsers';
import EditUsers from './admin/pages/EditUsers';

function App() {
  return (
    <>
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/log' element={<CheckHimaya />} />


          <Route path='/adminlogin' element={<Login />} />
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/users' element={<UsersList />} />
          <Route path='/expiredusers' element={<ExpiredUsers />} />
          <Route path='/edit/:id' element={<EditUsers />} />
        </Routes>
        <ToastContainer position="top-center" autoClose={500} />
      </div>
    </>
  );
}

export default App;
