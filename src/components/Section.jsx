import check from "../assets/check-list.png"
import group from "../assets/group 8.png"
import dash from "../assets/dashboard-circle.png"



const Section = () => {
      
  return (
    <div>
      <div className="flex items-center justify-around gap-[70px]  mt-[80px]">
      <div className="flex flex-col gap-4">
            <h1 className="font-extrabold text-4xl">Foryou</h1>
            <p className="font-semibold">Showing 1,450 results</p>
      </div>
      <div className="flex items-center gap-4 font-semibold">
      <div className="flex items-center gap-4 border-[#d7e0e9] px-5 py-4 border-2 rounded-3xl ">
            <img className="cursor-pointer" src={check} alt="" />
            <p className="cursor-pointer">Most recent</p>
            <img className="cursor-pointer" src={group} alt="" />
      </div>
      <div className="flex items-center gap-4 border-[#d7e0e9] px-5 py-4 border-2 rounded-3xl ">
            <img className="cursor-pointer" src={check} alt="" />
            <p className="cursor-pointer">By pricing</p>
            <img className="cursor-pointer" src={group} alt="" />
      </div>
      <div className="flex border-[#d7e0e9] px-5 py-4 border-2 rounded-3xl items-center gap-4">
            <img className="cursor-pointer"src={dash} alt="" />
            <img className="cursor-pointer" src={check} alt="" />
      </div>
      </div>
      </div>       
      </div>
  )
}

export default Section
