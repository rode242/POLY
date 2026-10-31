import React, { useState } from 'react';
import { OAuthButtons } from '../components/OAuthButtons';
import { PasswordInput } from '../components/PasswordInput';
import { useAuthStore } from '../store/useAuthStore';
import { useToastStore } from '../store/useToastStore';

export function SignInPanel() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);

  const setMode = useAuthStore((state) => state.setMode);
  const signIn = useAuthStore((state) => state.signIn);
  const isLoading = useAuthStore((state) => state.isLoading);
  const showToast = useToastStore((state) => state.showToast);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signIn(email, password);
    showToast('Welcome back to InterviewAI! Redirecting...');
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    showToast('Password reset instructions sent to your email.');
  };

  return (
    <div
      className="form-panel sign-in-panel w-full md:w-1/2 min-h-[640px] md:absolute md:top-0 md:left-0 md:bottom-0 p-8 sm:p-12 flex flex-col justify-center items-center text-center z-10"
      id="sign-in-panel"
    >
      <div className="w-full max-w-sm">
        <h1 className="text-3xl font-bold text-gray-800 tracking-tight mb-2">Sign in</h1>

        {/* Social Login Buttons */}
        <OAuthButtons action="Sign in" />

        <p className="text-xs text-gray-500 mb-6">or use your account</p>

        {/* Sign In Form */}
        <form
          className="space-y-4 text-left"
          data-purpose="login-form"
          id="signin-form"
          onSubmit={handleSubmit}
        >
          {/* Email */}
          <div>
            <input
              id="signin-email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full px-4 py-3 bg-gray-100 border-0 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:outline-none focus:bg-white transition"
            />
          </div>

          {/* Password */}
          <PasswordInput
            id="signin-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            required
            className="px-4 py-3"
          />

          {/* Options */}
          <div className="flex items-center justify-between pt-1 text-xs text-gray-500">
            <label className="flex items-center gap-2 cursor-pointer select-none">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded border-gray-300 text-purple-600 focus:ring-purple-400"
              />
              <span>Remember me</span>
            </label>
            <a
              href="#"
              onClick={handleForgotPassword}
              className="hover:text-purple-700 transition-colors"
            >
              Forgot your password?
            </a>
          </div>

          {/* Primary CTA Button */}
          <button
            id="signin-submit-btn"
            type="submit"
            disabled={isLoading}
            className={`w-full mt-4 py-3 px-6 text-purple-950 font-bold text-sm tracking-wider uppercase rounded-xl transition duration-200 hover:opacity-95 active:scale-[0.99] cursor-pointer flex items-center justify-center gap-2 ${
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
                Signing in...
              </span>
            ) : (
              <span className="btn-text">SIGN IN</span>
            )}
          </button>
        </form>

        {/* Mobile Switch to Register */}
        <div className="mt-6 text-center md:hidden pt-4 border-t border-gray-100">
          <span className="text-xs text-gray-500">Don't have an account? </span>
          <button
            type="button"
            id="mobile-to-register-btn"
            onClick={() => setMode('signUp')}
            className="text-xs font-semibold text-purple-700 hover:underline cursor-pointer"
          >
            Sign Up
          </button>
        </div>
      </div>
    </div>
  );
}

