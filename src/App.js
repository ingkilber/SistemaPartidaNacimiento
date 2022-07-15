import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

import { Routes, Route, Link } from "react-router-dom";

import PatidaN from "./PartidaN";

import { LoginButton } from "./Login";
import { LogoutButton } from "./Logout";
import { Profile } from "./Profile";
import logo from "./logo.svg";
import "./App.css";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />  <br />
        {isAuthenticated ? (
          <>
<div>
   
      <Link onClick={() => (PatidaN)} to="/PatidaN" className="btn btn-dark" >
          Ir a Partida De Nacimiento
        </Link>
        <Routes>
          <Route path="/PatidaN" element={<PatidaN />} />
       </Routes>
       </div>


            <Profile />
            <LogoutButton />
            
          </>
        ) : (
          <>
          <br />
          <LoginButton />
          </>
          
        )}
      </header>

     

    </div>
  );
}

export default App;