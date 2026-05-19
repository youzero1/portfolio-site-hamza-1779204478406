import { Routes, Route } from 'react-router-dom';
import Home from '@/pages/Home';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-bg text-fg antialiased">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}
