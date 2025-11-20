import { useState } from 'react';
import { Mail, Send, Shield, Heart } from 'lucide-react';
import Nav from '../Components/Nav';
import Footer from '../Components/Footer';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({ name: '', email: '', subject: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Nav />

      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-3 mb-4">
            <Mail className="text-blue-600" size={40} />
            <h1 className="text-5xl font-bold text-slate-800">Get in Touch</h1>
          </div>
          <p className="text-lg text-slate-700 max-w-2xl mx-auto">
            Have a question? Want to share your story? Need to talk? Reach out.
            All messages are kept completely confidential.
          </p>
        </div>

        {/* Privacy Notice */}
        <div className="bg-green-50 border-l-4 border-green-600 p-6 rounded-r-lg mb-8">
          <div className="flex items-start gap-3">
            <Shield className="text-green-600 flex-shrink-0 mt-1" size={24} />
            <div>
              <h3 className="font-bold text-green-900 mb-2">Your Privacy is Sacred</h3>
              <p className="text-green-800 leading-relaxed">
                Your message will only be seen by the site administrator. I understand the importance
                of anonymity in our community. You can use a pseudonym if you prefer.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-white rounded-xl shadow-lg p-8">
          {submitted ? (
            <div className="text-center py-12">
              <Heart className="mx-auto text-green-600 mb-4" size={64} />
              <h2 className="text-3xl font-bold text-slate-800 mb-4">Message Sent</h2>
              <p className="text-lg text-slate-600">
                Thank you for reaching out. I'll respond as soon as possible.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                  Name (or pseudonym)
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="How should I address you?"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                  placeholder="your.email@example.com"
                />
                <p className="text-xs text-slate-500 mt-1">
                  Only used to respond to you. Never shared or stored permanently.
                </p>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-slate-700 mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                >
                  <option value="">Select a topic...</option>
                  <option value="question">Question about the site</option>
                  <option value="resource">Suggest a resource</option>
                  <option value="story">Share my story</option>
                  <option value="support">Need support/guidance</option>
                  <option value="feedback">Feedback</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={8}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition resize-none"
                  placeholder="What's on your mind?"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                <Send size={20} />
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Alternative Contact Info */}
        <div className="mt-12 text-center">
          <h3 className="text-xl font-bold text-slate-800 mb-4">Prefer to Email Directly?</h3>
          <a
            href="mailto:contact@vayeavek.org"
            className="text-blue-600 hover:text-blue-700 font-medium text-lg"
          >
            contact@vayeavek.org
          </a>
          <p className="text-sm text-slate-500 mt-2">
            (Note: This is a placeholder email. Update with your actual contact.)
          </p>
        </div>

        {/* Important Resources Reminder */}
        <div className="mt-12 bg-rose-50 border-l-4 border-rose-600 p-6 rounded-r-lg">
          <h3 className="font-bold text-rose-900 mb-2">In Crisis?</h3>
          <p className="text-rose-800 mb-3">
            If you're in immediate danger or crisis, please reach out to a crisis line right away:
          </p>
          <div className="space-y-1 text-rose-800">
            <p><strong>Relief Crisis Hotline:</strong> 718-431-9501 (24/7)</p>
            <p><strong>National Crisis Line:</strong> 988 (24/7)</p>
            <p><strong>Emergency:</strong> 911</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
