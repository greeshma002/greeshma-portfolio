import React from "react";


const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 py-10">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between gap-10">
        
        {/* Left Section */}
        <div className="flex flex-col md:flex-row gap-20">
          
          {/* Phone */}
          <div>
            <h3 className="font-semibold text-black mb-2">Phone</h3>
            <p className="text-gray-700">123-456-7890</p>
          </div>

          {/* Email */}
          <div>
            <h3 className="font-semibold text-black mb-2">Email</h3>
            <p className="text-gray-700">info@mysite.com</p>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-semibold text-black mb-2">Follow Me</h3>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-gray-600 transition">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a href="#" className="hover:text-gray-600 transition">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-sm text-gray-600 md:text-right">
          <p>© 2035 By Nicol Rider.</p>
          <p>
            Powered and secured by{" "}
            <span className="underline cursor-pointer">Wix</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
