"use client";
import img1 from "../assets/Rectangle 81.png";
import img2 from "../assets/Rectangle 87.png";
import img3 from "../assets/Rectangle 83.png";
import React, { useState } from 'react';

const propertyData = [
  { id: 1, name: "Landmark Living", type: "Banana Island, Ikoyi, Lagos", image: img3, amount: "NGN 700k/Y" },
  { id: 1, name: "Landmark Living", type: "Banana Island, Ikoyi, Lagos", image: img3, amount: "NGN 700k/Y" },
  { id: 1, name: "Landmark Living", type: "Banana Island, Ikoyi, Lagos", image: img3, amount: "NGN 700k/Y" },
  { id: 1, name: "Landmark Living", type: "Banana Island, Ikoyi, Lagos", image: img3, amount: "NGN 700k/Y" },
  { id: 1, name: "Landmark Living", type: "Banana Island, Ikoyi, Lagos", image: img3, amount: "NGN 700k/Y" },
  { id: 2, name: "Urban Oasis", type: "Lekki, Lagos", image: img1, amount: "NGN 700k/Y" },
  { id: 2, name: "Urban Oasis", type: "Lekki, Lagos", image: img1, amount: "NGN 700k/Y" },
  { id: 2, name: "Urban Oasis", type: "Lekki, Lagos", image: img1, amount: "NGN 700k/Y" },
  { id: 3, name: "Coastal Comfort", type: "Victoria Island", image: img2, amount: "NGN 450k/Y" },
  { id: 3, name: "Coastal Comfort", type: "Victoria Island", image: img2, amount: "NGN 450k/Y" },
  { id: 3, name: "Coastal Comfort", type: "Victoria Island", image: img2, amount: "NGN 450k/Y" },
  { id: 3, name: "Coastal Comfort", type: "Victoria Island", image: img2, amount: "NGN 450k/Y" },
  { id: 3, name: "Coastal Comfort", type: "Victoria Island", image: img2, amount: "NGN 450k/Y" },
  { id: 3, name: "Coastal Comfort", type: "Victoria Island", image: img2, amount: "NGN 450k/Y" },
  { id: 3, name: "Coastal Comfort", type: "Victoria Island", image: img2, amount: "NGN 450k/Y" },
  { id: 4, name: "Mountain Retreat", type: "Lekki, Lagos", image: img3, amount: "NGN 700k/Y" },
  { id: 4, name: "Mountain Retreat", type: "Lekki, Lagos", image: img3, amount: "NGN 700k/Y" },
  { id: 4, name: "Mountain Retreat", type: "Lekki, Lagos", image: img3, amount: "NGN 700k/Y" },
  { id: 4, name: "Mountain Retreat", type: "Lekki, Lagos", image: img3, amount: "NGN 700k/Y" },
  { id: 5, name: "Sunny Villa", type: "Lekki, Lagos", image: img1, amount: "NGN 700k/Y" },
  { id: 5, name: "Sunny Villa", type: "Lekki, Lagos", image: img1, amount: "NGN 700k/Y" },
  { id: 5, name: "Sunny Villa", type: "Lekki, Lagos", image: img1, amount: "NGN 700k/Y" },
  { id: 5, name: "Sunny Villa", type: "Lekki, Lagos", image: img1, amount: "NGN 700k/Y" },
  { id: 5, name: "Sunny Villa", type: "Lekki, Lagos", image: img1, amount: "NGN 700k/Y" },
];

const SearchMe = () => {
  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const results = propertyData.filter(property =>
      property.name.toLowerCase().includes(search.toLowerCase()) ||
      property.type.toLowerCase().includes(search.toLowerCase())
    );

    setSearchResults(results);
    setSearch('');
  };

  return (
    <div className="flex flex-col items-center justify-center mb-[100px] mt-[100px]">
      <form onSubmit={handleSubmit} className="flex gap-1 items-center border border-gray-300 rounded-lg p-2 mb-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search for properties..."
          className="outline-none w-[50vw] px-2 py-3 "
        />
        <button type="submit" className="bg-blue-500 text-white px-4 py-3 rounded-r-lg"> Search </button>
      </form>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {searchResults.length > 0 ? (
          searchResults.map((property) => (
            <div key={property.id} className="bg-white p-4 rounded-lg shadow-md">
              <img src={property.image} alt={property.name} className="w-full h-40 object-cover rounded-md mb-2" />
              <h3 className="text-xl font-semibold mb-2">{property.name}</h3>
              <div className="flex items-center gap-10">
                <p className="text-gray-600">{property.type}</p>
                <p className="text-gray-600">{property.amount}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600">No properties found</p>
        )}
      </div>
    </div>
  );
};

export default SearchMe;
