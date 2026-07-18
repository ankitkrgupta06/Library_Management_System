import React from 'react'
import {Navigate, Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ProtectedRoute from './shared/ProtectedRoute';
import AdminLayout from './admin/AdminLayout';
import AdminDashboardPage from './admin/AdminDashboardPage';
import AdminBookPage from './admin/AdminBookPage';
import AdminUsersPage from './admin/AdminUsersPage';
import AdminFinesPage from './admin/AdminFinesPage';
import UserDashboardPage from './user/UserDashboardPage';
import UserLayout from './user/UserLayout';
import UserBooksPage from './user/UserBooksPage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/signup" element={<SignUp/>}/>

      <Route element={<ProtectedRoute allowedRole="admin"/>}>
        <Route path='/admin' element={<AdminLayout/>}>
          <Route index element={<Navigate to="/admin/dashboard" replace/>}/>
          <Route path='dashboard' element={<AdminDashboardPage/>}/>
          <Route path='books' element={<AdminBookPage/>}/>
          <Route path='users' element={<AdminUsersPage/>}/>
          <Route path='fines' element={<AdminFinesPage/>}/>
        </Route>
      </Route>

      <Route element={<ProtectedRoute allowedRole="user"/>}>
        <Route path='/user' element={<UserLayout/>}>
          <Route index element={<Navigate to="/user/dashboard" replace/>}/>
          <Route path='dashboard' element={<UserDashboardPage/>}/>
          <Route path='books' element={<UserBooksPage/>}/>
        </Route>
      </Route>

    </Routes>
  )
}

export default App