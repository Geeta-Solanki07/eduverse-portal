// components/Footer.tsx
import React from "react";
import Image from "next/image";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaYoutube, FaGooglePlay, FaApple, FaCopyright } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#c5d1ff] relative">
      <div className="max-w-7xl mx-auto py-10 px-5 grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <Image src="/assets/image/logo.png" alt="Dousoft Eduverse Logo" width={150} height={50} />
          <div className="flex gap-3 mt-4">
            <FaFacebookF className="w-6 h-6 text-gray-700" />
            <FaTwitter className="w-6 h-6 text-gray-700" />
            <FaInstagram className="w-6 h-6 text-gray-700" />
            <FaLinkedinIn className="w-6 h-6 text-gray-700" />
            <FaYoutube className="w-6 h-6 text-gray-700" />
          </div>

          <div className="mt-6 space-y-2">
            <a href="#" className="flex items-center gap-2">
              <FaGooglePlay />
              <div>
                <p className="text-xs">GET IT ON</p>
                <p className="font-semibold">Google Play</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-2 mt-2">
              <FaApple />
              <div>
                <p className="text-xs">DOWNLOAD ON THE</p>
                <p className="font-semibold">APP STORE</p>
              </div>
            </a>
          </div>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="font-bold mb-4">COMPANY</h4>
          <div className="flex flex-col gap-2">
            <a href="/about" className="hover:text-orange-500">About Us</a>
            <a href="/contact" className="hover:text-orange-500">Contact Us</a>
            <a href="/career" className="hover:text-orange-500">Careers</a>
            <a href="/blog" className="hover:text-orange-500">Blog & Updates</a>
          </div>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="font-bold mb-4">OUR TRAINING CENTERS</h4>
          <div className="flex flex-col gap-2">
            <a href="/training-center" className="hover:text-orange-500">New Delhi</a>
            <a href="/training-center" className="hover:text-orange-500">Mumbai</a>
            <a href="/training-center" className="hover:text-orange-500">Hyderabad</a>
            <a href="/training-center" className="hover:text-orange-500">Bengaluru</a>
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="font-bold mb-4">POPULAR COURSES</h4>
          <div className="flex flex-col gap-2">
            <a href="/full-stack-web-development" className="hover:text-orange-500">Full Stack Web Development</a>
            <a href="/python-for-beginners" className="hover:text-orange-500">Python for Data Science</a>
            <a href="/react-native-mobile-apps" className="hover:text-orange-500">Mobile App Development</a>
            <a href="/ui-ux-principles" className="hover:text-orange-500">UI/UX Design Fundamentals</a>
          </div>
        </div>
      </div>

      {/* Useful Links */}
      <div className="max-w-7xl mx-auto px-5 py-4">
        <h4 className="font-bold mb-3">USEFUL LINKS</h4>
        <div className="flex flex-wrap gap-3 text-sm">
          <a href="#!" className="hover:text-orange-500">Best Web Development Courses in Delhi</a>
          <a href="#!" className="hover:text-orange-500">Python Training in Mumbai</a>
          <a href="#!" className="hover:text-orange-500">React.js Bootcamp in Pune</a>
          <a href="#!" className="hover:text-orange-500">Java Full Stack Courses in Hyderabad</a>
          <a href="#!" className="hover:text-orange-500">UI/UX Design Classes in Chennai</a>
          <a href="#!" className="hover:text-orange-500">Android Development Courses Online</a>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="max-w-7xl mx-auto px-5 py-4 border-t border-gray-300 flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex gap-2">
          <a href="/privacy-policy" className="hover:text-orange-500">Privacy Policy</a>
          <span>|</span>
          <a href="/terms" className="hover:text-orange-500">Terms & Conditions</a>
        </div>

        <div className="flex items-center gap-2 mt-2 md:mt-0">
          <FaCopyright />
          <span>Copyright 2025 Dousoft Eduverse. All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
