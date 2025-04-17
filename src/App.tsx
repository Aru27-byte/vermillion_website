import React from 'react';
import { ArrowRight, CheckCircle2, Star, Users, LineChart, Lightbulb, ChevronDown, Github, Linkedin, X, Mail, MapPin } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
}

function App() {
  const [showPitchModal, setShowPitchModal] = React.useState(false);
  const [showDemoModal, setShowDemoModal] = React.useState(false);
  const [showContactInfo, setShowContactInfo] = React.useState(false);
  const [showAboutInfo, setShowAboutInfo] = React.useState(false);
  const [formData, setFormData] = React.useState<FormData>({
    name: '',
    email: ''
  });
  const [showSuccess, setShowSuccess] = React.useState(false);
  const [error, setError] = React.useState<string>('');

  const validateEmail = (email: string) => {
    // Basic company email validation - checks for @ and . after @
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isPersonalDomain = /@(gmail|yahoo|hotmail|outlook|aol|proton|icloud)\./i.test(email);
    return emailRegex.test(email) && !isPersonalDomain;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!formData.name || !formData.email) {
      setError('All fields are required');
      return;
    }

    if (!validateEmail(formData.email)) {
      setError('Please use a valid company email address');
      return;
    }

    try {
      // Here you would typically send the data to your backend
      // For now, we'll simulate a successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // In a real implementation, you would send an email to aroy@the-vermillion.com here
      
      setShowSuccess(true);
      setFormData({ name: '', email: '' });
      
      // Hide success message and modal after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
        setShowPitchModal(false);
        setShowDemoModal(false);
      }, 3000);
    } catch (err) {
      setError('An error occurred. Please try again.');
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed w-full glass-nav z-50 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Star className="h-8 w-8 text-emerald-500" />
              <span className="ml-2 text-xl font-bold text-white">ProductSense</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-400 hover:text-white">How It Works</a>
              <a href="#benefits" className="text-gray-400 hover:text-white">Benefits</a>
              <a href="#investors" className="text-gray-400 hover:text-white">Investors</a>
              <button 
                onClick={() => setShowDemoModal(true)}
                className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-500 transition-colors"
              >
                Request a demo
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-b from-emerald-900/20 to-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Discover <span className="text-red-500">RED</span> Dimensions
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-10">
              ProductSense is a trusted feedback marketplace where consumers share authentic reviews, 
              and brands gain valuable insights to innovate and connect better.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-500 transition-colors flex items-center justify-center">
                Join the Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <button className="border-2 border-emerald-500 text-emerald-500 px-8 py-4 rounded-full hover:bg-emerald-500 hover:text-black transition-colors">
                For Brands
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-12">
              <h3 className="text-2xl font-semibold mb-8">For Consumers</h3>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-900 text-emerald-400">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Sign up and try products</h4>
                  <p className="mt-2 text-gray-400">Join our community and get access to exclusive product testing opportunities.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-900 text-emerald-400">
                    <Star className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Share honest reviews</h4>
                  <p className="mt-2 text-gray-400">Provide authentic feedback that helps brands improve their products.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-900 text-emerald-400">
                    <CheckCircle2 className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Earn rewards</h4>
                  <p className="mt-2 text-gray-400">Get compensated for your valuable insights and contributions.</p>
                </div>
              </div>
            </div>
            <div className="space-y-12">
              <h3 className="text-2xl font-semibold mb-8">For Brands</h3>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-900 text-emerald-400">
                    <LineChart className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">ProductSense Community</h4>
                  <p className="mt-2 text-gray-400">Real users. Real feedback. Real stakes. Our vibrant contributor community shares bugs, requests, and ideas—feeding the innovation engine from the ground up.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-900 text-emerald-400">
                    <Users className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Business Layer</h4>
                  <p className="mt-2 text-gray-400">With AI-driven insights, companies can triage, map, and validate what's worth building—before writing a single line of code. Start vibe-coding with clarity from day one.</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-md bg-emerald-900 text-emerald-400">
                    <Lightbulb className="h-6 w-6" />
                  </div>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-medium">Innovate products</h4>
                  <p className="mt-2 text-gray-400">Use insights to improve products and drive customer satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Product Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-black/50 p-8 rounded-2xl border border-gray-800">
              <div className="h-12 w-12 rounded-xl bg-emerald-900 text-emerald-400 flex items-center justify-center mb-6">
                <CheckCircle2 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Authentic Feedback</h3>
              <p className="text-gray-400">Make smarter decisions with genuine customer insights that drive real results.</p>
            </div>
            <div className="bg-black/50 p-8 rounded-2xl border border-gray-800">
              <div className="h-12 w-12 rounded-xl bg-emerald-900 text-emerald-400 flex items-center justify-center mb-6">
                <Star className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Rewarding Honesty</h3>
              <p className="text-gray-400">Consumers earn rewards for providing truthful and detailed product feedback.</p>
            </div>
            <div className="bg-black/50 p-8 rounded-2xl border border-gray-800">
              <div className="h-12 w-12 rounded-xl bg-emerald-900 text-emerald-400 flex items-center justify-center mb-6">
                <LineChart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold mb-4">Drive Innovation</h3>
              <p className="text-gray-400">Brands leverage insights to innovate products and build customer loyalty.</p>
            </div>
          </div>
        </div>
      </section>

      {/* For Investors */}
      <section id="investors" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-6">For Investors</h2>
            <p className="text-xl text-gray-400">The AI-Driven Bridge Between Real Customer Insight and Rapid Product Innovation</p>
          </div>
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&q=80&w=1000" 
                alt="Growth Chart" 
                className="rounded-2xl shadow-lg"
              />
            </div>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">Vision</h3>
                <p className="text-gray-400">Where ideas spark, vibes flow, and AI clears the noise—so teams build boldly, fast, and only what matters.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Market Opportunity</h3>
                <p className="text-gray-400">Tapping into the $76.7 billion market research industry with a fresh approach.</p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4">Growth Potential</h3>
                <p className="text-gray-400">Scalable platform with network effects and high retention rates.</p>
              </div>
              <button 
                onClick={() => setShowPitchModal(true)}
                className="bg-emerald-600 text-white px-8 py-4 rounded-full hover:bg-emerald-500 transition-colors flex items-center"
              >
                Get the Pitch Deck
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Pitch Deck Request Modal */}
        {showPitchModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 max-w-md w-full relative">
              <button
                onClick={() => setShowPitchModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
              
              <h3 className="text-2xl font-bold mb-6">Request Pitch Deck</h3>
              
              {showSuccess ? (
                <div className="text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <p>Thank you! We'll send the pitch deck to your email shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-black border border-gray-800 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="companyName" className="block text-sm font-medium mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="companyName"
                      value={formData.companyName}
                      onChange={(e) => setFormData(prev => ({ ...prev, companyName: e.target.value }))}
                      className="w-full bg-black border border-gray-800 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="Acme Corp"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Company Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-black border border-gray-800 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-500 transition-colors flex items-center justify-center"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        )}

        {/* Demo Request Modal */}
        {showDemoModal && (
          <div className="fixed inset-0 bg-black/70 flex items-center justify-center p-4 z-50">
            <div className="bg-gray-900 p-8 rounded-2xl border border-gray-800 max-w-md w-full relative">
              <button
                onClick={() => setShowDemoModal(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white"
              >
                <X className="h-6 w-6" />
              </button>
              
              <h3 className="text-2xl font-bold mb-6">Request a Demo</h3>
              
              {showSuccess ? (
                <div className="text-emerald-400 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5" />
                  <p>Thank you! We'll contact you shortly to schedule your demo.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                      className="w-full bg-black border border-gray-800 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="John Doe"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Company Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                      className="w-full bg-black border border-gray-800 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                      placeholder="john@company.com"
                    />
                  </div>
                  
                  {error && (
                    <p className="text-red-500 text-sm">{error}</p>
                  )}
                  
                  <button
                    type="submit"
                    className="w-full bg-emerald-600 text-white px-6 py-3 rounded-lg hover:bg-emerald-500 transition-colors flex items-center justify-center"
                  >
                    Submit Request
                  </button>
                </form>
              )}
            </div>
          </div>
        )}
      </section>

      {/* FAQ */}
      <section className="py-24 bg-gray-900">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Frequently Asked Questions</h2>
          <div className="space-y-8">
            <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
              <button className="flex justify-between items-center w-full">
                <span className="text-lg font-medium">How do I get paid for reviews?</span>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </button>
              <p className="mt-4 text-gray-400">Earn points for each verified review you submit. Points can be converted to cash or rewards once you reach the minimum threshold.</p>
            </div>
            <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
              <button className="flex justify-between items-center w-full">
                <span className="text-lg font-medium">How does ProductSense verify authenticity?</span>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </button>
              <p className="mt-4 text-gray-400">We use a combination of AI and human verification to ensure all reviews are genuine and meet our quality standards.</p>
            </div>
            <div className="bg-black/50 p-6 rounded-xl border border-gray-800">
              <button className="flex justify-between items-center w-full">
                <span className="text-lg font-medium">Can any brand sign up?</span>
                <ChevronDown className="h-5 w-5 text-gray-400" />
              </button>
              <p className="mt-4 text-gray-400">We carefully vet all brands to ensure they meet our quality and ethical standards before joining the platform.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Star className="h-8 w-8 text-emerald-400" />
                <span className="ml-2 text-xl font-bold">ProductSense</span>
              </div>
              <p className="text-gray-400">Beyond the Obvious: Finding the Blind Spot</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li className="relative">
                  <button
                    onMouseEnter={() => setShowAboutInfo(true)}
                    onMouseLeave={() => setShowAboutInfo(false)}
                    className="text-gray-400 hover:text-white"
                  >
                    About
                  </button>
                  {showAboutInfo && (
                    <div className="absolute bottom-full left-0 mb-2 bg-gray-900 rounded-lg shadow-xl border border-gray-800 p-8 w-[600px]">
                      <button
                        onClick={() => setShowAboutInfo(false)}
                        className="absolute top-3 right-3 text-gray-400 hover:text-white"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <p className="text-gray-300 leading-relaxed text-lg text-justify">
                        At Vermillion, we believe not everyone needs to code—but everyone needs to build. Our AI-powered feedback marketplace connects real insights with product teams, helping companies triage, map, and validate what's worth building—before writing a single line of code. In this new world, ideas are currency, and vibe coding enhances creation. We're building a future where tasks get easier, people go home on time, and calm minds drive clarity. Our flywheel of feedback, AI, and action boosts customer satisfaction and work-life balance—so teams spend less time researching NPS dips and more time delivering what truly matters.
                      </p>
                    </div>
                  )}
                </li>
                <li className="relative">
                  <button
                    onClick={() => setShowContactInfo(!showContactInfo)}
                    className="text-gray-400 hover:text-white"
                  >
                    Contact Us
                  </button>
                  {showContactInfo && (
                    <div className="absolute bottom-full left-0 mb-2 bg-gray-900 rounded-lg shadow-xl border border-gray-800 p-4 min-w-[200px]">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setShowContactInfo(false);
                        }}
                        className="absolute top-2 right-2 text-gray-400 hover:text-white"
                      >
                        <X className="h-4 w-4" />
                      </button>
                      <div className="flex items-center gap-2 mb-2 whitespace-nowrap">
                        <Mail className="h-4 w-4 text-emerald-400" />
                        <p className="text-gray-300">info@the-vermillion.com</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-emerald-400" />
                        <p className="text-gray-300">Redmond, WA, USA</p>
                      </div>
                    </div>
                  )}
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Legal</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Terms of Service</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/company/the-vermillion" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white">
                  <Github className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2025 The Vermillion World. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;