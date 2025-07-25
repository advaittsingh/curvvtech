import Link from 'next/link';
import { ArrowRight, CheckCircle, Clock, Users, Zap, Star, Award, Target } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative bg-black py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-tight">
              Presentation-ready concepts
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                for $3000
              </span>
              <br />
              <span className="text-white">within one week</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              Having launched our own startups and with 500+ successful projects on our resume, 
              we know exactly how to make ideas shine.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/contact"
                className="bg-white text-black px-12 py-6 rounded-none font-black text-xl hover:bg-gray-200 transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <span>Order Concept</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Video Banner Placeholder */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gray-800 h-96 flex items-center justify-center">
            <div className="text-center">
              <div className="w-20 h-20 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white text-2xl">▶</span>
              </div>
              <p className="text-gray-400 text-lg">Conceptzilla video banner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Your design Concept */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
                Your design Concept
                <br />
                <span className="text-purple-400">→ within 1 week ←</span>
              </h2>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                A design concept is what you need when time crunch doesn't allow for a complete process. 
                This is where CurvvTech comes in handy. We design up to four main screens of your product, 
                ready for public display.
              </p>
              <p className="text-xl text-gray-400 leading-relaxed mb-8">
                Fixed price. One week.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center bg-white text-black px-8 py-4 font-black text-lg hover:bg-gray-200 transition-all duration-300"
              >
                Order Concept
                <ArrowRight className="h-5 w-5 ml-2" />
              </Link>
            </div>
            <div className="bg-gray-900 p-8 border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">What you'll get as a result</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Main screens designed</h4>
                    <p className="text-gray-400">Beautifully designed sections of your digital product interface, which can be demoed to shareholders and investors before production.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Presentable content</h4>
                    <p className="text-gray-400">The assets we design are ready for public display, can be included in your pitch decks, whitepapers, etc.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Pre-MVP package</h4>
                    <p className="text-gray-400">The elements we design can be easily translated into a real product MVP.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-purple-500 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">Development-ready files</h4>
                    <p className="text-gray-400">We equip the concept with a simple UI kit that allows you to experiment with colors and typography during the production phase.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Cases */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Recent Cases
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Car Rental Service */}
            <div className="bg-black border border-gray-800 p-6">
              <div className="bg-gray-800 h-48 mb-6 flex items-center justify-center">
                <span className="text-gray-400">Car rental app</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Car Rental Service Mobile App</h3>
              <p className="text-gray-400 mb-6">
                Developed a concept for a car rental mobile app, allowing users to book vehicles across the world hassle-free. 
                The filtering system assists in finding a suitable car quickly.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✦</span>
                  Design for 4 main screens
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✦</span>
                  Presentation-ready asset
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✦</span>
                  Ready for development assets
                </div>
              </div>
            </div>

            {/* Cryptocurrency Exchange */}
            <div className="bg-black border border-gray-800 p-6">
              <div className="bg-gray-800 h-48 mb-6 flex items-center justify-center">
                <span className="text-gray-400">Crypto exchange</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cryptocurrency Exchange Website & Mobile App</h3>
              <p className="text-gray-400 mb-6">
                Designed a cryptocurrency exchange mobile app and its promo landing page for improved marketing strategies. 
                The design has the clarity and ease of use that people seek in trading apps.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✦</span>
                  5 main screens for mobile app
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✦</span>
                  Promotional landing page
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✦</span>
                  Development-ready assets
                </div>
              </div>
            </div>

            {/* VPN App */}
            <div className="bg-black border border-gray-800 p-6">
              <div className="bg-gray-800 h-48 mb-6 flex items-center justify-center">
                <span className="text-gray-400">VPN app</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Cyber VPN Mobile App Design Concept</h3>
              <p className="text-gray-400 mb-6">
                Built a VPN mobile app design with a touch of cyberpunk and sci-fi styles. 
                Dark aesthetics reduce eye strain, while users enjoy fast internet connections.
              </p>
              <div className="space-y-2">
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✦</span>
                  5 main screens for mobile app
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✦</span>
                  Promotional landing page
                </div>
                <div className="flex items-center text-gray-300">
                  <span className="text-purple-400 mr-2">✦</span>
                  Development-ready assets
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-400 mb-6">
              That's merely a snippet of our recent projects.
              <br />
              You can visit Dribbble and explore our most current work there.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-black px-8 py-4 font-black text-lg hover:bg-gray-200 transition-all duration-300"
            >
              View on Dribbble
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Just one week from start to finish
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-black px-8 py-4 font-black text-lg hover:bg-gray-200 transition-all duration-300"
            >
              Get Started
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Day 1</h3>
              <h4 className="text-xl font-bold text-purple-400 mb-4">The Baseline</h4>
              <p className="text-gray-400">
                Within 1-2 business days, we'll reach out to you and schedule a call to discuss the details.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Day 2</h3>
              <h4 className="text-xl font-bold text-purple-400 mb-4">The Kick-Off</h4>
              <p className="text-gray-400">
                At this stage, we'll discuss with you all the details and issues needed to start the concept creating process.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">3-6</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Day 3 → 6</h3>
              <h4 className="text-xl font-bold text-purple-400 mb-4">The Design</h4>
              <p className="text-gray-400">
                Considering the required scope of work and your business needs, we develop a quick and scalable design solution.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-white font-bold text-xl">7</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Day 7</h3>
              <h4 className="text-xl font-bold text-purple-400 mb-4">The Rollout</h4>
              <p className="text-gray-400">
                We deliver finalized design assets according to the required scope 1 week after the project start.
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-8 text-gray-400">
              <span>One Week</span>
              <span>←</span>
              <span>One Iteration</span>
              <span>←</span>
              <span>Best For Startups</span>
              <span>←</span>
            </div>
          </div>
        </div>
      </section>

      {/* Design Add-ons */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Design Add-ons
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Depending on the state of the idea, some concepts might benefit from additional services we have to offer. 
              These add-ons are a part of a larger scope and they are instrumental in the success of the concept.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center bg-white text-black px-8 py-4 font-black text-lg hover:bg-gray-200 transition-all duration-300 mt-8"
            >
              Order a Concept
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Pitch deck',
                description: 'We will write and design an engaging presentation of your concept for your key audience.',
                time: '1 week',
                price: '1500'
              },
              {
                title: 'Branding',
                description: 'We will create a lower-end branding package including a logo, a typographic pair, and a set of brand colors.',
                time: '3-5 days',
                price: '1500'
              },
              {
                title: 'Webflow implementation',
                description: 'The concept will be developed by our team on Webflow.',
                time: '2-3 weeks',
                price: '3000'
              },
              {
                title: 'Extended concept',
                description: 'We will increase the number of screens to cover more features. Works for larger scale-up concepts.',
                time: '2 days',
                price: '1000'
              }
            ].map((addon, index) => (
              <div key={index} className="bg-black border border-gray-800 p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-purple-400 font-bold">Premium</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{addon.title}</h3>
                <p className="text-gray-400 mb-6">{addon.description}</p>
                <div className="space-y-2">
                  <div className="flex justify-between text-gray-300">
                    <span>Estimated time</span>
                    <span>{addon.time}</span>
                  </div>
                  <div className="flex justify-between text-white font-bold">
                    <span>Price</span>
                    <span>${addon.price}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Frequently asked questions
            </h2>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            <div className="bg-gray-900 border border-gray-800 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">What is a concept, and what does it include?</h3>
              <p className="text-gray-400 leading-relaxed">
                A concept is an idea wrapped in a design. Depending on the complexity of the product, it's either 3-5 informational blocks (landing page), 
                2-5 mobile screens (mobile app), or 2 primary screens (dashboard). If to be recognized the idea requires animation — it can be added free of charge.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Who is CurvvTech?</h3>
              <p className="text-gray-400 leading-relaxed">
                CurvvTech is a team of designers and developers with extensive experience in building websites and apps. 
                Having launched our own startups and with 500+ successful projects on our resume, we know exactly how to make ideas shine. 
                The world is full of ideas that stay undiscovered. CurvvTech is on a mission to give them wings.
              </p>
            </div>

            <div className="bg-gray-900 border border-gray-800 p-8">
              <h3 className="text-2xl font-bold text-white mb-4">Why CurvvTech?</h3>
              <p className="text-gray-400 leading-relaxed">
                If you work with us, you will save time on formalities, long calls and emails typical for a design studio. 
                The production of the same number of assets may take months that way. Our framework crystalizes the idea to just the most important features, 
                which saves time, cost, and delivers tight concepts.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Drop us a line
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Introduce yourself, your project/idea, and explain why it matters to you and everyone else.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <label className="block text-white font-bold mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-purple-500"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-white font-bold mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-purple-500"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-bold mb-2">Project Description</label>
                <textarea
                  rows={6}
                  className="w-full bg-black border border-gray-700 text-white px-4 py-3 focus:outline-none focus:border-purple-500"
                  placeholder="Tell us about your project idea..."
                ></textarea>
              </div>

              <div>
                <label className="block text-white font-bold mb-4">Add-Ons</label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    'Pitch deck',
                    'Branding',
                    'Webflow implementation',
                    'Extended concept',
                    'Graphics',
                    'Additional Dark or Light theme',
                    'Revision',
                    'Responsive'
                  ].map((addon) => (
                    <label key={addon} className="flex items-center space-x-3 cursor-pointer">
                      <input type="checkbox" className="w-4 h-4 text-purple-500 bg-black border-gray-700 rounded focus:ring-purple-500" />
                      <span className="text-gray-300">{addon}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-white text-black px-12 py-6 font-black text-xl hover:bg-gray-200 transition-all duration-300"
                >
                  →
                </button>
              </div>

              <div className="text-center text-gray-400">
                <p>Estimated cost & time → $3,500 / 3 weeks</p>
              </div>
            </form>

            <div className="text-center mt-12">
              <p className="text-gray-400 mb-4">or email us at</p>
              <a href="mailto:hi@curvvtech.com" className="text-purple-400 hover:text-purple-300 font-bold">
                hi@curvvtech.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
