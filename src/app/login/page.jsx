'use client';

import { useState } from 'react';
import LoginScreen from '@components/login/LoginScreen';
import RegisterScreen from '@components/registro/RegisterScreen';

function LoginPage() {
  const [currentScreen, setCurrentScreen] = useState('login'); 
  
  const handleSwitchScreen = (screenName) => {
    setCurrentScreen(screenName);
  };

  return (
    <div className="App" style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '100vh', 
      backgroundColor: '#1E1E3F' 
    }}>
      {currentScreen === 'login' ? (
        <LoginScreen onSwitchToRegister={() => handleSwitchScreen('register')} />
      ) : (
        <RegisterScreen onSwitchToLogin={() => handleSwitchScreen('login')} />
      )}
    </div>
  );
}

export default LoginPage;