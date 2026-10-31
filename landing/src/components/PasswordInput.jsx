import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';

export function PasswordInput({
  id,
  value,
  onChange,
  placeholder = 'Enter your password',
  required = true,
  className = '',
}) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative">
      <input
        id={id}
        type={showPassword ? 'text' : 'password'}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className={`w-full pr-11 bg-gray-100 border-0 rounded-xl text-sm text-gray-800 placeholder-gray-400 focus:ring-2 focus:ring-purple-400 focus:outline-none focus:bg-white transition ${className}`}
      />
      <button
        type="button"
        aria-label="Toggle password visibility"
        onClick={() => setShowPassword((prev) => !prev)}
        className="password-toggle-btn absolute inset-y-0 right-0 pr-3.5 flex items-center text-gray-400 hover:text-gray-600 cursor-pointer transition"
      >
        {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
      </button>
    </div>
  );
}

