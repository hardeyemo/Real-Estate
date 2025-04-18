import { useState } from "react";
import check from "../assets/check-list.png";
import group from "../assets/Group 8.png";
import dash from "../assets/dashboard-circle.png";

const Section = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  const toggleDropdown = (id) => {
    setOpenDropdown(openDropdown === id ? null : id);
  };

  return (
    <div className="px-4 sm:px-6 lg:px-10 py-2">
      <div className="flex flex-col sm:flex-row items-center justify-around gap-10 mt-2 w-full">
        <div className="flex flex-col gap-4">
          <h1 className="font-extrabold text-4xl">For You</h1>
          <p className="font-semibold">Showing 1,450 results</p>
        </div>

        <div className="flex flex-wrap sm:flex-nowrap items-center gap-4 font-semibold w-full sm:w-auto relative">
          {/* Filter 1 */}
          <div className="relative w-full sm:w-auto">
            <div
              onClick={() => toggleDropdown("recent")}
              className="flex items-center justify-between gap-4 border-[#d7e0e9] px-5 py-4 border-2 rounded-3xl cursor-pointer hover:bg-gray-100 transition-all"
            >
              <img className="w-6 h-6" src={check} alt="Most recent filter" />
              <p>Most recent</p>
              <img className="w-6 h-6" src={group} alt="Dropdown icon" />
            </div>
            {openDropdown === "recent" && (
              <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-xl shadow-md w-48">
                <ul className="text-sm text-gray-700">
                  <li className="p-3 hover:bg-gray-100 cursor-pointer">Newest</li>
                  <li className="p-3 hover:bg-gray-100 cursor-pointer">Oldest</li>
                  <li className="p-3 hover:bg-gray-100 cursor-pointer">Recently updated</li>
                </ul>
              </div>
            )}
          </div>

          {/* Filter 2 */}
          <div className="relative w-full sm:w-auto">
            <div
              onClick={() => toggleDropdown("pricing")}
              className="flex items-center justify-between gap-4 border-[#d7e0e9] px-5 py-4 border-2 rounded-3xl cursor-pointer hover:bg-gray-100 transition-all"
            >
              <img className="w-6 h-6" src={check} alt="Pricing filter" />
              <p>By pricing</p>
              <img className="w-6 h-6" src={group} alt="Dropdown icon" />
            </div>
            {openDropdown === "pricing" && (
              <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-xl shadow-md w-48">
                <ul className="text-sm text-gray-700">
                  <li className="p-3 hover:bg-gray-100 cursor-pointer">Lowest first</li>
                  <li className="p-3 hover:bg-gray-100 cursor-pointer">Highest first</li>
                  <li className="p-3 hover:bg-gray-100 cursor-pointer">Discounted</li>
                </ul>
              </div>
            )}
          </div>

          {/* Filter 3 */}
          <div className="relative w-full sm:w-auto">
            <div
              onClick={() => toggleDropdown("dashboard")}
              className="flex items-center justify-between gap-4 border-[#d7e0e9] px-5 py-4 border-2 rounded-3xl cursor-pointer hover:bg-gray-100 transition-all"
            >
              <img className="w-6 h-6" src={dash} alt="Dashboard icon" />
              <img className="w-6 h-6" src={check} alt="Dashboard filter" />
            </div>
            {openDropdown === "dashboard" && (
              <div className="absolute z-10 mt-2 bg-white border border-gray-300 rounded-xl shadow-md w-48">
                <ul className="text-sm text-gray-700">
                  <li className="p-3 hover:bg-gray-100 cursor-pointer">Dashboard A</li>
                  <li className="p-3 hover:bg-gray-100 cursor-pointer">Dashboard B</li>
                  <li className="p-3 hover:bg-gray-100 cursor-pointer">Dashboard C</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
