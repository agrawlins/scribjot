import React, {useContext} from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar.js'
import Footer from './components/Footer/Footer.js'
import Auth from './components/Login/Auth/Auth.js'
import Profile from './components/Profile/Profile.js'
import ProtectedRoute from './components/ProtectedRoute.js'
import { UserContext } from './context/UserProvider.js'
import NewEntry from './components/NewEntry.js'

const App = () => {
  const {token, logout} = useContext(UserContext)
  return (
    <div className="app">
      {token && <Navbar logout={logout}/>}
      <Routes>
        <Route 
          path="/" 
          element={token ? <Navigate to="/newentry"/> : <Auth />}
        />
        <Route 
          path="/profile"
          element={<ProtectedRoute token={token} redirectTo="/">
            <Profile />
          </ProtectedRoute>}
        />
        <Route 
          path="/newentry"
          element={<ProtectedRoute token={token} redirectTo="/">
            <NewEntry />
          </ProtectedRoute>}
        />
      </Routes>
      <Footer />
    </div>
  )
}

export default App