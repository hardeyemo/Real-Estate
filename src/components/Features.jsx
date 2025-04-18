import React from 'react';
import fea from "../assets/fea.png";
import feat from "../assets/feat.png";
import feature from "../assets/feature.png";

const Features = () => {
  return (
    <div className="px-4 py-4">
      {/* Heading Section */}
      <div className="flex flex-col items-center text-center mb-10">
        <h1 className="font-bold text-2xl md:text-3xl">Feature for all users</h1>
        <p className="text-gray-600 mt-2">These are the list of all partner states</p>
      </div>

      {/* Feature Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {/* Card 1 */}
        <div className="relative">
          <img className="h-[29vh] w-full object-cover rounded-xl" src={fea} alt="Student" />
          <div className="absolute bottom-5 left-5 text-white">
            <h1 className="font-bold text-lg">Student</h1>
            <p className="text-sm">Want to rent house for schooling</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="relative">
          <img className="h-[29vh] w-full object-cover rounded-xl" src={feat} alt="Tech Professionals" />
          <div className="absolute bottom-5 left-5 text-white">
            <h1 className="font-bold text-lg">Tech Professionals</h1>
            <p className="text-sm">Need house with working space environment</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="relative">
          <img className="h-[29vh] w-full object-cover rounded-xl" src={feature} alt="Business Men" />
          <div className="absolute bottom-5 left-5 text-white">
            <h1 className="font-bold text-lg">Business Men</h1>
            <p className="text-sm">Best place to settle down after the meeting</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
