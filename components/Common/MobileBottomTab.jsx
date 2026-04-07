"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, Layers, User, Phone } from "lucide-react";
import { useEffect, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io5";

const leftTabs = [
  { name: "Home", href: "/", icon: Home },
  { name: "Services", href: "/services", icon: Layers },
];

const rightTabs = [
  { name: "About", href: "/about", icon: User },
  { name: "Contact", href: "/contact", icon: Phone },
];

export default function MobileBottomTab() {
  const pathname = usePathname();
  const [showBar, setShowBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;

      // Hide when scrolling down, show when scrolling up
      if (current > lastScrollY && current > 100) {
        setShowBar(false);
      } else {
        setShowBar(true);
      }

      setLastScrollY(current);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Don't show on certain pages if needed
  if (pathname.startsWith("/admin") || pathname.startsWith("/dashboard")) {
    return null;
  }

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 md:hidden transition-transform duration-300 ease-out
        ${showBar ? "translate-y-0" : "translate-y-full"}
      `}
    >
      {/* Background blur layer */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/5 to-transparent backdrop-blur-[1px] pointer-events-none" />

      <div className="relative mx-4 mb-4">
        {/* Main Navigation Bar */}
        <div
          className="relative h-16 rounded-2xl bg-white/95 backdrop-blur-xl border border-white/60 shadow-2xl shadow-black/10 flex items-center justify-between px-8"
        >
          {/* Left Tabs */}
          <div className="flex gap-10">
            {leftTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = pathname === tab.href;

              return (
                <Link
                  key={tab.name}
                  href={tab.href}
                  className={`flex flex-col items-center gap-1.5 text-xs font-medium transition-all duration-200
                    ${
                      isActive
                        ? "text-blue-600 scale-110"
                        : "text-gray-600 hover:text-gray-900 hover:scale-105"
                    }
                  `}
                >
                  <div
                    className={`relative p-2 rounded-full ${
                      isActive ? "bg-blue-50" : ""
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </Link> 
              );
            })}
          </div>

          {/* Right Tabs */}
          <div className="flex gap-10">
            {rightTabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = pathname === tab.href;

              return (
                <Link
                  key={tab.name}
                  href={tab.href}
                  className={`flex flex-col items-center gap-1.5 text-xs font-medium transition-all duration-200
                    ${
                      isActive
                        ? "text-blue-600 scale-110"
                        : "text-gray-600 hover:text-gray-900 hover:scale-105"
                    }
                  `}
                >
                  <div
                    className={`relative p-2 rounded-full ${
                      isActive ? "bg-blue-50" : ""
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

        {/* WhatsApp FAB */}
        <a
          href="https://wa.me/919876543210"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute left-1/2 -top-6 -translate-x-1/2 w-14 h-14 rounded-full bg-gradient-to-br from-[#25D366] to-[#128C7E] text-white flex items-center justify-center shadow-xl shadow-[#25D366]/30 border-[3.5px] border-white hover:scale-110 active:scale-95 transition-all duration-200 hover:shadow-2xl hover:shadow-[#25D366]/40 group"
          aria-label="Chat on WhatsApp"
        >
          {/* Animated Ring Pulse */}
          <div className="absolute inset-0 rounded-full border-2 border-[#25D366]/30 animate-ping" />

          {/* WhatsApp Icon */}
          <IoLogoWhatsapp
            size={28}
            className="group-hover:scale-110 transition-transform duration-200"
          />

          {/* Notification Badge */}
          {/* <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full 
            flex items-center justify-center border-2 border-white">
            <span className="text-[10px] font-bold">1</span>
          </div> */}
        </a>
      </div>
    </div>
  );
}
