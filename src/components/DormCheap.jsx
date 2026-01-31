import test1 from "../assets/test1.jpg"
import test2 from "../assets/test2.jpg"
import test3 from "../assets/test3.jpg"
import { Link } from "react-router-dom";
import map from "../assets/map.png"
const dormData = [
    {
        id:1,
        image:test1,
        name:"คุณากร",
        price:3000,
        status:false,

    },
        {
        id:2,
        image:test2,
        name:"พีที เฮ้าส์",
        price:3100,
        status:false,

    },
        {
        id:3,
        image:test3,
        name:"กัลยา",
        price:2900,
        status:false,

    },

]
const DormCheap = () => {
  return (
    <>
    <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-semibold">หอพักราคาถูกรอบม.</h1>

        <div className="flex gap-6 items-center ">

                {dormData.map((dorm)=>(
                    <>
                     <Link to="/detail" className="w-120 h-90 flex flex-col space-y-2 p-4 bg-[#40916C] rounded-xl" key={dorm.id}>
                    <img src={dorm.image} alt={dorm.name} className="w-120 h-50 object-cover"/>
                
                <p className="text-md font-semibold text-white">{dorm.name}</p>

                <a className="flex gap-4 justify-center items-center bg-white w-fit rounded-xl px-2 py-1">
                    <p className="text-md font-semibold">ที่ตั้ง</p>
                    <img src={map} alt="google map" className="w-10 h-10 object-cover"/>
                </a>

                 <div className="flex justify-between items-center">

                    <p className="text-md font-semibold text-white">
                        ฿{dorm.price} / เดือน
                    </p>

                    <p className={`text-md font-semibold ${dorm.status? "text-green-500 " : "text-red-500"}`}>{dorm.status? "AVAILABLE" : "FULL"}</p>

                    </div>
                     </Link>

               
                    </>
              
                ))}
   

        </div>

            <div className=" justify-center items-center flex gap-4">

                            <div className="bg-[#5FCC9C] px-2 py-2 w-5 h-5 rounded-full justify-center">   
            </div>
                        <div className="bg-[#D9D9D9] px-2 py-2 w-5 h-5 rounded-full justify-center">   
            </div>
                        <div className="bg-[#D9D9D9] px-2 py-2 w-5 h-5 rounded-full justify-center">   
            </div>
            </div>


    
    </div>
    </>
  )
}

export default DormCheap