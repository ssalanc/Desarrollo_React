import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

export default function MainLayout({ children, onNavigate, currentPage }) {
  return (
    <div className="main-layout">
      <Navigation onNavigate={onNavigate} currentPage={currentPage} />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
