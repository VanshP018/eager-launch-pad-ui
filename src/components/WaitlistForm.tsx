
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ArrowRight } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const WaitlistForm = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      toast({
        title: "Invalid email",
        description: "Please enter a valid email address.",
        variant: "destructive"
      });
      return;
    }
    
    setIsSubmitting(true);
    
    // Here you would typically call your API to add the email to your waitlist
    // For now, we'll just simulate a successful submission
    setTimeout(() => {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist.",
      });
      setEmail('');
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto w-full">
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="bg-white/10 backdrop-blur-sm border-bburst-teal/30 placeholder:text-gray-400 h-12"
        required
      />
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="bg-bburst-purple hover:bg-bburst-purple/90 text-white h-12 px-6 flex items-center gap-2 transition-all"
      >
        {isSubmitting ? 'Joining...' : 'Join Waitlist'}
        <ArrowRight size={18} />
      </Button>
    </form>
  );
};

export default WaitlistForm;
