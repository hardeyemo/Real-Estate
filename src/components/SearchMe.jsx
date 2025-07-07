import img1 from "../assets/Rectangle 81.png";
import img2 from "../assets/Rectangle 87.png";
import img3 from "../assets/Rectangle 83.png";
import img4 from "../assets/565772412.png";
import img5 from "../assets/4489789828d0d144b7f898793951a61194b2fcf6-932x620.png";
import img6 from "../assets/expediav2-75979-4b86ba-851345.jpg";
import img7 from "../assets/fitness-thumb-3.jpg";
import img8 from "../assets/images.jpeg";
import React, { useState, useEffect, useMemo } from 'react';
import ReactPaginate from 'react-paginate';

const propertyData = [
  { name: "Landmark Living", type: "Banana Island, Ikoyi, Lagos", image: img3, amount: "NGN 700k/Y" },
  { name: "Urban Oasis", type: "Lekki, Lagos", image: img1, amount: "NGN 700k/Y" },
  { name: "Coastal Comfort", type: "Victoria Island", image: img2, amount: "NGN 450k/Y" },
  { name: "Mountain Retreat", type: "Lekki, Lagos", image: img3, amount: "NGN 700k/Y" },
  { name: "Sunny Villa", type: "Lekki, Lagos", image: img1, amount: "NGN 700k/Y" },
  { name: "Peace Haven", type: "Ikoyi, Lagos", image: img2, amount: "NGN 300k/Y" },
  {
    image: img8,
    name: 'Traditional Family House',
    type: 'Surulere, Lagos',
    amount: 'NGN 700,000/Y',
  },
  {
    image: img6,
    name: 'Luxury Villa with Pool',
    type: 'Banana Island, Ikoyi, Lagos',
    amount: 'NGN 2,500,000/Y',
  },
  {
    image: img5,
    name: 'Cozy Suburban Home',
    type: 'Lekki, Lagos',
    amount: 'NGN 850,000/Y',
  },
  {
    image: img7,
    name: 'Urban Loft Interior',
    type: 'Ikeja, Lagos',
    amount: 'NGN 950,000/Y',
  },
  {
    image: img4,
    name: 'Modern Apartment Building',
    type: 'Victoria Island, Lagos',
    amount: 'NGN 1,200,000/Y',
  },
];

const parseAmount = (amount) => {
  const match = amount.match(/\d+/g);
  return match ? parseInt(match.join("")) : 0;
};

const SearchMe = () => {
  const [search, setSearch] = useState('');
  const [sortOrder, setSortOrder] = useState('asc');
  const [currentPage, setCurrentPage] = useState(0);
  const postsPerPage = 3;

  const filtered = useMemo(() => {
    const trimmed = search.trim().toLowerCase();
    let results = propertyData.filter(property =>
      property.name.toLowerCase().includes(trimmed) ||
      property.type.toLowerCase().includes(trimmed)
    );

    results = results.sort((a, b) => {
      const amountA = parseAmount(a.amount);
      const amountB = parseAmount(b.amount);
      return sortOrder === 'asc' ? amountA - amountB : amountB - amountA;
    });

    return results;
  }, [search, sortOrder]);

  const offset = currentPage * postsPerPage;
  const currentPosts = filtered.slice(offset, offset + postsPerPage);

  const handlePageChange = ({ selected }) => setCurrentPage(selected);
  const handleClear = () => setSearch('');

  return (
    <div className="flex flex-col items-center justify-center mb-[100px] mt-[100px] max-sm:mt-5">
      <div className="flex flex-col lg:flex-row gap-4 items-center mb-6 w-full px-4 lg:px-0 justify-center">
        <div className="flex gap-1 border border-gray-300 rounded-lg p-2 w-full lg:w-[50vw]">
          <input
            type="text"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setCurrentPage(0);
            }}
            placeholder="Search for properties..."
            className="outline-none px-2 py-3 w-full focus:ring-2 focus:ring-blue-300 rounded-lg"
          />
          {search && (
            <button
              type="button"
              onClick={handleClear}
              className="bg-gray-300 text-gray-700 px-4 py-3 rounded-r-lg"
            >
              Clear
            </button>
          )}
        </div>

        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="border border-gray-300 p-2 rounded-md"
        >
          <option value="asc">Sort by Price: Low to High</option>
          <option value="desc">Sort by Price: High to Low</option>
        </select>
      </div>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4">
        {currentPosts.length > 0 ? (
          currentPosts.map((property, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <img
                src={property.image}
                alt={property.name}
                className="w-full h-40 object-cover rounded-md mb-2"
              />
              <h3 className="text-xl font-semibold mb-2">
                {highlightText(property.name, search)}
              </h3>
              <div className="flex items-center gap-10">
                <p className="text-gray-600">{highlightText(property.type, search)}</p>
                <p className="text-gray-600">{property.amount}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-gray-600 col-span-full">No properties found</p>
        )}
      </div>

      {filtered.length > postsPerPage && (
        <div className="flex justify-center mt-10">
          <ReactPaginate
            previousLabel="← Previous"
            nextLabel="Next →"
            pageCount={Math.ceil(filtered.length / postsPerPage)}
            onPageChange={handlePageChange}
            containerClassName="flex space-x-2"
            pageLinkClassName="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300"
            activeLinkClassName="bg-[#51B73B] text-white"
            previousLinkClassName="px-3 py-2 bg-black text-white rounded"
            nextLinkClassName="px-3 py-2 bg-black text-white rounded"
            breakLabel="..."
            breakLinkClassName="px-3 py-1"
            forcePage={currentPage}
          />
        </div>
      )}
    </div>
  );
};

// Optional: highlight matched text
function highlightText(text, search) {
  const trimmedSearch = search.trim();
  if (!trimmedSearch) return text;

  const regex = new RegExp(`(${trimmedSearch})`, 'gi');
  return (
    <span dangerouslySetInnerHTML={{
      __html: text.replace(regex, '<mark class="bg-yellow-200">$1</mark>')
    }} />
  );
}

export default SearchMe;
