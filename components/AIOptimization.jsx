


'use client';

import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export default function ChatGPTLaptopAnimation() {
  const containerRef = useRef(null);
  const chatContentRef = useRef(null);
  const userMessageRef = useRef(null);
  const aiResponseRef = useRef(null);
  const inputRef = useRef(null);
  const cursorRef = useRef(null);
  const [inputText, setInputText] = useState('');

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        repeat: -1,
        repeatDelay: 3
      });

      const queryText = "cafes near me";
      let typingIndex = 0;
      let typingInterval;

      function resetScene() {
        setInputText('');
        gsap.set(chatContentRef.current, { opacity: 0 });
        gsap.set(userMessageRef.current, { opacity: 0, y: 20 });
        gsap.set(aiResponseRef.current, { opacity: 0 });
        gsap.set('.ai-logo', { scale: 0, opacity: 0 });
        gsap.set('.cafe-card', { opacity: 0, y: 15 });
        gsap.set('.typing-dots', { opacity: 0, scale: 0.8 });
        gsap.set(cursorRef.current, { opacity: 1 });
        gsap.set(inputRef.current, { opacity: 1 });
      }

      function startTyping() {
        typingIndex = 0;
        
        gsap.to(cursorRef.current, {
          opacity: 0,
          duration: 0.5,
          repeat: -1,
          yoyo: true,
          ease: "power1.inOut"
        });

        typingInterval = setInterval(() => {
          if (typingIndex < queryText.length) {
            setInputText(queryText.substring(0, typingIndex + 1));
            typingIndex++;
          } else {
            clearInterval(typingInterval);
            gsap.killTweensOf(cursorRef.current);
            tl.to(cursorRef.current, { opacity: 0, duration: 0.2 });
            tl.add(animateMessageSend, "+=0.5");
          }
        }, 100);
      }

      function animateMessageSend() {
        tl
          .to(chatContentRef.current, { opacity: 1, duration: 0.2 })
          .to(userMessageRef.current, {
            opacity: 1,
            y: 0,
            duration: 0.4,
            ease: "back.out(1.3)"
          })
          .call(() => setInputText(''))
          .to('.typing-dots', {
            opacity: 1,
            scale: 1,
            duration: 0.3,
            ease: "back.out(1.5)"
          }, "+=0.3")
          .to('.dot', {
            y: -3,
            duration: 0.4,
            stagger: 0.12,
            repeat: 2,
            yoyo: true,
            ease: "power1.inOut"
          }, "-=0.2")
          .to('.typing-dots', { opacity: 0, scale: 0.8, duration: 0.2 }, "+=0.2")
          .to(aiResponseRef.current, { opacity: 1, duration: 0.2 })
          .to('.ai-logo', {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: "back.out(1.7)"
          }, "-=0.1")
          .to('.cafe-card', {
            opacity: 1,
            y: 0,
            duration: 0.5,
            stagger: 0.3,
            ease: "power2.out"
          }, "-=0.2")
          .to({}, { duration: 3 })
          .to([chatContentRef.current, inputRef.current], {
            opacity: 0,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => {
              clearInterval(typingInterval);
              resetScene();
              startTyping();
            }
          });
      }

      resetScene();
      tl.add(startTyping);
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="flex items-center justify-center  md:pl-20">
      {/* Laptop Mockup */}
      <div className="relative">
        {/* Laptop Screen */}
        <div className="relative border-gray-800 bg-gray-800 border-[8px] rounded-t-xl max-w-[600px] mx-auto" style={{ height: '350px' }}>
          {/* Webcam */}
          <div className="absolute top-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gray-700 rounded-full" />
          
          {/* Screen Content */}
          <div className="rounded-t-lg overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 h-full flex flex-col">
            {/* ChatGPT Header */}
            <div className="bg-white/95 backdrop-blur-sm border-b border-gray-200 px-4 py-2 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center">
                  <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 01.071 0l4.83 2.791a4.494 4.494 0 01-.676 8.105v-5.678a.79.79 0 00-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.066.066 0 01.028-.061l4.83-2.787a4.5 4.5 0 016.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.453l-.142.08-4.778 2.758a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
                  </svg>
                </div>
                <h1 className="text-sm font-semibold text-gray-900">ChatGPT</h1>
              </div>
              <div className="flex items-center gap-2">
                <button className="w-6 h-6 flex items-center justify-center text-gray-500 hover:bg-gray-100 rounded-lg">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Chat Content Area */}
            <div ref={chatContentRef} className="flex-1 px-6 py-4 opacity-0 overflow-y-auto flex flex-col justify-end">
              <div className="space-y-3 max-w-3xl mx-auto w-full">
                {/* User Message */}
                <div ref={userMessageRef} className="flex justify-end opacity-0">
                  <div className="bg-blue-500 text-white rounded-2xl rounded-tr-md px-4 py-2 shadow-sm">
                    <p className="text-sm">cafes near me</p>
                  </div>
                </div>

                {/* Typing Indicator */}
                <div className="typing-dots flex items-start gap-2 opacity-0">
                  <div className="w-6 h-6 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 01.071 0l4.83 2.791a4.494 4.494 0 01-.676 8.105v-5.678a.79.79 0 00-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.066.066 0 01.028-.061l4.83-2.787a4.5 4.5 0 016.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.453l-.142.08-4.778 2.758a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
                    </svg>
                  </div>
                  <div className="bg-gray-100 rounded-2xl rounded-tl-md px-3 py-2 flex gap-1">
                    <div className="dot w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <div className="dot w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                    <div className="dot w-1.5 h-1.5 bg-gray-400 rounded-full"></div>
                  </div>
                </div>

                {/* AI Response */}
                <div ref={aiResponseRef} className="flex items-start gap-2 opacity-0">
                  <div className="ai-logo w-6 h-6 bg-gradient-to-br from-emerald-400 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M22.282 9.821a5.985 5.985 0 00-.516-4.91 6.046 6.046 0 00-6.51-2.9A6.065 6.065 0 004.981 4.18a5.985 5.985 0 00-3.998 2.9 6.046 6.046 0 00.743 7.097 5.98 5.98 0 00.51 4.911 6.051 6.051 0 006.515 2.9A5.985 5.985 0 0013.26 24a6.056 6.056 0 005.772-4.206 5.99 5.99 0 003.997-2.9 6.056 6.056 0 00-.747-7.073zM13.26 22.43a4.476 4.476 0 01-2.876-1.04l.141-.081 4.779-2.758a.795.795 0 00.392-.681v-6.737l2.02 1.168a.071.071 0 01.038.052v5.583a4.504 4.504 0 01-4.494 4.494zM3.6 18.304a4.47 4.47 0 01-.535-3.014l.142.085 4.783 2.759a.771.771 0 00.78 0l5.843-3.369v2.332a.08.08 0 01-.033.062L9.74 19.95a4.5 4.5 0 01-6.14-1.646zM2.34 7.896a4.485 4.485 0 012.366-1.973V11.6a.766.766 0 00.388.676l5.815 3.355-2.02 1.168a.076.076 0 01-.071 0l-4.83-2.786A4.504 4.504 0 012.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.076.076 0 01.071 0l4.83 2.791a4.494 4.494 0 01-.676 8.105v-5.678a.79.79 0 00-.407-.667zm2.01-3.023l-.141-.085-4.774-2.782a.776.776 0 00-.785 0L9.409 9.23V6.897a.066.066 0 01.028-.061l4.83-2.787a4.5 4.5 0 016.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 01-.038-.057V6.075a4.5 4.5 0 017.375-3.453l-.142.08-4.778 2.758a.795.795 0 00-.393.681zm1.097-2.365l2.602-1.5 2.607 1.5v2.999l-2.597 1.5-2.607-1.5z"/>
                    </svg>
                  </div>
                  
                  <div className="flex-1 grid grid-cols-2 gap-2">
                    {/* Cafe 1 */}
                    <div className="cafe-card bg-white rounded-lg p-2.5 shadow-sm border border-gray-200 opacity-0">
                      <h3 className="text-xs font-semibold text-gray-900 mb-1">1. 8th Day Café</h3>
                      <div className="flex items-center gap-0.5 mb-1.5">
                        <div className="flex">
                          {[...Array(4)].map((_, i) => (
                            <svg key={i} className="w-2.5 h-2.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                          ))}
                          <svg className="w-2.5 h-2.5 text-gray-300 fill-current" viewBox="0 0 20 20">
                            <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                          </svg>
                        </div>
                        <span className="text-[10px] text-gray-600">4.3</span>
                      </div>
                      <p className="text-[10px] text-gray-600 mb-1">Artisanal coffee & fresh pastries.</p>
                      <div className="flex items-center gap-0.5 text-[10px] text-gray-500">
                        <svg className="w-2.5 h-2.5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        <span className="truncate">Jatin Bagchi Rd</span>
                      </div>
                    </div>

                    {/* Cafe 2 */}
                    <div className="cafe-card bg-white rounded-lg p-2.5 shadow-sm border border-gray-200 opacity-0">
                      <h3 className="text-xs font-semibold text-gray-900 mb-1">2. Artsy Coffee</h3>
                      <div className="flex items-center gap-0.5 mb-1.5">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <svg key={i} className="w-2.5 h-2.5 text-yellow-400 fill-current" viewBox="0 0 20 20">
                              <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/>
                            </svg>
                          ))}
                        </div>
                        <span className="text-[10px] text-gray-600">4.4</span>
                      </div>
                      <p className="text-[10px] text-gray-600 mb-1">Specialty brews & cozy ambiance.</p>
                      <div className="flex items-center gap-0.5 text-[10px] text-gray-500">
                        <svg className="w-2.5 h-2.5 text-red-500 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        </svg>
                        <span className="truncate">Park Street</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Input Area */}
            <div ref={inputRef} className="bg-white/95 backdrop-blur-sm border-t border-gray-200 px-6 py-2.5 flex-shrink-0">
              <div className="flex items-center gap-2 bg-gray-100 rounded-3xl px-4 py-2 border border-gray-200 max-w-3xl mx-auto">
                <input
                  type="text"
                  value={inputText}
                  readOnly
                  placeholder="Message"
                  className="flex-1 bg-transparent outline-none text-gray-800 text-sm placeholder:text-gray-400"
                />
                <span 
                  ref={cursorRef}
                  className="w-0.5 h-4 bg-gray-800 opacity-0"
                />
                <button className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center text-gray-600 flex-shrink-0">
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Laptop Base */}
        <div className="relative bg-gray-900 rounded-b-xl h-3 max-w-[650px] mx-auto">
          <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-20 h-1 bg-gray-800"></div>
        </div>
        <div className="relative bg-gray-800 rounded-b-xl h-6 max-w-[120px] mx-auto shadow-lg"></div>
      </div>
    </div>
  );
}
