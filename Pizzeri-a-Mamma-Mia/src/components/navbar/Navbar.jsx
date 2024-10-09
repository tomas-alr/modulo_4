import React, { useState } from 'react';
import Home from "./home/Home";
import RegisterPage from "./register/Register";
import LoginPage from "./login/Login";

const Navbar = () => {
  const [currentPage, setCurrentPage] = useState('home'); // Estado para controlar la página actual
  const token = false; // Simula si el usuario está logueado o no

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'login':
        return <LoginPage />;
      case 'register':
        return <RegisterPage />;
      default:
        return <Home />;
    }
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <button onClick={() => setCurrentPage('home')} className="navbar-brand btn btn-link text-white">Pizzeria Jaimelen!</button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <button onClick={() => setCurrentPage('home')} className="btn btn-outline-light m-2">🍕 Home</button>
              </li>
              {token ? (
                <>
                  <li className="nav-item">
                    <button className="btn btn-outline-light m-2">🔓 Profile</button>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-outline-light m-2">🔒 Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <button onClick={() => setCurrentPage('login')} className="btn btn-outline-light m-2">🔐 Login</button>
                  </li>
                  <li className="nav-item">
                    <button onClick={() => setCurrentPage('register')} className="btn btn-outline-light m-2">🔐 Register</button>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {/* Renderiza la página seleccionada */}
      {renderPage()}
    </>
  );
};

export default Navbar;
