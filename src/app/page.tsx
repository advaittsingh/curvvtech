import Link from 'next/link';
import { ArrowRight, Brain, Code, Zap, Shield, Users, TrendingUp, CheckCircle } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Build Smart.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
                Scale Faster.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transform your business with cutting-edge AI solutions. Whether you're automating processes 
              or building intelligent systems, we help you push past technological limits.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/products"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <span>Explore Solutions</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-gray-600 text-gray-200 px-10 py-5 rounded-lg font-bold text-lg hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FOR THE COMMITTED Section */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              FOR THE COMMITTED
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Build like a tech leader with enterprise-grade AI and expert development. Whether you're 
              scaling operations or breaking new ground, we help you push past digital boundaries.
            </p>
          </div>
          <div className="text-center">
            <Link
              href="/about"
              className="inline-flex items-center text-blue-400 hover:text-blue-300 font-semibold text-lg transition-colors"
            >
              About us
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Guided by experts */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                Guided by experts
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                We believe in creating a collaborative environment where your business can thrive. 
                We're here to help you achieve your digital transformation goals and unlock your 
                full technological potential.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <div className="text-center">
                <Brain className="h-16 w-16 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">AI-Powered Innovation</h3>
                <p className="text-lg">
                  Our team of AI specialists and software engineers are passionate about your success 
                  and committed to delivering cutting-edge solutions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DYNAMIC OPEN GYM equivalent */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              ENTERPRISE AI PLATFORM
            </h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Our platform is the optimal environment for AI development and deployment, fully equipped 
              with state-of-the-art tools, scalable infrastructure, and a focus on intelligent automation.
            </p>
          </div>
        </div>
      </section>

      {/* Join the COMMUNITY */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
              Join the COMMUNITY
            </h2>
            <h3 className="text-3xl font-bold text-blue-400 mb-8">
              DISCOVER YOUR POTENTIAL
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-8">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Expert Coaching</h4>
              <p className="text-gray-300">
                AI specialists who are passionate about your digital transformation journey.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">Results-Driven Programs</h4>
              <p className="text-gray-300">
                AI solutions that deliver tangible, measurable business outcomes.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-20 h-20 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h4 className="text-2xl font-bold text-white mb-4">A Supportive Tribe</h4>
              <p className="text-gray-300">
                A community of innovators that pushes you to achieve digital excellence.
              </p>
            </div>
          </div>

          <div className="text-center">
            <Link
              href="/services"
              className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-2xl transition-all duration-300"
            >
              View services
              <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* WHAT WE BELIEVE IN */}
      <section className="py-24 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            WHAT WE BELIEVE IN
          </h2>
          <h3 className="text-3xl font-bold text-blue-400 mb-8">
            Join the CurvvTech Tribe Today!
          </h3>
          <Link
            href="/contact"
            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-12 py-6 rounded-lg font-bold text-xl hover:shadow-2xl transition-all duration-300"
          >
            Get started
            <ArrowRight className="h-6 w-6 ml-3" />
          </Link>
        </div>
      </section>
    </div>
  );
}
