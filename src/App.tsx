/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Sermons from './pages/Sermons';
import Events from './pages/Events';
import Ministries from './pages/Ministries';
import Give from './pages/Give';
import Live from './pages/Live';
import NewBelievers from './pages/NewBelievers';
import GrowthTrack from './pages/GrowthTrack';
import Contact from './pages/Contact';
import Admin from './pages/Admin';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50 font-sans selection:bg-amber-200 selection:text-amber-900">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/sermons" element={<Sermons />} />
            <Route path="/events" element={<Events />} />
            <Route path="/ministries" element={<Ministries />} />
            <Route path="/give" element={<Give />} />
            <Route path="/live" element={<Live />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/new-believers" element={<NewBelievers />} />
            <Route path="/growth-track" element={<GrowthTrack />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
