src/App.jsx

import React, { useState } from 'react';
import LoginScreen from './components/LoginScreen';
import RegisterScreen from './components/RegisterScreen';
import './components/styles.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('login'); 
  const handleSwitchScreen = (screenName) => {
    setCurrentScreen(screenName);
  };

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh', backgroundColor: '#1E1E3F' }}>
      {currentScreen === 'login' ? (
        <LoginScreen onSwitchToRegister={() => handleSwitchScreen('register')} />
      ) : (
        <RegisterScreen onSwitchToLogin={() => handleSwitchScreen('login')} />
      )}
    </div>
  );
}
export default App;