"use client"

import { Typewriter } from "react-simple-typewriter"

export default function AISearchTyping() {
  return (
    <div className="w-[260px] bg-white rounded-lg shadow-lg p-3">
      
      {/* AI Logo / Label */}
      <div className="flex items-center gap-2 mb-2">
        <div className="w-3 h-3 rounded-full bg-blue-500 animate-pulse" />
        <span className="text-xs font-semibold text-gray-600">
          AI Search
        </span>
      </div>

      {/* Search Bar */}
      <div className="border border-gray-300 rounded-md px-3 py-2 text-sm font-mono text-gray-800">
        <Typewriter
          words={[
            "Best SEO company in New York",
            "Rank on ChatGPT & Gemini",
            "AI visibility optimization",
            "const rank = improveAISEO();",
            "npm install ai-search-optimizer",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={50}
          deleteSpeed={30}
          delaySpeed={1200}
        />
      </div>
    </div>
  )
}
