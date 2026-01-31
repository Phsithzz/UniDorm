import { FaPhoneVolume } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { Link } from "react-router-dom";
import logoDorm from "../assets/logoDorm.png"
const Footter = () => {
  return (
    <>
    <div className="bg-[#40916C] w-full p-8">

        <div className="flex justify-between items-center">
            
            <div className="flex flex-col space-y-4">
                <p className='text-2xl text-white font-semibold'>UniDorm</p>
                <p className='text-2xl text-white font-semibold'>Contack Us</p>
                <div className="flex gap-2 items-center">
                    <FaPhoneVolume size={20} color="white"/>
                <p className='text-2xl text-white font-semibold'>0999999</p>
                </div>
                              <div className="flex gap-2 items-center">
                                <MdOutlineMailOutline size={20} color="white"/>
                <p className='text-2xl text-white font-semibold'>phoosith.p@ku.th</p>
                    
                </div>
            </div>

       
            <div className="flex justify-between w-[60%] border-l-3  border-white  ">

                <div className="flex flex-col space-y-2 ml-20 ">
                    <Link className='text-2xl text-white font-semibold'>Home</Link>
                    <Link className='text-2xl text-white font-semibold'>Login</Link>
                </div>

                <img src={logoDorm} alt="LogoUniDorm" className="w-50 h-50" />
            </div>
        </div>

    </div>
    </>
  )
}

export default Footter