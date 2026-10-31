import React, { useEffect, useRef } from 'react';
import { SignInPanel } from './SignInPanel';
import { SignUpPanel } from './SignUpPanel';
import { OverlaySlider } from './OverlaySlider';
import { useAuthStore } from '../store/useAuthStore';
import { animateEntrance } from '../animations/gsapAnimations';

export function AuthContainer() {
  const containerRef = useRef(null);
  const mode = useAuthStore((state) => state.mode);

  useEffect(() => {
    animateEntrance(containerRef.current, 0.2);
  }, []);

  return (
    <main
      className="relative z-20 flex-1 flex items-center justify-center px-4 py-6 sm:py-10"
      data-purpose="authentication-terminal"
    >
      {/* Outer Card Frame */}
      <div
        ref={containerRef}
        id="authContainer"
        className={`relative w-full max-w-4xl min-h-[640px] bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 ${
          mode === 'signUp' ? 'right-panel-active' : ''
        }`}
      >
        {/* UNDERLAY FORM 1: SIGN IN (Left Half) */}
        <SignInPanel />

        {/* UNDERLAY FORM 2: REGISTER (Right Half) */}
        <SignUpPanel />

        {/* DUAL-PANE SLIDING OVERLAY CONTAINER */}
        <OverlaySlider />
      </div>
    </main>
  );
}

