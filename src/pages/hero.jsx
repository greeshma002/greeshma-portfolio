import React from "react";
import myImage from "../../src/assets/profile.jpeg"

const Hero = () => {
  return (
    <section className="w-full bg-[#f9f9f9] py-30">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">

        {/* Image Section */}
      <div className="flex-shrink-0">
  <div className="group relative w-72 h-72 md:w-96 md:h-96 rounded-full overflow-hidden">
    <img
      src={myImage}
      alt="Profile"
      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
    />
    <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
  </div>
</div>



        {/* Content Section */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
            Hello
          </h1>

          <h2 className="text-lg font-semibold mb-4">
            A Bit About Me
          </h2>

          <p className="text-gray-700 leading-relaxed mb-10">
            I'm a paragraph. Click here to add your own text and edit me.
            I’m a great place for you to tell a story and let your users
            know a little more about you.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6">
            <button className="w-28 h-28 rounded-full bg-[#E1D0B3] hover:scale-105 transition font-semibold">
              Resume
            </button>
            <button className="w-28 h-28 rounded-full bg-[#A18D6D] text-black hover:scale-105 transition font-semibold">
              Projects
            </button>
            <button className="w-28 h-28 rounded-full bg-[#703B3B] hover:scale-105 transition font-semibold">
              Contact
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
