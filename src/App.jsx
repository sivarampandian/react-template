import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import HeaderPage from './components/header/Header';
import Tailorpage from './components/Tailor/Tailor';
import Buttons from './components/button/Button';
import Measure from './components/measure/Measure';
import Menus from './components/menu/Menu';
import Visit from './components/visitpage/visit';
import Images from './components/images/images';
import News from './components/news/new';
import Logo from './components/logo/logo';



function App() {
  return (
    <>
      <HeaderPage />
      <Tailorpage/>
      <Measure/>
      <Menus/>
      <Visit/>
      <Images/>
      <News/>
      <Logo/>

    </>
  );
}

export default App;
