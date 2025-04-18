import match from "../assets/Vector (7).png";
import { Link } from 'react-router-dom';

const Nomatch = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center px-4 py-4 min-h-[30vh]">
      <img src={match} alt="No Match Found" className="w-32 md:w-40 mb-6" />
      
      <h1 className="text-2xl md:text-3xl font-bold mb-3">No match found</h1>
      
      <p className="text-lg md:text-xl max-w-md text-gray-600">
        You don’t have access to this page. Please{" "}
        <Link to="/Login" className="text-[#0EA5E9] font-medium hover:underline">sign in</Link>{" "}
        or{" "}
        <Link to="/Register" className="text-[#0EA5E9] font-medium hover:underline">create an account</Link>{" "}
        to view your matches.
      </p>
    </div>
  );
};

export default Nomatch;
