import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
// import Orders from "./pages/Orders";
import About from "./pages/About";
import Profile from "./pages/Profile";

import { useStateValue } from "./context/StateProvider";
import ProtectedRoute from "./pages/ProtectedRoute";
const App = () => {
  const [{ user }, dispatch] = useStateValue();

  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
          <Route path="/about" element={<About />} />
          {/* <Route path="/previousorders" element={<Orders />} /> */}
          <Route path="/profile" element={<Profile />} />

        </Routes>
        <Footer />
      </Router>
    </>
  );
};

export default App;
