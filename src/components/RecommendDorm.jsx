import dorm1 from "../assets/dorm1.jpg";
import test4 from "../assets/test4.jpg";
import map from "../assets/map.png";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
const dormData = [
  {
    id: 1,
    image: dorm1,
    name: "เอเอ เรสซิเด้นซ์ ศรีราชา",
    price: 5100,
    type: "ห้องแอร์",
    status: true,
  },
  {
    id: 2,
    image: test4,
    name: "ทรีโอ เรสซิเด้นซ์ ศรีราชา",
    price: 6000,
    type: "ห้องพัดลม",
    status: true,
  },
];
const RecommendDorm = () => {
  return (
    <>
      <div className="flex flex-col space-y-4">
        <h1 className="text-3xl font-semibold">หอพักแนะนำรอบม.</h1>

        <div className="flex flex-col gap-6 items-center ">
          {dormData.map((dorm) => (
            <>
              <Link to="/detail"
                className="w-full flex justify-between  p-4 bg-[#40916C] rounded-xl"
                key={dorm.id}
              >
                <div className="flex gap-6">
                  <img
                    src={dorm.image}
                    alt={dorm.name}
                    className="w-90 h-50 object-cover"
                  />
                  <div className="flex mt-4 flex-col space-y-2">
                    <p className="text-xl font-semibold text-white">
                      {dorm.name}
                    </p>
                    <div className="flex gap-2">
                      <FaStar size={20} color="gold" />
                      <FaStar size={20} color="gold" />
                      <FaStar size={20} color="gold" />
                      <FaStar size={20} color="gold" />
                      <FaStar size={20} color="gold" />
                    </div>
                    <p className="text-md font-semibold text-white">
                      ข้อความรีวิว
                    </p>
                    <a className="flex gap-4 justify-center items-center bg-white w-fit rounded-xl px-2 py-1">
                      <p className="text-md font-semibold">ที่ตั้ง</p>
                      <img
                        src={map}
                        alt="google map"
                        className="w-10 h-10 object-cover"
                      />
                    </a>
                  </div>
                </div>

                <div className="flex flex-col justify-between text-end">
                    <p className="text-md font-semibold text-white">{dorm.type}</p>
                  <p className="text-md font-semibold text-white">
                    ฿{dorm.price} / เดือน
                  </p>

                  <p
                    className={`text-md font-semibold ${dorm.status ? "text-white " : "text-red-500"}`}
                  >
                    {dorm.status ? "ว่าง" : "FULL"}
                  </p>
                </div>
              </Link>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default RecommendDorm;
