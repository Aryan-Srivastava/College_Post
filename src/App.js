import React from "react";
import { TopBar } from "./components";
import BottomBar from "./components/BottomBar.jsx";
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
import { createContext, useState } from "react";
import ReactSwitch from "react-switch";

export const ThemeContext = createContext(null);

function App() {
  const user = true;
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  };
  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="app"  id={theme}>
        <TopBar theme={theme} toggleTheme={toggleTheme} />
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
        <BottomBar />
      </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
