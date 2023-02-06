import React from "react";
import { TopBar } from "./components";
import {
  Login,
  Register,
  ForgotPassword,
  Home,
  About,
  Single,
  Write,
  Settings,
} from "./pages";
import { Route, Routes } from "react-router";

function App() {
  const user = true;
  return (
    <>
      <div className="">
        <TopBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={user ? <Write /> : <Register />} />
          <Route
            path="/settings"
            element={user ? <Settings /> : <Register />}
          />
          <Route path="/post/:postId" element={<Single />} />
          <Route path="/login" element={user ? <Home /> : <Login />} />
          <Route path="/register" element={user ? <Home /> : <Register />} />
          <Route
            path="/forgot-password"
            element={user ? <Home /> : <ForgotPassword />}
          />
          <Route path="/about" element={user ? <About /> : <Login />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
