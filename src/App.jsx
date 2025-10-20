import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/auth/Login.jsx'
import Register from './pages/auth/Register.jsx'
import './App.css'
import Layout from './components/Layout.jsx'
import Dashboard from './pages/Dashboard.jsx'
import Akun from './pages/Akun.jsx'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />

        <Route
          path='/'
          element={<Layout />}
        >
          <Route index element={<Dashboard />} /> 
          <Route path='/akun' element={<Akun/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App
