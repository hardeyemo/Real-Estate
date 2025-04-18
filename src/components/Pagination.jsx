import React, { useState, useMemo } from 'react';
import img1 from "../assets/Rectangle 81.png";
import img2 from "../assets/Rectangle 87.png";
import img3 from "../assets/Rectangle 83.png";
import ReactPaginate from 'react-paginate';
import img4 from "../assets/565772412.png";
import img5 from "../assets/4489789828d0d144b7f898793951a61194b2fcf6-932x620.png";
import img6 from "../assets/expediav2-75979-4b86ba-851345.jpg";
import img7 from "../assets/fitness-thumb-3.jpg";
import img8 from "../assets/images.jpeg";






const posts = [
  {
    id: 1,
    picture: img4,
    head: 'Modern Apartment Building',
    location: 'Victoria Island, Lagos',
    amount: 'NGN 1,200,000/Y',
  },
  {
    id: 2,
    picture: img5,
    head: 'Cozy Suburban Home',
    location: 'Lekki, Lagos',
    amount: 'NGN 850,000/Y',
  },
  {
    id: 3,
    picture: img6,
    head: 'Luxury Villa with Pool',
    location: 'Banana Island, Ikoyi, Lagos',
    amount: 'NGN 2,500,000/Y',
  },
  {
    id: 4,
    picture: img7,
    head: 'Urban Loft Interior',
    location: 'Ikeja, Lagos',
    amount: 'NGN 950,000/Y',
  },
  {
    id: 5,
    picture: img8,
    head: 'Traditional Family House',
    location: 'Surulere, Lagos',
    amount: 'NGN 700,000/Y',
  },
  { id: 2, picture: img2, head: "Urban Oasis", location: "Victoria Island, Lagos", amount: "NGN 700k/Y" },
  { id: 3, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 3,
    picture: img6,
    head: 'Luxury Villa with Pool',
    location: 'Banana Island, Ikoyi, Lagos',
    amount: 'NGN 2,500,000/Y',
  },
  { id: 4, picture: img1, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 2,
    picture: img5,
    head: 'Cozy Suburban Home',
    location: 'Lekki, Lagos',
    amount: 'NGN 850,000/Y',
  },
  { id: 5, picture: img2, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 4,
    picture: img7,
    head: 'Urban Loft Interior',
    location: 'Ikeja, Lagos',
    amount: 'NGN 950,000/Y',
  },
  {
    id: 5,
    picture: img8,
    head: 'Traditional Family House',
    location: 'Surulere, Lagos',
    amount: 'NGN 700,000/Y',
  },
  { id: 6, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 1,
    picture: img4,
    head: 'Modern Apartment Building',
    location: 'Victoria Island, Lagos',
    amount: 'NGN 1,200,000/Y',
  },
  { id: 7, picture: img2, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 2,
    picture: img5,
    head: 'Cozy Suburban Home',
    location: 'Lekki, Lagos',
    amount: 'NGN 850,000/Y',
  },
  {
    id: 4,
    picture: img7,
    head: 'Urban Loft Interior',
    location: 'Ikeja, Lagos',
    amount: 'NGN 950,000/Y',
  },
  {
    id: 3,
    picture: img6,
    head: 'Luxury Villa with Pool',
    location: 'Banana Island, Ikoyi, Lagos',
    amount: 'NGN 2,500,000/Y',
  },
  { id: 9, picture: img1, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 1,
    picture: img4,
    head: 'Modern Apartment Building',
    location: 'Victoria Island, Lagos',
    amount: 'NGN 1,200,000/Y',
  },
  { id: 10, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 2,
    picture: img5,
    head: 'Cozy Suburban Home',
    location: 'Lekki, Lagos',
    amount: 'NGN 850,000/Y',
  },
  {
    id: 5,
    picture: img8,
    head: 'Traditional Family House',
    location: 'Surulere, Lagos',
    amount: 'NGN 700,000/Y',
  },
  {
    id: 4,
    picture: img7,
    head: 'Urban Loft Interior',
    location: 'Ikeja, Lagos',
    amount: 'NGN 950,000/Y',
  },
  { id: 11, picture: img2, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },

  {
    id: 1,
    picture: img4,
    head: 'Modern Apartment Building',
    location: 'Victoria Island, Lagos',
    amount: 'NGN 1,200,000/Y',
  },
  { id: 14, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 4,
    picture: img7,
    head: 'Urban Loft Interior',
    location: 'Ikeja, Lagos',
    amount: 'NGN 950,000/Y',
  },
  { id: 15, picture: img2, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 2,
    picture: img5,
    head: 'Cozy Suburban Home',
    location: 'Lekki, Lagos',
    amount: 'NGN 850,000/Y',
  },
  { id: 16, picture: img1, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 1,
    picture: img4,
    head: 'Modern Apartment Building',
    location: 'Victoria Island, Lagos',
    amount: 'NGN 1,200,000/Y',
  },
  {
    id: 2,
    picture: img5,
    head: 'Cozy Suburban Home',
    location: 'Lekki, Lagos',
    amount: 'NGN 850,000/Y',
  },
  { id: 19, picture: img1, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 3,
    picture: img6,
    head: 'Luxury Villa with Pool',
    location: 'Banana Island, Ikoyi, Lagos',
    amount: 'NGN 2,500,000/Y',
  },
  { id: 21, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 2,
    picture: img5,
    head: 'Cozy Suburban Home',
    location: 'Lekki, Lagos',
    amount: 'NGN 850,000/Y',
  },
  { id: 23, picture: img1, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 4,
    picture: img7,
    head: 'Urban Loft Interior',
    location: 'Ikeja, Lagos',
    amount: 'NGN 950,000/Y',
  },
  { id: 25, picture: img2, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 2,
    picture: img5,
    head: 'Cozy Suburban Home',
    location: 'Lekki, Lagos',
    amount: 'NGN 850,000/Y',
  },
  {
    id: 1,
    picture: img4,
    head: 'Modern Apartment Building',
    location: 'Victoria Island, Lagos',
    amount: 'NGN 1,200,000/Y',
  },
  { id: 27, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 3,
    picture: img6,
    head: 'Luxury Villa with Pool',
    location: 'Banana Island, Ikoyi, Lagos',
    amount: 'NGN 2,500,000/Y',
  },
  { id: 30, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 4,
    picture: img7,
    head: 'Urban Loft Interior',
    location: 'Ikeja, Lagos',
    amount: 'NGN 950,000/Y',
  },
  { id: 31, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 2,
    picture: img5,
    head: 'Cozy Suburban Home',
    location: 'Lekki, Lagos',
    amount: 'NGN 850,000/Y',
  },
  { id: 32, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 3,
    picture: img6,
    head: 'Luxury Villa with Pool',
    location: 'Banana Island, Ikoyi, Lagos',
    amount: 'NGN 2,500,000/Y',
  },
  { id: 34, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 4,
    picture: img7,
    head: 'Urban Loft Interior',
    location: 'Ikeja, Lagos',
    amount: 'NGN 950,000/Y',
  },
  { id: 37, picture: img3, head: "Coastal Comfort", location: "Lekki, Lagos", amount: "NGN 500k/Y" },
  {
    id: 3,
    picture: img6,
    head: 'Luxury Villa with Pool',
    location: 'Banana Island, Ikoyi, Lagos',
    amount: 'NGN 2,500,000/Y',
  },
];

const PaginatedPostList = ({ posts, postsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(0);
  const offset = currentPage * postsPerPage;
  const currentPosts = posts.slice(offset, offset + postsPerPage);

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  return (
    <div className="flex flex-col items-center justify-evenly mb-[20px]">
      <div className="p-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {currentPosts.map(post => (
          <div key={post.id} className="p-4 flex flex-col items-center rounded shadow hover:shadow-lg transition">
            <img
              src={post.picture}
              alt={post.head}
              className="w-full sm:w-full h-[180px] sm:h-[200px] md:h-[220px] lg:h-[250px] object-cover rounded-xl"
            />

            <h2 className="text-lg font-bold mt-2">{post.head}</h2>
            <p className="text-sm text-gray-500">{post.location}</p>
            <p className="text-xl font-semibold text-green-600">{post.amount}</p>
          </div>
        ))}
      </div>

      <div className="flex justify-center mt-5 px-2">
        <ReactPaginate
          previousLabel="Previous"
          nextLabel="Next"
          breakLabel="..."
          pageCount={Math.ceil(posts.length / postsPerPage)}
          marginPagesDisplayed={3}
          pageRangeDisplayed={4}
          onPageChange={handlePageChange}
          containerClassName="flex flex-wrap justify-center gap-2 mt-5"
          previousLinkClassName="px-3 py-2 bg-black text-white rounded hover:bg-blue-700 text-sm sm:text-base"
          nextLinkClassName="px-3 py-2 bg-black text-white rounded hover:bg-blue-700 text-sm sm:text-base"
          breakLinkClassName="px-3 py-1 text-sm sm:text-base"
          pageLinkClassName="px-1 py-1 bg-gray-200 rounded hover:bg-gray-300 text-sm sm:text-base"
          activeLinkClassName="bg-[#51B73B] text-white"
          forcePage={currentPage}
        />
      </div>

    </div>
  );
};

function App() {
  return <PaginatedPostList posts={posts} postsPerPage={6} />;
}

export default App;
