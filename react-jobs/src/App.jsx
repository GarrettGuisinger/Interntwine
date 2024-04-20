import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Create_Account from './components/account_creation'
import Layout from './components/Layout'
import Home from './components/home_page'
import Landing from './components/landing_page'
import Inbox from './components/inbox_page'
import Events from "./components/Events_page"
import Jobs from "./components/Jobs_page"
import Employers from "./components/employer_page"
import Forgot from "./components/Forgot_Password"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import react from "react"
import ProtectedRoute from './components/ProtectedRoute';
import Not_Found from "./components/Not_Found"
import Forms from "./components/form"


function Logout(){
localStorage.clear()
return <Navigate to="/Landing"/>
}
function RegisterAndLogout(){
localStorage.clear()
return <Create_Account/>
}


function App() {
  return (
            <BrowserRouter>
                <Routes>
                      <Route path="/" element={<ProtectedRoute><Home/></ProtectedRoute>}/>
                      <Route path="/Inbox" element={<ProtectedRoute><Inbox/></ProtectedRoute>} />
                      <Route path="/Landing" element={<Landing/>} />
                      <Route path="/Events" element={<ProtectedRoute><Events/></ProtectedRoute>} />
                      <Route path="/Jobs" element={<ProtectedRoute><Jobs/></ProtectedRoute>} />
                      <Route path="/Employers" element={<ProtectedRoute><Employers/></ProtectedRoute>} />
                      <Route path="/Forgotpassword" element={<Forgot />} />
                      <Route path="/logout" element={<Logout />} />
                      <Route path="/Createaccount" element={<RegisterAndLogout/>}/>
                      <Route path="*" element={<Not_Found/>}/>
                    
                  </Routes>
            </BrowserRouter>
  )
}

export default App