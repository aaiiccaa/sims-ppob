import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import './App.css'
import Layout from './components/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Akun from './pages/Akun.jsx'
import { useSelector } from 'react-redux'
import { ToastContainer } from 'react-toastify'; 
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const token = useSelector((state) => state.auth.token)
  console.log(token)

  return (
    <BrowserRouter>
    <ToastContainer position="bottom-left"/>
      <Routes>
        <Route path='/login' element={!token ? <Login /> : <Navigate to="/" />} />
        <Route path='/register' element={<Register />} />

        <Route path='/' element={token ? <Layout /> : <Navigate to="/login"/>}>
          <Route index element={<Dashboard />} /> 
          <Route path='/akun' element={<Akun/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
