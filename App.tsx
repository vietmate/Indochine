import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import TourDetail from './pages/TourDetail';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Layout wrapper to handle conditional rendering of Nav/Footer
const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const isDashboard = location.pathname === '/dashboard';
  const isContact = location.pathname === '/contact';
  
  // Dashboard has its own sidebar, Contact has a specific fullscreen feel
  const showNav = !isDashboard;
  const showFooter = !isDashboard && !isContact;

  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-background-dark text-slate-900 dark:text-white transition-colors duration-300">
      {showNav && <Navbar transparent={location.pathname === '/' || location.pathname === '/contact'} />}
      <main className={`flex-grow ${isDashboard ? 'h-screen overflow-hidden' : ''}`}>
        {children}
      </main>
      {showFooter && <Footer />}
    </div>
  );
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tour/:id" element={<TourDetail />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
};

export default App;