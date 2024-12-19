import { Link } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Import Font Awesome

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-8 pb-4">
      {/* Top Section */}
      <div className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-gray-700 pb-6">
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/aboutus" className="hover:text-white">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/shop" className="hover:text-white">
                Shop
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-white">
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 2 - Company Info */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            About Artician Marketplace
          </h2>
          <p className="text-sm leading-relaxed">
            We connect local artisans with premium customers, bringing
            handcrafted products to your doorstep. Discover quality and
            authenticity with us.
          </p>
        </div>

        {/* Column 3 - Newsletter Subscription */}
        <div>
          <h2 className="text-lg font-semibold text-white mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-sm mb-4">
            Stay updated with the latest products and offers.
          </p>
          <div className="flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 rounded-l bg-gray-800 text-white placeholder-gray-500 focus:outline-none"
            />
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-r">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row justify-between items-center mt-6">
        {/* Copyright */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} Artician Marketplace. All Rights
          Reserved.
        </p>

        {/* Social Media Icons */}
        <div className="flex space-x-4 mt-4 md:mt-0">
          <a
            href="https://facebook.com"
            aria-label="Facebook"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://twitter.com"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <i className="fab fa-twitter"></i>
          </a>
          <a
            href="https://instagram.com"
            aria-label="Instagram"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <i className="fab fa-instagram"></i>
          </a>
          <a
            href="https://linkedin.com"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
