import { Button } from "@/components/ui/button";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#4b0082] text-white py-8">
      <div className="container mx-auto px-6 lg:px-20">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between items-center space-y-6 lg:space-y-0">
          {/* Logo and Brand Name */}
          <div className="text-lg font-semibold text-center lg:text-left">
            <span className="text-primary">VirtualInterviewPrep</span>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center lg:justify-end space-x-6">
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="w-6 h-6 transition transform hover:scale-110" />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="w-6 h-6 transition transform hover:scale-110" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="w-6 h-6 transition transform hover:scale-110" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="w-6 h-6 transition transform hover:scale-110" />
            </a>
          </div>
        </div>

        {/* Footer Links Section */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#about" className="hover:text-primary transition duration-300">
                  About Us
                </a>
              </li>
              <li>
                <a href="#features" className="hover:text-primary transition duration-300">
                  Features
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary transition duration-300">
                  Contact
                </a>
              </li>
              <li>
                <a href="#privacy" className="hover:text-primary transition duration-300">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="text-sm space-y-2">
              <li>Email: support@virtualinterviewprep.com</li>
              <li>Phone: +1 (555) 123-4567</li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <form className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 rounded-md text-gray-800"
              />
              <Button className="bg-white text-primary rounded-lg shadow-md hover:bg-primary-dark transition duration-300">
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm">
          <p>© 2024 VirtualInterviewPrep. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
