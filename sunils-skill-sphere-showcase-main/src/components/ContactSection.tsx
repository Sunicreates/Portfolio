
import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Github } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="relative py-20 px-4 bg-gradient-to-b from-transparent to-black/50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">
          Let's Connect
        </h2>
        <p className="text-xl text-gray-300 mb-12">
          Ready to bring your ideas to life? Let's build something amazing together!
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

          
          <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-cyan-500/50 transition-all duration-300 hover:scale-105">
            <Mail className="w-8 h-8 text-cyan-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Email</h3>
            <p className="text-gray-300 text-sm">sunilcodes2005@gmail.com</p>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-green-500/50 transition-all duration-300 hover:scale-105">
            <MapPin className="w-8 h-8 text-green-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Location</h3>
            <p className="text-gray-300">Bangalore, India</p>
          </div>
          
          <div className="p-6 bg-gradient-to-br from-gray-900/50 to-black/50 backdrop-blur-sm border border-gray-800 rounded-xl hover:border-blue-500/50 transition-all duration-300 hover:scale-105">
            <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">LinkedIn</h3>
            <a 
              href="https://www.linkedin.com/in/sunil-kumar-83a286317?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-blue-400 transition-colors text-sm"
            >
              Connect
            </a>
          </div>
        </div>
        
        <div className="flex justify-center gap-6">
          <a
            href="mailto:sunilcodes2005@gmail.com"
            className="px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 hover:from-purple-500 hover:to-cyan-500 text-white rounded-lg font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
          >
            Get In Touch
          </a>
          <a
            href="https://x.com/itsmeSunil12078?t=BuQMFotAkZLEx7vq2oz4WA&s=09"
            className="px-8 py-4 bg-transparent border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white rounded-lg font-medium transition-all duration-300 hover:scale-105"
          >
            Twitter
          </a>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
