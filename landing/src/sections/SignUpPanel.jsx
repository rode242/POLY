import React, { useState } from 'react';
import { OAuthButtons } from '../components/OAuthButtons';
import { PasswordInput } from '../components/PasswordInput';
import { RoleChips } from '../components/RoleChips';
import { useAuthStore } from '../store/useAuthStore';
import { useToastStore } from '../store/useToastStore';

export function SignUpPanel() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const setMode = useAuthStore((state) => state.setMode);
  const selectedTrack = useAuthStore((state) => state.selectedTrack);
  const signUp = useAuthStore((state) => state.signUp);
  const isLoading = useAuthStore((state) => state.isLoading);
  const showToast = useToastStore((state) => state.showToast);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signUp(name, email, password, selectedTrack);
    showToast("Account created! Let's begin your first mock session.");
  };

  return (
    <div
      className="form-panel sign-up-panel w-full md:w-1/2 min-h-[640px] md:absolute md:top-0 md:left-0 md:bottom-0 p-8 sm:p-12 flex flex-col justify-center items-center text-center z-1"
      id="sign-up-panel"
    >
      <div className="w-full max-w-sm">
        <h2 className="text-3xl font-bold text-gray-800 tracking-tight mb-2">Create Account</h2>

        {/* Social Login Buttons */}
        <OAuthButtons action="Sign up" />

        <p className="text-xs text-gray-500 mb-4">or use your email for registration</p>

        {/* Register Form Fields */}
        <form
          className="space-y-3 text-left"
          data-purpose="registration-form"
          id="signup-form"
          onSubmit={handleSubmit}
        >
          {/* Full Name */}
          <div>
            <input
              id="signup-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Full Name"
              required
              className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:outline-none focus:bg-white transition"
            />
          </div>

          {/* Email */}
          <div>
            <input
              id="signup-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-2.5 bg-gray-100 border-0 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:outline-none focus:bg-white transition"
            />
          </div>

          {/* Target Role Track Selection */}
          <RoleChips />

          {/* Password */}
          <PasswordInput
            id="signup-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="px-4 py-2.5"
          />

          {/* Submit Register Button */}
          <button
            id="signup-submit-btn"
            type="submit"
            disabled={isLoading}
            className={`w-full mt-3 py-3 px-6 text-purple-950 font-bold text-sm tracking-wider uppercase rounded-xl transition duration-200 hover:opacity-95 active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 ${
              isLoading ? 'opacity-90 cursor-wait' : ''
            }`}
            style={{
              background:
                'linear-gradient(135deg, rgb(221, 214, 254) 0%, rgb(196, 181, 253) 50%, rgb(167, 139, 250) 100%)',
              boxShadow: 'rgba(167, 139, 250, 0.35) 0px 8px 20px',
              border: '1px solid rgba(196, 181, 253, 0.7)',
            }}
          >
            {isLoading ? (
              <span className="inline-flex items-center gap-2">
                <svg className="animate-spin h-4 w-4 text-purple-950" viewBox="0 0 24 24" fill="none">
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  />
                </svg>
                Creating account...
              </span>
            ) : (
              <span className="btn-text">SIGN UP</span>
            )}
          </button>
        </form>

        {/* Mobile Switch to Sign In */}
        <div className="mt-4 text-center md:hidden pt-3 border-t border-gray-100">
          <span className="text-xs text-gray-500">Already have an account? </span>
          <button
            type="button"
            id="mobile-to-signin-btn"
            onClick={() => setMode('signIn')}
            className="text-xs font-semibold text-purple-700 hover:underline cursor-pointer"
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

