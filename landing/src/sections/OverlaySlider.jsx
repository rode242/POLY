import React from 'react';
import { Mic } from 'lucide-react';
import { useAuthStore } from '../store/useAuthStore';
import { InteractivePanda } from '../components/InteractivePanda';

export function OverlaySlider() {
  const setMode = useAuthStore((state) => state.setMode);

  return (
    <div
      className="overlay-slider hidden md:block absolute top-0 left-1/2 w-1/2 h-full overflow-hidden z-20 pointer-events-none"
      id="overlay-slider"
    >
      <div
        className="overlay-content-inner relative left-[-100%] h-full w-[200%] bg-gradient-to-br flex pointer-events-auto"
        id="overlay-content-inner"
        style={{
          background:
            'linear-gradient(135deg, rgb(233, 221, 255) 0%, rgb(221, 214, 254) 35%, rgb(196, 181, 253) 70%, rgb(167, 139, 250) 100%)',
        }}
      >
        {/* OVERLAY PANEL LEFT (Visible when in Register mode to switch back to Sign In) */}
        <div className="overlay-panel w-1/2 h-full p-10 sm:p-14 flex flex-col justify-center items-center text-center relative bg-gradient-to-br from-[#f3f0ff] via-[#e9d5ff] to-[#ddd6fe] text-gray-800">
          <div className="w-12 h-12 rounded-2xl bg-white/80 shadow-sm border border-purple-200/60 flex items-center justify-center text-purple-700 mb-6">
            <Mic className="w-6 h-6" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Welcome Back!
          </h2>
          <p className="text-gray-600 text-sm leading-relaxed max-w-xs mb-8">
            To keep practicing and tracking your mock interview progress, please sign in with your
            credentials.
          </p>
          <button
            id="overlay-to-signin-btn"
            type="button"
            onClick={() => setMode('signIn')}
            className="border-2 border-purple-700 bg-purple-700 text-white font-semibold rounded-full px-8 py-2.5 tracking-wider uppercase text-xs hover:bg-purple-800 hover:border-purple-800 transition duration-300 cursor-pointer active:scale-95 shadow-md shadow-purple-500/20"
          >
            SIGN IN
          </button>
        </div>

        {/* OVERLAY PANEL RIGHT (Default view in Sign In mode to prompt Sign Up) */}
        <div className="overlay-panel w-1/2 h-full p-10 sm:p-14 flex flex-col justify-center items-center text-center text-white relative">
          {/* Interactive Panda with Cursor-Tracking Eyes */}
          <div className="mb-4 flex items-center justify-center">
            <InteractivePanda className="w-24 sm:w-28" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Hello, Friend!
          </h2>
          <p className="text-gray-700 text-sm leading-relaxed max-w-xs mb-8">
            Enter your personal details and start your interview preparation journey with us.
          </p>
          <button
            id="overlay-to-signup-btn"
            type="button"
            onClick={() => setMode('signUp')}
            className="border-2 border-purple-700 bg-purple-700 text-white font-semibold rounded-full px-8 py-2.5 tracking-wider uppercase text-xs hover:bg-purple-800 hover:border-purple-800 transition duration-300 cursor-pointer active:scale-95 shadow-md shadow-purple-500/20"
          >
            SIGN UP
          </button>
        </div>
      </div>
    </div>
  );
}

