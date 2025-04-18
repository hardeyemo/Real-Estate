
import img from "../assets/tabler-icon-arrow-narrow-right.png";

const App = () => {

  const State = [
    { 
        id: 1,
        head: "Most popular",
        location: "12,890 results",
        picture: img,
      },
      { 
        id: 2,
        head: "Most trending",
        location: "12,890 results",
        picture: img,
      },
      { 
        id: 3,
        head: "Most visited",
        location: "12,890 results",
        picture: img,
      },
      { 
        id: 4,
        head: "Most recent",
        location: "12,890 results",
        picture: img,
      },
      { 
        id: 5,
        head: "Most expensive",
        location: "12,890 results",
        picture: img,
      },
      { 
        id: 6,
        head: "Most affordable",
        location: "12,890 results",
        picture: img,
      }
     
  ];

  return (
    <div className="flex flex-col items-center">
            <div className="flex flex-col mr-[55%] mt-20">
                <h1 className="text-2xl font-bold">Filtering & Sorting</h1>
                <p>These are the list of all partners states</p>
            </div>
        <div className='grid grid-cols-3 w-[70%] gap-[50px] mt-10 mb-20'>
      {State.map(p => (
        <div key={p.id} className='flex items-center justify-between py-7 px-10 gap-4 bg-[#ffff] border-2 border-[#F8FAFC] shadow-2xl p-2 rounded-xl'>
                <div className="flex flex-col cursor-pointer">
                    <h1 className="font-bold">{p.head}</h1>
                    <p>{p.location}</p>
                </div>
                <img className="cursor-pointer" src={p.picture} alt={`Image of ${p.head}`} />
        </div>
      ))}
    </div>
    </div>
  );
};

export default App;
