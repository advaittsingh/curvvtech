import Link from 'next/link';
import { ArrowRight, Brain, Code, Zap, Shield, Users, TrendingUp, CheckCircle, Database, Lock, Globe, Cpu } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-black">
      {/* Hero Section */}
      <section className="relative bg-black py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-tight">
              Build fast. Scale easily.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">
                Trust your stack.
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-400 mb-12 max-w-4xl mx-auto leading-relaxed">
              The AI development platform. CurvvTech is the powerful, scalable backend that lets you focus on building 
              great, differentiated AI products instead of being stuck building infrastructure.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link
                href="/products"
                className="bg-emerald-500 text-black px-10 py-5 rounded-lg font-bold text-lg hover:bg-emerald-400 transition-all duration-300 flex items-center justify-center space-x-3 group"
              >
                <span>Start your project</span>
                <ArrowRight className="h-6 w-6 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                href="/services"
                className="border-2 border-gray-700 text-gray-300 px-10 py-5 rounded-lg font-bold text-lg hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300"
              >
                View Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose CurvvTech */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why startups choose CurvvTech
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Speed wins. CurvvTech helps you move faster by providing a full-featured, scalable AI backend based on cutting-edge technology.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-8">
              <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Zap className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Build in a weekend</h3>
              <p className="text-gray-400">
                Launch your AI backend in minutes with seamless integrations for common frameworks. Focus on growth while we handle infrastructure.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Cpu className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">A complete AI platform</h3>
              <p className="text-gray-400">
                All-in-one suite with AI models, vector search, real-time processing, and edge functions. Use one or all.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <TrendingUp className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Scale to millions</h3>
              <p className="text-gray-400">
                Fair pricing, a complete, powerful AI infrastructure, and global deployment capabilities.
              </p>
            </div>

            <div className="text-center p-8">
              <div className="w-16 h-16 bg-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">We try harder</h3>
              <p className="text-gray-400">
                Outstanding support to resolve issues fast and keep you building innovative AI solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CurvvTech helps you build */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              CurvvTech helps you build
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              CurvvTech includes everything you need to create the perfect AI application for your brand, business, or just for fun.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* AI Models */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Brain className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">AI Models</h3>
              </div>
              <p className="text-gray-400 text-lg">
                A fully managed AI infrastructure that's simple for creators and trusted by enterprises.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  100% portable
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Built-in authentication
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Easy to extend
                </li>
              </ul>
            </div>

            {/* Vector Search */}
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Database className="h-6 w-6 text-black" />
                </div>
                <h3 className="text-2xl font-bold text-white">Vector Search</h3>
              </div>
              <p className="text-gray-400 text-lg">
                Advanced vector embeddings for AI/ML applications, enabling fast semantic search and intelligent recommendations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Semantic search
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Embedding storage
                </li>
                <li className="flex items-center text-gray-300">
                  <CheckCircle className="h-5 w-5 text-emerald-500 mr-3" />
                  Real-time indexing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Developers can build faster */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Developers can build faster with CurvvTech
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Features that help developers move quickly and focus on building great AI applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-800 rounded-lg">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <Brain className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">AI Assistant</h3>
              <p className="text-gray-400">
                A single panel that persists across the CurvvTech Dashboard and maintains context across AI prompts.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-lg">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <Code className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Auto-generated APIs</h3>
              <p className="text-gray-400">
                Learn AI when you're ready. In the meantime, CurvvTech generates automatic APIs to make coding a lot easier.
              </p>
            </div>

            <div className="p-8 border border-gray-800 rounded-lg">
              <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mb-6">
                <Globe className="h-6 w-6 text-black" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Instant deployment</h3>
              <p className="text-gray-400">
                No need to set up servers, manage DevOps, or tweak security settings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Top performance section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Top performance, at any scale
            </h2>
            <p className="text-xl text-gray-400 max-w-4xl mx-auto leading-relaxed">
              CurvvTech ensures optimal AI performance at any scale, so you can focus on innovating and growing without 
              worrying about infrastructure limitations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-2">6,500,000+</div>
              <div className="text-gray-400">AI models deployed</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-2">35,000+</div>
              <div className="text-gray-400">models launched daily</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-emerald-500 mb-2">230,550</div>
              <div className="text-gray-400">active developers</div>
            </div>
          </div>
        </div>
      </section>

      {/* Security section */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Trusted for enterprise AI, mission-critical applications, and everything in between
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Keep your data secure with SOC 2, HIPAA, and GDPR compliance. Your customers' data is encrypted at rest and in transit.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              'SOC 2 Type II certified',
              'HIPAA compliance',
              'DDoS Protection',
              'Multi-factor Authentication',
              'Vulnerability Management'
            ].map((item) => (
              <div key={item} className="text-center p-4">
                <div className="w-12 h-12 bg-emerald-500 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Lock className="h-6 w-6 text-black" />
                </div>
                <p className="text-gray-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Choose your platform to start building in seconds
          </h2>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['React', 'Next.js', 'Vue', 'Svelte', 'Flutter', 'Kotlin'].map((platform) => (
              <div key={platform} className="px-6 py-3 border border-gray-700 rounded-lg text-gray-300 hover:border-emerald-500 hover:text-emerald-400 transition-all duration-300 cursor-pointer">
                {platform}
              </div>
            ))}
          </div>
          <Link
            href="/contact"
            className="inline-flex items-center bg-emerald-500 text-black px-12 py-6 rounded-lg font-bold text-xl hover:bg-emerald-400 transition-all duration-300"
          >
            Start your project
            <ArrowRight className="h-6 w-6 ml-3" />
          </Link>
        </div>
      </section>
    </div>
  );
}
