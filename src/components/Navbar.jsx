import { FiUser } from "react-icons/fi";
import logoDorm from "../assets/logoDorm.png"
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
    <div className="bg-[#1B4332] h-28 w-full p-4">
        <div className="flex justify-between items-center">

            <div className="flex items-center gap-2">
                <Link to="/">
                <img src={logoDorm} alt="logo UniDorm" className='w-20 h-20 '/>
                </Link>
                
                <h1 className="text-3xl font-semibold text-white">UniDorm</h1>
            </div>

            <div className="flex justify-around items-center bg-white p-2 rounded-xl w-48">
                <FiUser size={40}/>
                <Link className='bg-[#1B4332] rounded-xl text-white font-semibold px-6 py-2'>Login</Link>
            </div>

        </div>
    </div>
    </>
  )
}

export default Navbar