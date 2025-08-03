import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useSpring, animated } from '@react-spring/web';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { ContactForm } from '../../types';
import { Button } from '../ui/Button';

export const Contact: React.FC = () => {
  const [form, setForm] = useState<ContactForm>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const [{ submitProgress }, submitApi] = useSpring(() => ({
    from: { submitProgress: 0 },
    config: { tension: 200, friction: 20 }
  }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate form submission
    submitApi.start({ submitProgress: 1 });
    
    setTimeout(() => {
      setIsSubmitted(true);
      setForm({ name: '', email: '', subject: '', message: '' });
      submitApi.set({ submitProgress: 0 });
    }, 1500);
  };

  const handleInputChange = (field: keyof ContactForm, value: string) => {
    setForm(prev => ({ ...prev, [field]: value }));
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'hello@nextgendev.com' },
    { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567' },
    { icon: MapPin, label: 'Location', value: 'San Francisco, CA' }
  ];

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 bg-bg">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: 'spring' }}
            className="bg-bg-secondary/50 backdrop-blur-sm rounded-2xl border border-text/10 p-12"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
              className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-green-500" />
            </motion.div>
            <h3 className="text-2xl font-bold text-text mb-4">Thank You!</h3>
            <p className="text-text/70 mb-6">
              Your message has been sent successfully. I'll get back to you within 24 hours.
            </p>
            <Button onClick={() => setIsSubmitted(false)}>
              Send Another Message
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-bg">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-text mb-6">
            Let's <span className="text-primary">Connect</span>
          </h2>
          <p className="text-xl text-text/70 max-w-3xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next project
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-text mb-6">Get in Touch</h3>
              <p className="text-text/70 mb-8">
                I'm always excited to work on new projects and collaborate with 
                innovative teams. Don't hesitate to reach out!
              </p>
            </div>

            {contactInfo.map((info, index) => (
              <motion.div
                key={info.label}
                className="flex items-center space-x-4 p-4 bg-bg-secondary/50 backdrop-blur-sm rounded-xl border border-text/10 hover:border-primary/30 transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, x: 5 }}
              >
                <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                  <info.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-text/60">{info.label}</p>
                  <p className="text-text font-medium">{info.value}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {[
                { field: 'name', label: 'Name', type: 'text' },
                { field: 'email', label: 'Email', type: 'email' },
                { field: 'subject', label: 'Subject', type: 'text' }
              ].map(({ field, label, type }) => (
                <motion.div
                  key={field}
                  className="relative"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                >
                  <motion.input
                    type={type}
                    value={form[field as keyof ContactForm]}
                    onChange={(e) => handleInputChange(field as keyof ContactForm, e.target.value)}
                    onFocus={() => setFocusedField(field)}
                    onBlur={() => setFocusedField(null)}
                    className="w-full px-4 py-3 bg-bg-secondary/50 backdrop-blur-sm border border-text/20 rounded-xl text-text placeholder-text/50 focus:outline-none focus:border-primary/50 transition-all duration-300"
                    placeholder={label}
                    required
                    animate={{
                      scale: focusedField === field ? 1.02 : 1,
                      borderColor: focusedField === field ? 'var(--primary)' : 'var(--text-20)'
                    }}
                    transition={{ duration: 0.3 }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 h-0.5 bg-primary"
                    initial={{ width: 0 }}
                    animate={{ width: focusedField === field ? '100%' : 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.div>
              ))}

              <motion.div
                className="relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <motion.textarea
                  value={form.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  rows={5}
                  className="w-full px-4 py-3 bg-bg-secondary/50 backdrop-blur-sm border border-text/20 rounded-xl text-text placeholder-text/50 focus:outline-none focus:border-primary/50 transition-all duration-300 resize-none"
                  placeholder="Message"
                  required
                  animate={{
                    scale: focusedField === 'message' ? 1.02 : 1,
                    borderColor: focusedField === 'message' ? 'var(--primary)' : 'var(--text-20)'
                  }}
                  transition={{ duration: 0.3 }}
                />
                <motion.div
                  className="absolute bottom-0 left-0 h-0.5 bg-primary"
                  initial={{ width: 0 }}
                  animate={{ width: focusedField === 'message' ? '100%' : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                viewport={{ once: true }}
                className="relative"
              >
                <Button 
                  type="submit" 
                  size="lg" 
                  icon={Send}
                  className="w-full relative overflow-hidden"
                >
                  <span className="relative z-10">Send Message</span>
                  <animated.div
                    className="absolute inset-0 bg-primary/20"
                    style={{
                      width: submitProgress.to(p => `${p * 100}%`)
                    }}
                  />
                </Button>
              </motion.div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};