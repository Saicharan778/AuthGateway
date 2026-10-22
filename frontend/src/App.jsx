import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import { Navigate } from "react-router-dom";
import "./App.css";
import "./index.css";
import Signup from "./Signup";
import Login from "./Login";
import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Home";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="/signup" replace />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
