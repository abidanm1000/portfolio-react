import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import React, { useState } from 'react'

function App() {
  const [theme, setTheme] = useState('');
  let switchTheme = () => theme === '' ? setTheme('dark') : setTheme('');
  let switchIcon = theme === '' ? './icon-moon.svg' : './icon-sun.svg';
  
  return (
    <div className={`App ${theme}`}>
      <Header switchTheme={switchTheme} switchIcon={switchIcon} theme={theme}/>
      <Main theme={theme}/>
      <Footer theme={theme}/>
    </div>
  );
}

export default App;
