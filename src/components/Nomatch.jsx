import match from "../assets/Vector (7).png"
import { Link } from 'react-router-dom';

const Nomatch = () => {
  return (
    <div className="flex items-center flex-col text-center justify-center h-[50vh]">
      <img src={match} alt="" />
      <h1 className="text-3xl font-bold">No match found</h1>
      <h1 className="text-2xl w-[21vw]">You don’t have access to this page. Please <Link to="/Login"><span className="cursor-pointer text-[#0EA5E9]">sign in</span> </Link>or <Link to="/Register"><span className="text-[#0EA5E9] cursor-pointer">create account</span></Link> to view your matches.</h1>
    </div>
  )
}

export default Nomatch
