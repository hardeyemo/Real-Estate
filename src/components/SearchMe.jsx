"use client";
import img1 from "../assets/Rectangle 81.png";
import img2 from "../assets/Rectangle 87.png";
import img3 from "../assets/Rectangle 83.png";
import React, { useState, useEffect } from 'react';

// Updated with unique properties only
const propertyData = [
  { name: "Landmark Living", type: "Banana Island, Ikoyi, Lagos", image: img3, amount: "NGN 700k/Y" },
  { name: "Urban Oasis", type: "Lekki, Lagos", image: img1, amount: "NGN 700k/Y" },
  { name: "Coastal Comfort", type: "Victoria Island", image: img2, amount: "NGN 450k/Y" },
  { name: "Mountain Retreat", type: "Lekki, Lagos", image: img3, amount: "NGN 700k/Y" },
  { name: "Sunny Villa", type: "Lekki, Lagos", image: img1, amount: "NGN 700k/Y" },
  // Repeat some for visual diversity if needed
];

const SearchMe = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState(propertyData);

  useEffect(() => {
    const trimmedSearch = search.trim().toLowerCase();

    if (trimmedSearch === "") {
      setSearchResults(propertyData);
    } else {
      const results = propertyData.filter(property =>
        property.name.toLowerCase().includes(trimmedSearch) ||
        property.type.toLowerCase().includes(trimmedSearch)
      );
      setSearchResults(results);
    }
  }, [search]);

  return (
    <div className="flex flex-col items-center justify-center mb-[100px] mt-[100px]">
      <div className="flex gap-1 items-center border border-gray-300 rounded-lg p-2 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for properties..."
          className="outline-none w-[50vw] px-2 py-3"
        />
        <button
          type="button"
          onClick={() => setSearch('')}
          className="bg-gray-300 text-gray-700 px-4 py-3 rounded-r-lg"
        >
          Clear
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4">
        {searchResults.length > 0 ? (
          searchResults.map((property, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-md">
              <img src={property.image} alt={property.name} className="w-full h-40 object-cover rounded-md mb-2" />
              <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
              <div className="flex items-center gap-10">
                <p className="text-gray-600">{property.type}</p>
                <p className="text-gray-600">{property.amount}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 col-span-full">No properties found</p>
        )}
      </div>
    </div>
  );
};

export default SearchMe;
