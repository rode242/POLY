import React from 'react';
import { useAuthStore } from '../store/useAuthStore';

const ROLES = [
  { id: 'fin', label: 'Finance & Quant' },
  { id: 'swe', label: 'Software Eng' },
  { id: 'pm', label: 'Product Mgmt' },
  { id: 'ds', label: 'Data & AI' },
];

export function RoleChips() {
  const selectedTrack = useAuthStore((state) => state.selectedTrack);
  const setSelectedTrack = useAuthStore((state) => state.setSelectedTrack);

  return (
    <div className="my-1">
      <div className="grid grid-cols-2 gap-1.5" id="role-chips-container">
        {ROLES.map((role) => {
          const isActive = selectedTrack === role.id;
          return (
            <button
              key={role.id}
              type="button"
              data-track={role.id}
              onClick={() => setSelectedTrack(role.id)}
              className={`role-chip py-1.5 px-2 rounded-lg text-xs font-medium border text-center transition-all cursor-pointer ${
                isActive
                  ? 'active bg-purple-50 border-purple-500 text-purple-700 font-semibold shadow-xs'
                  : 'bg-gray-50 border-gray-200 text-gray-600 hover:bg-gray-100 hover:border-gray-300'
              }`}
            >
              {role.label}
            </button>
          );
        })}
      </div>
      <input id="selected-role-track" type="hidden" value={selectedTrack} />
    </div>
  );
}

