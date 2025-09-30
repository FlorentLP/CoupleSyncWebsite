import { Heart, Calendar, Film, Sparkles, CheckCircle2 } from 'lucide-react';

// App Store Logo Component
const AppStoreLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
  </svg>
);

// Google Play Logo Component
const GooglePlayLogo = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
  </svg>
);

// Mobile App Icon Component - Using the provided icon.png
const MobileAppIcon = ({ className, size = "w-20 h-20" }: { className?: string; size?: string }) => (
  <div className={`${size} ${className} relative`}>
    <img 
      src="/icon.png" 
      alt="CoupleSync App Icon" 
      className="w-full h-full object-contain drop-shadow-lg"
    />
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-couple-cream">
      {/* Hero Section */}
      <section className="relative overflow-hidden px-6 pt-20 pb-32">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl font-bold text-couple-black leading-tight">
                  Less "What should we do?"
                  <span className="block text-couple-pink">More fun together.</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  CoupleSync helps you and your partner share ideas, keep track of plans, and decide what to watch—without the daily friction.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button className="flex items-center justify-center gap-3 bg-couple-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all shadow-lg hover:shadow-xl">
                  <AppStoreLogo className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs">Download on the</div>
                    <div className="text-sm">App Store</div>
                  </div>
                </button>
                <button className="flex items-center justify-center gap-3 bg-couple-lavender text-white px-8 py-4 rounded-full font-semibold hover:bg-purple-700 transition-all shadow-lg hover:shadow-xl">
                  <GooglePlayLogo className="w-6 h-6" />
                  <div className="text-left">
                    <div className="text-xs">Get it on</div>
                    <div className="text-sm">Google Play</div>
                  </div>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-3xl shadow-2xl p-8 mx-auto max-w-sm">
                <div className="aspect-[9/19] bg-gradient-to-br from-couple-pink to-couple-lavender rounded-2xl flex items-center justify-center relative overflow-hidden">
                  {/* Background glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                  
                  <div className="text-center text-white space-y-6 p-8 relative z-10">
                    <div className="relative">
                      <MobileAppIcon size="w-24 h-24" className="mx-auto animate-pulse" />
                      {/* Additional glow rings */}
                      <div className="absolute inset-0 w-24 h-24 mx-auto rounded-full border border-white/20 animate-ping"></div>
                      <div className="absolute inset-2 w-20 h-20 mx-auto rounded-full border border-white/10 animate-ping animation-delay-1000"></div>
                    </div>
                    <h3 className="text-2xl font-bold">CoupleSync</h3>
                    <p className="text-sm opacity-90">Your shared space for everything</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-10 -right-4 bg-couple-pink rounded-full p-4 shadow-lg animate-bounce">
                <Sparkles className="w-8 h-8 text-white" />
              </div>
              <div className="absolute bottom-20 -left-4 bg-couple-lavender rounded-full p-4 shadow-lg animate-bounce">
                <Heart className="w-8 h-8 text-white" fill="white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* App Icon Showcase */}
      <section className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-couple-black mb-4">
            Meet your new favorite app
          </h2>
          <p className="text-lg text-gray-600 mb-12">
            Beautiful, intuitive, and designed for couples who want to stay connected.
          </p>
          
          <div className="flex justify-center items-center space-x-8">
            {/* Large app icon showcase */}
            <div className="relative">
              <MobileAppIcon size="w-32 h-32" className="drop-shadow-2xl" />
              <div className="absolute inset-0 w-32 h-32 rounded-full border-4 border-couple-pink/20 animate-ping"></div>
            </div>
            
            {/* App features */}
            <div className="text-left space-y-4 max-w-md">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-couple-pink rounded-full"></div>
                <span className="text-gray-700">Sync instantly with your partner</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-couple-lavender rounded-full"></div>
                <span className="text-gray-700">Never forget important dates</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-couple-pink rounded-full"></div>
                <span className="text-gray-700">Share ideas and activities</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-couple-lavender rounded-full"></div>
                <span className="text-gray-700">Build your watchlist together</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Problem -> Solution Section */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-couple-black mb-4">
              Sound familiar?
            </h2>
            <p className="text-xl text-gray-600">We get it. Small decisions shouldn't feel this hard.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-20">
            <div className="bg-couple-gray rounded-3xl p-8 text-center">
              <div className="text-4xl mb-4">🤔</div>
              <p className="text-lg font-semibold text-couple-black">"What should we do this weekend?"</p>
            </div>
            <div className="bg-couple-gray rounded-3xl p-8 text-center">
              <div className="text-4xl mb-4">📅</div>
              <p className="text-lg font-semibold text-couple-black">"Did you remember our trip date?"</p>
            </div>
            <div className="bg-couple-gray rounded-3xl p-8 text-center">
              <div className="text-4xl mb-4">🍿</div>
              <p className="text-lg font-semibold text-couple-black">"What do we watch tonight?"</p>
            </div>
          </div>

          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-couple-black">
              One app. Three simple solutions.
            </h3>
          </div>

          <div className="space-y-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-couple-pink/10 rounded-3xl p-12 aspect-[4/3] flex items-center justify-center">
                  <Sparkles className="w-32 h-32 text-couple-pink" />
                </div>
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <div className="inline-block bg-couple-pink text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Ideas
                </div>
                <h3 className="text-3xl font-bold text-couple-black">Date ideas, activity suggestions</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Save all your date ideas, activities, and places you want to try. No more forgetting that cute café or weekend plan.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-4">
                <div className="inline-block bg-couple-lavender text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Agenda
                </div>
                <h3 className="text-3xl font-bold text-couple-black">Shared timeline for important dates</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Keep track of anniversaries, trips, and special moments. Both of you stay in sync, automatically.
                </p>
              </div>
              <div className="order-2">
                <div className="bg-couple-lavender/10 rounded-3xl p-12 aspect-[4/3] flex items-center justify-center">
                  <Calendar className="w-32 h-32 text-couple-lavender" />
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="bg-couple-black/10 rounded-3xl p-12 aspect-[4/3] flex items-center justify-center">
                  <Film className="w-32 h-32 text-couple-black" />
                </div>
              </div>
              <div className="space-y-4 order-1 md:order-2">
                <div className="inline-block bg-couple-black text-white px-6 py-2 rounded-full text-sm font-semibold">
                  Watchlist
                </div>
                <h3 className="text-3xl font-bold text-couple-black">Movies & shows to watch together</h3>
                <p className="text-lg text-gray-600 leading-relaxed">
                  Stop scrolling for 30 minutes. Add shows you both want to watch and pick one in seconds.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="px-6 py-20 bg-couple-gray">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-couple-black mb-4">
              Simple as 1-2-3
            </h2>
            <p className="text-xl text-gray-600">No learning curve. Just start syncing.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4">
              <div className="bg-couple-pink text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mx-auto shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-couple-black">Add your ideas, dates & movies</h3>
              <p className="text-gray-600">Capture everything in one place. It takes seconds.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-couple-lavender text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mx-auto shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-couple-black">Both partners sync instantly</h3>
              <p className="text-gray-600">No manual sharing. Everything updates in real-time.</p>
            </div>
            <div className="text-center space-y-4">
              <div className="bg-couple-black text-white w-16 h-16 rounded-full flex items-center justify-center text-3xl font-bold mx-auto shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-couple-black">Decide together—without arguments</h3>
              <p className="text-gray-600">Less friction, more quality time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="px-6 py-20 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-couple-black mb-4">
              Why couples love CoupleSync
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-couple-pink" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-couple-black mb-2">Reduce decision fatigue</h3>
                <p className="text-gray-600">Stop wasting energy on small choices. Spend it on what matters.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-couple-lavender" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-couple-black mb-2">Always remember important dates</h3>
                <p className="text-gray-600">Never miss an anniversary or forget about that weekend trip again.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-couple-pink" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-couple-black mb-2">Keep a shared watchlist</h3>
                <p className="text-gray-600">End the Netflix scroll. Pick what you both want to watch in seconds.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <CheckCircle2 className="w-8 h-8 text-couple-lavender" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-couple-black mb-2">Strengthen your bond</h3>
                <p className="text-gray-600">Small, simple ways to stay connected and make life together smoother.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="px-6 py-20 bg-couple-gray">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-couple-black mb-4">
              Loved by modern couples
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-5 h-5 text-couple-pink" fill="#FF6B81" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "Finally, no more 'I don't know, what do you want to do?' We actually get things done now!"
              </p>
              <p className="font-semibold text-couple-black">— Sarah & Mike</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-5 h-5 text-couple-pink" fill="#FF6B81" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "We used to forget every restaurant recommendation. Now they're all in one place. Game changer."
              </p>
              <p className="font-semibold text-couple-black">— Emma & James</p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-lg">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Heart key={i} className="w-5 h-5 text-couple-pink" fill="#FF6B81" />
                ))}
              </div>
              <p className="text-gray-700 mb-6 italic">
                "The watchlist saved our Friday nights. We pick a movie in 2 minutes instead of 30."
              </p>
              <p className="font-semibold text-couple-black">— Alex & Jordan</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-32 bg-gradient-to-br from-couple-pink to-couple-lavender">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Make your everyday life as a couple smoother, starting today.
          </h2>
          <p className="text-xl text-white/90 mb-12">
            Join thousands of couples who've already made life easier together.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="flex items-center justify-center gap-3 bg-white text-couple-black px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all shadow-xl hover:shadow-2xl">
              <AppStoreLogo className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs">Download on the</div>
                <div className="text-sm">App Store</div>
              </div>
            </button>
            <button className="flex items-center justify-center gap-3 bg-couple-black text-white px-8 py-4 rounded-full font-semibold hover:bg-gray-800 transition-all shadow-xl hover:shadow-2xl">
              <GooglePlayLogo className="w-6 h-6" />
              <div className="text-left">
                <div className="text-xs">Get it on</div>
                <div className="text-sm">Google Play</div>
              </div>
            </button>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-couple-black text-white text-center">
        <p className="text-sm">
          © 2025 CoupleSync. Made with love for couples everywhere.
        </p>
        <p className="text-xs text-gray-400 mt-2">
          Designed by{' '}
          <a 
            href="https://florent.lepape.me" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-couple-pink hover:text-couple-lavender transition-colors duration-200 underline decoration-dotted underline-offset-2"
          >
            Florent Le Pape
          </a>
        </p>
      </footer>
    </div>
  );
}

export default App;
