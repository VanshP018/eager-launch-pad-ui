
import React from 'react';
import BburstLogo from '@/components/BburstLogo';
import FeatureCard from '@/components/FeatureCard';
import WaitlistForm from '@/components/WaitlistForm';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-16 max-w-6xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-12">
        <BburstLogo />
        
        <p className="text-xl md:text-2xl max-w-3xl mx-auto mt-6 text-gray-300">
          Connect with anyone, anywhere, in any language. Break language
          barriers and find your perfect bubble.
        </p>
      </div>
      
      {/* Waitlist Form */}
      <div className="w-full max-w-xl mx-auto mb-16">
        <WaitlistForm />
      </div>
      
      {/* Features Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl mb-16">
        <FeatureCard 
          title="Language Freedom"
          description="Chat in your native language while others receive messages in theirs. No more translation struggles."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 8l6 6" />
              <path d="M4 14l6-6 2-3" />
              <path d="M2 5h12" />
              <path d="M7 2h1" />
              <path d="M22 22l-5-10-5 10" />
              <path d="M14 18h6" />
            </svg>
          }
        />
        <FeatureCard 
          title="Mood Matching"
          description="Connect based on emotions. Find people who match your current mood and vibe with them."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <path d="M8 14s1.5 2 4 2 4-2 4-2" />
              <line x1="9" y1="9" x2="9.01" y2="9" />
              <line x1="15" y1="9" x2="15.01" y2="9" />
            </svg>
          }
        />
        <FeatureCard 
          title="Expressive Stickers"
          description="Share your feelings with rich, cultural stickers that transcend language barriers."
          icon={
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          }
        />
      </div>
      
      {/* Coming Soon Section */}
      <div className="text-center mt-auto">
        <div className="inline-flex items-center gap-2 py-3 px-6 rounded-full border border-bburst-teal/30 bg-black/20 backdrop-blur-sm">
          <span className="text-bburst-teal font-medium">Coming Soon</span>
          <span className="text-gray-300">|</span>
          <span className="text-gray-300">Join the waitlist to get early access</span>
        </div>
      </div>
    </div>
  );
};

export default Index;
