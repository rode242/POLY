import React, { useEffect, useRef } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mic, BarChart2 } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { animateHeader } from '../animations/gsapAnimations';

export function Header() {
  const headerRef = useRef(null);
  const setMode = useAuthStore((state) => state.setMode);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    animateHeader(headerRef.current);
  }, []);

  const handleSignIn = () => {
    setMode('signIn');
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  const handleGetStarted = () => {
    setMode('signUp');
    if (location.pathname !== '/') {
      navigate('/');
    }
  };

  return (
    <header
      ref={headerRef}
      className="relative z-20 w-full px-6 py-5 max-w-7xl mx-auto flex items-center justify-between"
      data-purpose="site-navigation-bar"
    >
      {/* Brand Logo */}
      <Link
        to="/"
        className="flex items-center gap-2.5 group cursor-pointer"
        onClick={() => setMode('signIn')}
      >
        <div
          className="w-9 h-9 rounded-xl flex items-center justify-center text-purple-900 shadow-sm transition-transform duration-200 group-hover:scale-105"
          style={{
            background: 'linear-gradient(135deg, rgb(221, 214, 254) 0%, rgb(196, 181, 253) 100%)',
            boxShadow: 'rgba(167, 139, 250, 0.25) 0px 4px 14px',
          }}
        >
          <Mic className="w-5 h-5" />
        </div>
        <span className="text-xl font-bold tracking-tight text-gray-900">
          Interview<span style={{ color: 'rgb(124, 58, 237)' }}>AI</span>
        </span>
      </Link>

      {/* Center Navigation Links */}
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <Link
          to="/"
          className={`transition-colors hover:text-purple-700 ${
            location.pathname === '/' ? 'text-purple-700 font-semibold' : ''
          }`}
        >
          Practice
        </Link>
        <Link
          to="/analytics"
          className={`flex items-center gap-1.5 transition-colors hover:text-purple-700 ${
            location.pathname === '/analytics' ? 'text-purple-700 font-semibold' : ''
          }`}
        >
          <BarChart2 className="w-4 h-4" />
          <span>Analytics & Integrity</span>
        </Link>
      </nav>

      {/* Right Actions */}
      <div className="flex items-center gap-3">
        <button
          className="text-sm font-medium text-gray-700 hover:text-purple-700 transition-colors px-3 py-1.5 cursor-pointer"
          id="header-signin-btn"
          type="button"
          onClick={handleSignIn}
        >
          Sign In
        </button>
        <button
          className="text-sm font-semibold text-purple-950 px-4 py-2 rounded-xl transition cursor-pointer hover:opacity-95 active:scale-95"
          id="header-getstarted-btn"
          style={{
            background: 'linear-gradient(135deg, rgb(221, 214, 254) 0%, rgb(196, 181, 253) 100%)',
            boxShadow: 'rgba(167, 139, 250, 0.3) 0px 4px 14px',
            border: '1px solid rgba(196, 181, 253, 0.6)',
          }}
          type="button"
          onClick={handleGetStarted}
        >
          Get Started
        </button>
      </div>
    </header>
  );
}

