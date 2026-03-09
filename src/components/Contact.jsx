import { useState } from 'react';
import Instagram from '../assets/instagram.png';
import Facebook from '../assets/facebook.png';
import Linked from '../assets/linked.png';
import Gmail from '../assets/gmail.png';
import Location from '../assets/location.png';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formStatus, setFormStatus] = useState('idle');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return setFormStatus('error');
    setFormStatus('sending');
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(`${formData.message}\n\nFrom: ${formData.name} <${formData.email}>`);
    window.location.href = `mailto:argjendkozhani15@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => setFormStatus('success'), 400);
  };

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/argjend___kozhani' },
    { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/argjend-kozhani.1' },
    { name: 'LinkedIn', icon: Linked, url: 'https://www.linkedin.com/in/argjend-kozhani' },
    { name: 'Gmail', icon: Gmail, url: 'mailto:argjendkozhani15@gmail.com' }
  ];

  return (
    <>
      <section id="contact" className="px-6 relative" style={{ paddingTop: '64px', paddingBottom: '64px' }}>
        <div className="w-full max-w-7xl mx-auto px-6 flex flex-col items-center">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent mb-8">
              Get In Touch
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[2fr_1fr] gap-8 lg:gap-12 w-full max-w-3xl mx-auto items-stretch">
            <div className="p-8 bg-gradient-to-br from-gray-900/75 to-gray-900/60 border border-gray-800 rounded-3xl shadow-xl h-full flex flex-col w-full backdrop-blur-sm ring-1 ring-gray-800">
              <h3 className="text-2xl font-semibold text-white mb-1">Send a message</h3>
              <p className="text-gray-300 mb-4">Short and sweet — I reply quickly.</p>

              <form onSubmit={handleSubmit} className="space-y-6 flex-1 flex flex-col w-full">
                <div>
                  <label htmlFor="name" className="block text-sm text-gray-200 mb-1 font-medium">Name</label>
                  <input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-12 shadow-sm"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-gray-200 mb-1 font-medium">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent h-12 shadow-sm"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-gray-200 mb-1 font-medium">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={8}
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-gray-800/60 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none h-40 shadow-sm"
                    placeholder="Tell me about your project or opportunity..."
                  />
                </div>

                <div className="mt-8 mb-8 flex flex-col items-center gap-3">
                  <button
                    type="submit"
                    className="inline-flex w-full md:w-auto items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-base font-semibold rounded-lg hover:scale-[1.01] transition-transform duration-150 shadow-lg focus:outline-none focus:ring-4 focus:ring-indigo-400/30 whitespace-nowrap"
                  >
                    {formStatus === 'sending' ? 'Opening...' : 'Send Message'}
                  </button>

                  <div aria-live="polite" className="text-sm mt-2 text-center">
                    {formStatus === 'success' && <span className="text-green-400">Email client opened.</span>}
                    {formStatus === 'error' && <span className="text-yellow-300">Please complete all fields.</span>}
                  </div>
                </div>
              </form>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="p-5 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-sm h-full flex items-center justify-center w-full">
                <div className="flex items-center gap-3 w-auto justify-center mr-2">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-500 to-pink-500 flex-shrink-0">
                    <img src={Location} alt="Location" className="w-5 h-5 filter brightness-0 invert" />
                  </div>
                  <div className="text-center">
                    <h4 className="text-md font-semibold text-white">Based in Kosovo</h4>
                    <p className="text-sm text-gray-200">Lipjan</p>
                    <a href="tel:+38345811336" className="mt-1 inline-block text-indigo-200">+383 45 811 336</a>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl shadow-sm h-full flex flex-col justify-between w-full">
                <div className="text-center">
                  <h4 className="text-md font-semibold text-white">Connect</h4>
                  <p className="text-sm text-gray-200 mt-1">Find me on social media or send an email.</p>
                </div>

                <div className="flex gap-3 mt-3 mb-6 items-center justify-center flex-nowrap">
                  {socialLinks.map((s) => (
                    <a
                      key={s.name}
                      href={s.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 sm:w-14 sm:h-14 bg-gray-800/60 hover:bg-gradient-to-r hover:from-indigo-600 hover:to-pink-500 rounded-lg transition-colors flex items-center justify-center"
                      aria-label={s.name}
                      title={s.name}
                    >
                      <img src={s.icon} alt={s.name} className="w-5 h-5" />
                    </a>
                  ))}
                </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl text-center h-full flex items-center justify-center w-full">
                <div>
                  <h4 className="text-md font-semibold text-white">Quick Contact</h4>
                  <div className="text-sm text-gray-200 mt-2">
                    <a href="mailto:argjendkozhani15@gmail.com" className="block hover:text-indigo-200 break-all">argjendkozhani15@gmail.com</a>
                    <a href="tel:+38345811336" className="block hover:text-indigo-200">+383 45 811 336</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full" aria-hidden="true">
          <div className="h-6 md:h-8" />
        </div>

      </section>

      <footer className="w-full bg-gray-900 text-gray-300 py-6 mt-12">
        <p className="text-center text-sm">
          © {new Date().getFullYear()} Argjend Kozhani — All rights reserved
        </p>
      </footer>
    </>
  );
};

export default Contact;
