"use client"

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts"

export default function RankProgressChart({ data }) {
  return (
    <div className="w-[220px] h-[140px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 8, right: 6, left: -20, bottom: 0 }}
        >
          {/* Grid */}
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            stroke="#E5E7EB"
          />

          {/* X Axis */}
          <XAxis
            dataKey="label"
            tick={{ fontSize: 10, fill: "#6B7280" }}
            axisLine={false}
            tickLine={false}
          />

          {/* Y Axis */}
          <YAxis
            domain={[0, 100]}
            tick={{ fontSize: 10, fill: "#9CA3AF" }}
            tickFormatter={(v) => `${v}%`}
            axisLine={false}
            tickLine={false}
          />

          {/* Gradient */}
          <defs>
            <linearGradient id="barBlue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#60A5FA" />
              <stop offset="100%" stopColor="#2563EB" />
            </linearGradient>
          </defs>

          {/* Bars */}
          <Bar
            dataKey="value"
            fill="url(#barBlue)"
            radius={[6, 6, 0, 0]}
            animationDuration={800}
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
