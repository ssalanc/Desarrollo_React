import Navigation from '../components/Navigation/Navigation';
import Footer from '../components/Footer/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Navigation />
      <main className="main-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}
