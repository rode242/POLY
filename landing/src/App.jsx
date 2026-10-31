import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Toast } from './components/Toast';
import { Background3D } from './three/Background3D';
import { LandingPage } from './pages/LandingPage';
import { AnalyticsPage } from './pages/AnalyticsPage';

export function App() {
  return (
    <div className="bg-gray-100 text-gray-800 font-sans min-h-screen relative overflow-x-hidden flex flex-col justify-between selection:bg-purple-100 selection:text-purple-900">
      {/* Clean Grid Background */}
      <div className="fixed inset-0 clean-grid pointer-events-none z-0" />

      {/* 3D Visual Canvas (Three.js / React Three Fiber / Drei) */}
      <Background3D />

      {/* Soft warm ambient glowing accents */}
      <div
        className="fixed top-[-10%] left-[15%] w-[550px] h-[550px] rounded-full blur-[130px] pointer-events-none z-0 animate-pulse-slow"
        style={{ backgroundColor: 'rgba(221, 214, 254, 0.45)' }}
      />
      <div
        className="fixed bottom-[-10%] right-[12%] w-[600px] h-[600px] rounded-full blur-[140px] pointer-events-none z-0"
        style={{ backgroundColor: 'rgba(233, 213, 255, 0.4)' }}
      />

      {/* Interactive Toast Alert */}
      <Toast />

      {/* Top Header */}
      <Header />

      {/* Routing Pages */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/analytics" element={<AnalyticsPage />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

