import { TopBar } from './components';
import { LoginPage, RegisterPage, ForgotPasswordPage, Home } from './pages';
import { Route, Routes } from "react-router";

function App() {
  return (
    <>
      <div className='bg-gray-50'>
        <div className="flex flex-col">
          <TopBar />
          <div className='mt-28'>
            <Home />
          </div>
        </div>
      </div>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/forgot-password' element={<ForgotPasswordPage />} />
      </Routes>
    </>
  )
}

export default App
