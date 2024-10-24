import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import { 
  ArrowRight, 
  Robot,
  Target,
  TrendingUp,
  Users,
  Zap,
  Shield,
  LineChart
} from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          {/* Hero Section */}
          <div className="text-center mb-16 animate-fade-in">
            <Logo />
            <h1 className="mt-8 text-4xl font-bold text-gray-900 sm:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 animate-gradient">
              AI-Powered Community Sentiment Analysis
            </h1>
            <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
              Transform your community engagement with advanced AI sentiment analysis. 
              Get real-time insights, track trends, and make data-driven decisions.
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button onClick={() => navigate('/auth')} size="lg" className="group">
                Get Started 
                <ArrowRight className="ml-2 h-4 w-4 transform transition-transform group-hover:translate-x-1" />
              </Button>
              <Button onClick={() => navigate('/contact')} variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md transform transition-all hover:scale-105">
              <Brain className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">AI-Powered Analysis</h3>
              <p className="text-gray-600">Advanced machine learning algorithms analyze sentiment in real-time</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md transform transition-all hover:scale-105">
              <TrendingUp className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Trend Detection</h3>
              <p className="text-gray-600">Identify emerging patterns and sentiment trends automatically</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md transform transition-all hover:scale-105">
              <Target className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Actionable Insights</h3>
              <p className="text-gray-600">Get clear recommendations based on community feedback</p>
            </div>
          </div>

          {/* How It Works Section */}
          <div className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center group">
                <div className="bg-primary/10 rounded-full p-6 mx-auto w-24 h-24 flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110">
                  <Users className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">1. Collect Feedback</h3>
                <p className="text-gray-600">Gather community feedback from multiple channels</p>
              </div>
              <div className="text-center group">
                <div className="bg-primary/10 rounded-full p-6 mx-auto w-24 h-24 flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110">
                  <Robot className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">2. AI Analysis</h3>
                <p className="text-gray-600">Process data through our AI engine</p>
              </div>
              <div className="text-center group">
                <div className="bg-primary/10 rounded-full p-6 mx-auto w-24 h-24 flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110">
                  <LineChart className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">3. Generate Insights</h3>
                <p className="text-gray-600">Get actionable insights and trends</p>
              </div>
              <div className="text-center group">
                <div className="bg-primary/10 rounded-full p-6 mx-auto w-24 h-24 flex items-center justify-center mb-4 transform transition-transform group-hover:scale-110">
                  <Zap className="h-12 w-12 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">4. Take Action</h3>
                <p className="text-gray-600">Implement improvements based on data</p>
              </div>
            </div>
          </div>

          {/* Benefits Section */}
          <div className="mt-20 bg-gradient-to-r from-primary/5 to-purple-50 rounded-2xl p-12">
            <h2 className="text-3xl font-bold text-center mb-12">Why Choose Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4 group">
                <div className="bg-white p-3 rounded-lg shadow-md transform transition-transform group-hover:scale-110">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Enterprise-Grade Security</h3>
                  <p className="text-gray-600">Your data is protected with state-of-the-art encryption and security measures</p>
                </div>
              </div>
              <div className="flex items-start space-x-4 group">
                <div className="bg-white p-3 rounded-lg shadow-md transform transition-transform group-hover:scale-110">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Real-Time Processing</h3>
                  <p className="text-gray-600">Get instant insights as feedback comes in, no delays or waiting periods</p>
                </div>
              </div>
            </div>
          </div>

          {/* Statistics Section */}
          <div className="mt-20 bg-gradient-to-r from-primary/10 to-purple-100 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">99%</div>
                <p className="text-gray-600 mt-2">Accuracy Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">24/7</div>
                <p className="text-gray-600 mt-2">Real-time Analysis</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary">10x</div>
                <p className="text-gray-600 mt-2">Faster Insights</p>
              </div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Community Engagement?</h2>
            <p className="text-gray-600 mb-8">Join thousands of organizations using AI to understand their community better.</p>
            <Button onClick={() => navigate('/auth')} size="lg" className="bg-primary hover:bg-primary/90">
              Start Free Trial
            </Button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;
