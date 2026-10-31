import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  BarChart,
  Bar,
} from 'recharts';
import { Award, ShieldCheck, Zap, Activity } from 'lucide-react';

const PERFORMANCE_DATA = [
  { session: 'Session 1', score: 68, benchmark: 65 },
  { session: 'Session 2', score: 74, benchmark: 68 },
  { session: 'Session 3', score: 81, benchmark: 72 },
  { session: 'Session 4', score: 89, benchmark: 75 },
  { session: 'Session 5', score: 94, benchmark: 78 },
];

const SKILL_RADAR = [
  { subject: 'System Design', score: 92, fullMark: 100 },
  { subject: 'Algorithms', score: 88, fullMark: 100 },
  { subject: 'Communication', score: 95, fullMark: 100 },
  { subject: 'Integrity & Focus', score: 98, fullMark: 100 },
  { subject: 'Speed & Cadence', score: 85, fullMark: 100 },
];

const INTEGRITY_METRICS = [
  { metric: 'Audio Stability', value: 99 },
  { metric: 'Focus Score', value: 96 },
  { metric: 'Latency Control', value: 94 },
  { metric: 'Cadence Normal', value: 97 },
];

export function AssessmentAnalyticsSection() {
  return (
    <div className="w-full max-w-6xl mx-auto py-12 px-4 sm:px-6">
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 text-purple-700 text-xs font-semibold uppercase tracking-wider mb-3">
          <Activity className="w-3.5 h-3.5" />
          AdaptiveIQ Telemetry & Analytics
        </div>
        <h2 className="text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Real-time Interview Diagnostics & Integrity
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-sm text-gray-500">
          Continuous AI assessment metrics measuring vocal cadence, algorithmic rigor, and response consistency.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Score Progression Area Chart */}
        <div className="lg:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 flex flex-col justify-between">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="text-lg font-bold text-gray-800">Mock Session Mastery Curve</h3>
              <p className="text-xs text-gray-400">Score performance vs global applicant benchmark</p>
            </div>
            <div className="flex items-center gap-4 text-xs font-medium">
              <span className="flex items-center gap-1.5 text-purple-700">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-600"></span> Candidate
              </span>
              <span className="flex items-center gap-1.5 text-gray-400">
                <span className="w-2.5 h-2.5 rounded-full bg-gray-300"></span> Benchmark
              </span>
            </div>
          </div>

          <div className="w-full h-64">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={PERFORMANCE_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <defs>
                  <linearGradient id="scoreGrad" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#a855f7" stopOpacity={0.4} />
                    <stop offset="95%" stopColor="#c084fc" stopOpacity={0.0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#f1f5f9" />
                <XAxis dataKey="session" stroke="#94a3b8" fontSize={12} tickLine={false} />
                <YAxis domain={[50, 100]} stroke="#94a3b8" fontSize={12} tickLine={false} />
                <Tooltip
                  contentStyle={{
                    backgroundColor: '#ffffff',
                    borderRadius: '12px',
                    boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)',
                    border: '1px solid #f1f5f9',
                    fontSize: '12px',
                  }}
                />
                <Area
                  type="monotone"
                  dataKey="score"
                  stroke="#7c3aed"
                  strokeWidth={3}
                  fillOpacity={1}
                  fill="url(#scoreGrad)"
                />
                <Area
                  type="monotone"
                  dataKey="benchmark"
                  stroke="#cbd5e1"
                  strokeWidth={2}
                  strokeDasharray="4 4"
                  fill="none"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-6 border-t border-gray-100 mt-4 text-center">
            <div>
              <div className="text-2xl font-extrabold text-purple-900">+38%</div>
              <div className="text-xs text-gray-500 font-medium">Cadence Velocity</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-purple-900">94.2%</div>
              <div className="text-xs text-gray-500 font-medium">Avg Percentile</div>
            </div>
            <div>
              <div className="text-2xl font-extrabold text-purple-900">Top 3%</div>
              <div className="text-xs text-gray-500 font-medium">Integrity Tier</div>
            </div>
          </div>
        </div>

        {/* Skill Radar Chart */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-xl border border-gray-100 flex flex-col justify-between">
          <div className="mb-2">
            <h3 className="text-lg font-bold text-gray-800">Competency Matrix</h3>
            <p className="text-xs text-gray-400">Rubric breakdown across dimensions</p>
          </div>

          <div className="w-full h-64 flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={SKILL_RADAR}>
                <PolarGrid stroke="#e2e8f0" />
                <PolarAngleAxis dataKey="subject" stroke="#64748b" fontSize={11} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} stroke="#cbd5e1" fontSize={10} />
                <Radar
                  name="Score"
                  dataKey="score"
                  stroke="#7c3aed"
                  fill="#c084fc"
                  fillOpacity={0.45}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          <div className="pt-4 border-t border-gray-100 flex items-center justify-between text-xs text-gray-500">
            <span className="flex items-center gap-1 font-semibold text-purple-700">
              <Zap className="w-3.5 h-3.5" /> Calibrated against 50k+ interviews
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

