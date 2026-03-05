import { useState } from 'react';
import './App.css';
import Login from './components/Login';
import ContactList from './components/ContactList';
import ChatWindow from './components/ChatWindow';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeChatUser, setActiveChatUser] = useState(null);

  return (
    <>
      {!isLoggedIn ? (
        <Login onLogin={() => setIsLoggedIn(true)} />
      ) : (
        <>
          <ContactList onOpenChat={(user) => setActiveChatUser(user)} />
          {activeChatUser && (
            <ChatWindow 
              user={activeChatUser} 
              onClose={() => setActiveChatUser(null)} 
            />
          )}
        </>
      )}
    </>
  );
}

export default App;
