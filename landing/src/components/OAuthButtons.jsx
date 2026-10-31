import React from 'react';
import { useToastStore } from '../store/useToastStore';

export function OAuthButtons({ action = 'Sign in' }) {
  const showToast = useToastStore((state) => state.showToast);

  const handleClick = (provider) => {
    showToast(`Connecting with ${provider}...`);
  };

  return (
    <div className="flex items-center justify-center gap-3 my-4" data-purpose="oauth-providers">
      <button
        aria-label={`${action} with Google`}
        className="oauth-btn border border-gray-300 bg-white text-gray-600 rounded-full w-11 h-11 flex items-center justify-center hover:border-purple-500 hover:text-purple-600 active:scale-95 transition cursor-pointer shadow-sm"
        data-provider="Google"
        type="button"
        onClick={() => handleClick('Google')}
      >
        <svg className="w-5 h-5" viewBox="0 0 24 24">
          <path
            d="M12 5c1.5 0 2.8.5 3.8 1.4l2.8-2.8C16.9 2 14.6 1.2 12 1.2 7.4 1.2 3.5 3.8 1.6 7.6l3.3 2.5C5.8 7.2 8.6 5 12 5z"
            fill="#EA4335"
          />
          <path
            d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.7l3.7 2.9c2.2-2 3.7-5 3.7-8.8z"
            fill="#4285F4"
          />
          <path
            d="M4.9 14.9c-.3-.8-.4-1.8-.4-2.9 0-1 .2-2 .4-2.9L1.6 6.6C.6 8.5 0 10.7 0 13c0 2.3.6 4.5 1.6 6.4l3.3-4.5z"
            fill="#FBBC05"
          />
          <path
            d="M12 23c3.2 0 6-1.1 8-3l-3.7-2.9c-1.1.7-2.5 1.2-4.3 1.2-3.4 0-6.2-2.2-7.1-5.2L1.6 17.6C3.5 21.4 7.4 23 12 23z"
            fill="#34A853"
          />
        </svg>
      </button>
    </div>
  );
}

