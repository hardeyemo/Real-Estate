import img from "../assets/tabler-icon-arrow-narrow-right.png";

const App = () => {
  const State = [
    { id: 1, head: "Most popular", location: "12,890 results", picture: img },
    { id: 2, head: "Most trending", location: "12,890 results", picture: img },
    { id: 3, head: "Most visited", location: "12,890 results", picture: img },
    { id: 4, head: "Most recent", location: "12,890 results", picture: img },
    { id: 5, head: "Most expensive", location: "12,890 results", picture: img },
    { id: 6, head: "Most affordable", location: "12,890 results", picture: img },
  ];

  return (
    <div className="flex flex-col items-center px-4 py-4">
      {/* Header */}
      <div className="w-full max-w-7xl mb-10">
        <h1 className="text-2xl md:text-3xl font-bold">Filtering & Sorting</h1>
        <p className="text-gray-600 mt-1">These are the list of all partner states</p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {State.map((p) => (
          <div
            key={p.id}
            className="flex items-center justify-between gap-4 py-6 px-6 bg-white border border-[#F8FAFC] shadow-md rounded-xl hover:shadow-lg transition duration-300"
          >
            <div className="flex flex-col cursor-pointer">
              <h1 className="font-bold text-lg">{p.head}</h1>
              <p className="text-gray-500 text-sm">{p.location}</p>
            </div>
            <img src={p.picture} alt={`Arrow for ${p.head}`} className="w-5 h-5 cursor-pointer" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
