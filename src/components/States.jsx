
import img1 from "../assets/Rectangle 81.png";
import img2 from "../assets/Rectangle 87.png";
import img3 from "../assets/Rectangle 83.png";

const App = () => {

  const State = [
    { 
        id: 1,
        picture: img1,
        head: "Abuja (FCT)",
        location: "5,890 houses",
      },
      { 
        id: 2,
        picture: img2,
        head: "Lagos",
        location: "5,890 houses",
      },
      { 
        id: 3,
        picture: img3,
        head: "Adamawa",
        location: "5,890 houses",
      },
      { 
        id: 4,
        picture: img2,
        head: "Port-Harcourt",
        location: "5,890 houses",
      },
      { 
        id: 5,
        picture: img3,
        head: "Kwara",
        location: "5,890 houses",
      },
      { 
        id: 6,
        picture: img1,
        head: "Delta",
        location: "5,890 houses",
      },
      { 
        id: 7,
        picture: img2,
        head: "River",
        location: "5,890 houses",
      },
      { 
        id: 8,
        picture: img3,
        head: "Osun",
        location: "5,890 houses",
      },
      { 
        id: 9,
        picture: img1,
        head: "Imo",
        location: "5,890 houses",
      },
      { 
        id: 10,
        picture: img2,
        head: "Akwa-Ibom",
        location: "5,890 houses",
      },
      { 
        id: 11,
        picture: img3,
        head: "Kano",
        location: "5,890 houses",
      },
      { 
        id: 12,
        picture: img1,
        head: "Oyo",
        location: "5,890 houses",
      },
     
  ];

  return (
    <div className="flex flex-col items-center">
            <div className="flex flex-col mt-10">
                <h1 className="text-2xl font-bold">Available Staets</h1>
                <p>These are the list of all partners states</p>
            </div>
        <div className='grid grid-cols-4 w-[70%] gap-[50px] mt-10 mb-10'>
      {State.map(p => (
        <div key={p.id} className='flex items-center gap-4 bg-[#F8FAFC] p-2 rounded-xl'>
                <img src={p.picture} alt={`Image of ${p.head}`} className="cursor-pointer h-[50px] w-[60px]"/>
                <div className="flex flex-col">
                    <h1 className="font-bold cursor-pointer">{p.head}</h1>
                    <p>{p.location}</p>
                </div>
        </div>
      ))}
    </div>
    </div>
  );
};

export default App;
