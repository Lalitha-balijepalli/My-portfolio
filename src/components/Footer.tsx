import React from 'react';
import { Heart, Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand Section */}
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-teal-400 bg-clip-text text-transparent mb-4">
              Vijaya Lalitha
            </h3>
            <p className="text-gray-300 mb-4">
              Data Science Enthusiast & Future Innovator
            </p>
            <p className="text-gray-400 text-sm">
              Turning data into insights, one algorithm at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <a href="#home" className="block text-gray-300 hover:text-purple-400 transition-colors duration-200">
                Home
              </a>
              <a href="#about" className="block text-gray-300 hover:text-purple-400 transition-colors duration-200">
                About
              </a>
              <a href="#projects" className="block text-gray-300 hover:text-purple-400 transition-colors duration-200">
                Projects
              </a>
              <a href="#contact" className="block text-gray-300 hover:text-purple-400 transition-colors duration-200">
                Contact
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">Get In Touch</h4>
            <div className="space-y-2 text-gray-300">
              <p className="flex items-center justify-center md:justify-end space-x-2">
                <Mail className="w-4 h-4" />
                <span>b.vlalitha.ai@gmail.com</span>
              </p>
              <p className="text-sm text-gray-400">
                Available for internships & collaborations
              </p>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center space-x-6 mb-8">
          <a
            href="https://www.linkedin.com/in/vijaya-lalitha-balijepalli-2711b931b/"
            className="bg-gray-800 p-3 rounded-full hover:bg-purple-600 transition-colors duration-300"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          <a
            href="https://github.com/Lalitha-balijepalli"
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors duration-300"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/lalitha_vi3817"
            className="bg-gray-800 p-3 rounded-full hover:bg-blue-500 transition-colors duration-300"
          >
            <Twitter className="w-5 h-5" />
          </a>
          <a
  href="mailto:b.vlalitha.ai@gmail.com"
  className="bg-gray-800 p-3 rounded-full hover:bg-red-500 transition-colors duration-300"
>
  <Mail className="w-5 h-5" />
</a>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400 flex items-center justify-center space-x-2">
            <span>© {currentYear} Vijaya Lalitha | Designed with</span>
            <Heart className="w-4 h-4 text-red-500" />
            <span>and lots of coffee ☕</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;