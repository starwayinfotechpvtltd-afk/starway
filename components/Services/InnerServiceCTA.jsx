"use client"

import { motion } from "framer-motion"

export default function FinalServiceCTA({
  icon: Icon,
  title,
  description,
  contactInfo = [],
  formTitle,
  challenges = [],
  primaryCta,
  secondaryCta,
  theme = {
    from: "from-blue-600",
    via: "via-indigo-600",
    to: "to-blue-800",
  },
}) {
  return (
    <section
      className={`py-20 px-4 sm:px-6 lg:px-8 bg-secondary`}
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT CONTENT */}
            <div>
              {Icon && (
                <div className="hidden  w-20 h-20 rounded-2xl bg-blue-700/20 backdrop-blur-sm md:flex items-center justify-center mb-8">
                  <Icon className="w-10 h-10 text-destructive" />
                </div>
              )}

              <h3 className="text-4xl md:text-5xl font-bold text-destructive mb-6">
                {title}
              </h3>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                {description}
              </p>

              {/* CONTACT INFO (OPTIONAL) */}
              {contactInfo.length > 0 && (
                <div className="space-y-4 mb-8">
                  {contactInfo.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-destructive">
                      <item.icon className="w-5 h-5" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* RIGHT FORM */}
            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <h4 className="text-2xl font-bold text-gray-900 mb-6">
                {formTitle}
              </h4>

              <form className="space-y-6">
                {/* Business Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Business Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your business name"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  />
                </div>

                {/* Challenges */}
                <div className="hidden md:block">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Your Biggest Challenge
                  </label>
                  <select
                    className="w-full px-4 py-3 rounded-lg border border-gray-300focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none"
                  >
                    <option value="">Select a challenge</option>
                    {challenges.map((challenge, idx) => (
                      <option key={idx} value={challenge.value}>
                        {challenge.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* ACTION BUTTONS */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="flex-1 px-8 py-4 bg-primary text-white rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2"
                  >
                    {primaryCta.icon && <primaryCta.icon className="w-5 h-5" />}
                    {primaryCta.text}
                  </motion.button>

                  {secondaryCta && (
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="button"
                      className="flex-1 px-8 py-4 text-destructive bg-gray-100 rounded-lg font-semibold text-lg inline-flex items-center justify-center gap-2"
                    >
                      {secondaryCta.icon && (
                        <secondaryCta.icon className="w-5 h-5" />
                      )}
                      {secondaryCta.text}
                    </motion.button>
                  )}
                </div>

                <p className="text-gray-500 text-sm text-center">
                  No spam. Your information is safe with us.
                </p>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
