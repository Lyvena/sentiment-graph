import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import Logo from '../components/Logo';
import Footer from '../components/Footer';
import { ArrowRight, Heart, BarChart2, MessageSquare } from 'lucide-react';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-16">
            <Logo />
            <h1 className="mt-8 text-4xl font-bold text-gray-900 sm:text-6xl">
              Community Sentiment Analysis
            </h1>
            <p className="mt-6 text-lg text-gray-600">
              Track, analyze, and improve your community engagement with AI-powered sentiment analysis
            </p>
            <div className="mt-8 flex justify-center gap-4">
              <Button onClick={() => navigate('/auth')} size="lg">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button onClick={() => navigate('/contact')} variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-6 bg-white rounded-lg shadow-md">
              <Heart className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Sentiment Tracking</h3>
              <p className="text-gray-600">Monitor community sentiment in real-time with AI analysis</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <BarChart2 className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Data Visualization</h3>
              <p className="text-gray-600">Clear insights with interactive charts and reports</p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-md">
              <MessageSquare className="h-12 w-12 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Feedback Management</h3>
              <p className="text-gray-600">Organize and respond to community feedback efficiently</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Landing;