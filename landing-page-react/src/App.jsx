import { useState } from 'react';
import './styles/global.css';
import './App.css';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import DesignSystem from './pages/DesignSystem';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigation = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  return (
    <MainLayout onNavigate={handleNavigation} currentPage={currentPage}>
      {currentPage === 'home' && <Home />}
      {currentPage === 'design-system' && <DesignSystem />}
    </MainLayout>
  );
}

export default App;
