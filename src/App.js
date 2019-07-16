import React, { useState} from 'react';
import './App.css';
import { UserSessionContext } from './user-context';

import Navbar from './components/navbar';
import Auth from './components/auth';

const GUEST_USER = {__guest: true, displayName: 'Guest'}

function App() {
  const [user, setUser] = useState(GUEST_USER)

  function logIn(name) {
    setUser({ __guest: false, displayName: name })
  }

  function logOut() {
    setUser(GUEST_USER)
  }

  return (
    <UserSessionContext.Provider value={{ user, logIn, logOut }}>
    <>
    <Navbar />
    <div className="container">
      <Auth />
    </div>
    </>
    </UserSessionContext.Provider>
  );
}

export default App;
