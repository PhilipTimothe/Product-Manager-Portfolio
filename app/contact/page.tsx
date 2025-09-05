'use client';

import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { Button } from '@/components/button';
import { Parallax } from '@/components/parallax';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get('name');
    const email = formData.get('email');
    const message = formData.get('message');
    
    const mailtoLink = `mailto:hello@example.com?subject=Contact from ${name}&body=${message}%0D%0A%0D%0AFrom: ${email}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="min-h-screen bg-cream noise-overlay">
      <Navbar />
      
      <main className="pt-32">
        <Container size="medium">
          <div className="text-center mb-16">
            <SectionHeading level={1} className="mb-6">
              Let's Work Together
            </SectionHeading>
            <p className="text-lg text-inkSecondary text-balance">
              Have a project in mind? I'd love to hear about it and explore how we can bring your ideas to life.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Parallax speed={0.2}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-surface rounded-md shadow-card p-8"
              >
                <h2 className="text-2xl font-serif font-medium text-ink mb-6">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-ink mb-2">
                      Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      className="w-full px-4 py-3 border border-border rounded-md bg-surface text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-ink mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full px-4 py-3 border border-border rounded-md bg-surface text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-ink mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-border rounded-md bg-surface text-ink focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-200 resize-vertical"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </motion.div>
            </Parallax>

            {/* Contact Info */}
            <Parallax speed={0.1}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="bg-surface rounded-md shadow-card p-8">
                  <h2 className="text-2xl font-serif font-medium text-ink mb-6">
                    Get in Touch
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <Mail size={20} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium text-ink mb-1">Email</h3>
                        <a 
                          href="mailto:hello@example.com"
                          className="text-inkSecondary hover:text-accent transition-colors duration-200"
                        >
                          hello@example.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <MapPin size={20} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium text-ink mb-1">Location</h3>
                        <p className="text-inkSecondary">San Francisco, CA</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <Clock size={20} className="text-accent" />
                      </div>
                      <div>
                        <h3 className="font-medium text-ink mb-1">Response Time</h3>
                        <p className="text-inkSecondary">Usually within 24 hours</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-creamMuted rounded-md p-8">
                  <h3 className="text-lg font-serif font-medium text-ink mb-4">
                    Let's Discuss Your Project
                  </h3>
                  <p className="text-inkSecondary mb-4">
                    I'm always interested in hearing about new opportunities and challenging projects.
                  </p>
                  <div className="flex items-center gap-2 text-sm text-inkSecondary">
                    <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                    <span>Available for new projects</span>
                  </div>
                </div>
              </motion.div>
            </Parallax>
          </div>
        </Container>
      </main>

      <Footer />
    </div>
  );
}