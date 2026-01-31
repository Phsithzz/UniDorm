import { IoSearch } from "react-icons/io5";
const SearchDorm = () => {
  return (
    <>
      <div className="bg-[#40916C] w-full  p-6 rounded-xl relative">

        <div className="flex flex-col space-y-4">
          <input
            type="text"
            className="outline-none w-full bg-white rounded-md px-4 py-4 placeholder:text-[#808080]"
            placeholder="ค้นหาหอพัก..."
          />

          <div className="flex justify-between rounded-md bg-white px-4 py-4">
            <h1 className="text-[#808080]">เลือกช่วงราคา</h1>

            <div className="flex justify-between items-center w-[90%]">
              <div className="flex gap-2 items-center">
                <input
                  type="checkbox"
                  className="appearance-none
          h-4 w-4
          border-2 border-gray-300
          rounded-full
          checked:bg-[#5FCC9C] checked:border-[#5FCC9C]
          focus:outline-none
          transition duration-200"
                />
                <label htmlFor="min" 
                className="text-lg font-semibold">
                  1000 - 3000
                </label>
              </div>

              <div className="flex gap-2 items-center">
                <input type="checkbox" 
                className="appearance-none
          h-4 w-4
          border-2 border-gray-300
          rounded-full
          checked:bg-[#5FCC9C] checked:border-[#5FCC9C]
          focus:outline-none
          transition duration-200 " />
                <label htmlFor="medium" className="text-lg font-semibold">
                  4000 - 6000
                </label>
              </div>

              <div className="flex gap-2 items-center">
                <input type="checkbox" className="appearance-none
          h-4 w-4
          border-2 border-gray-300
          rounded-full
          checked:bg-[#5FCC9C] checked:border-[#5FCC9C]
          focus:outline-none
          transition duration-200 " />
                <label htmlFor="max" className="text-lg font-semibold">
                  7000 - 8500
                </label>
              </div>
            </div>
          </div>
        </div>

        <button type="button" className="mt-2 absolute bottom-[-5] left-2/6  rounded-xl bg-[#1B4332] w-110 px-2 py-2 font-semibold text-xl text-white flex justify-center tems-center">
            <IoSearch size={30}/>
            Search
        </button>
      </div>
    </>
  );
};

export default SearchDorm;
