import React from 'react';
import { ShieldCheck, Lock, Award } from 'lucide-react';

export function Footer() {
  return (
    <footer
      className="relative z-20 w-full py-6 px-4 border-t border-gray-200/70 bg-white/70 backdrop-blur-sm"
      data-purpose="security-badges-footer"
    >
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1.5 font-medium text-gray-600">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            AdaptiveIQ Integrity Guard
          </span>
          <span className="flex items-center gap-1.5 font-medium text-gray-600">
            <Lock className="w-3.5 h-3.5 text-gray-400" />
            256-Bit Encrypted Sessions
          </span>
          <span className="hidden sm:flex items-center gap-1.5 font-medium text-gray-600">
            <Award className="w-3.5 h-3.5 text-purple-500" />
            Standardized Rubric v3.2
          </span>
        </div>
        <p className="text-gray-400">
          © {new Date().getFullYear()} InterviewAI & AdaptiveIQ. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

