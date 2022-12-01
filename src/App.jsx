import TopBar from './components/TopBar';
import { LoginPage, RegisterPage, ForgotPasswordPage, ProfilePage } from './pages';
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <TopBar />
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
      </Routes>
    </>
  )
}

export default App
