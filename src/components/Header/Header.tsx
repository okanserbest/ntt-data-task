import nttdata from "@/resources/logo/nttdata.png";
import { Menu, Search } from "lucide-react";
import Image from "next/image";
const selectOptionStyle = "bg-blue-800 text-white textarea-md";
const Header = () => {
  return (
    <header>
      <div className="  max-w-6xl mx-auto grid grid-cols-2  md:grid-cols-custom pt-7 pb-5 px-3">
        <div className="self-center  md:place-self-center col-span-1 mr-3 min-w-[183px]">
          <Image src={nttdata} alt="logo" width={183} height={24} />
        </div>
        <div className=" hidden md:join md:w-full md:col-span-4">
          <div className="w-full">
            <input
              className="input input-bordered join-item w-[101%] mr-2 ml-8"
              placeholder="Search..."
            />
          </div>

          <select
            className="select select-bordered  max-w-xs join-item"
            defaultValue={"Categories"}
          >
            <option className={selectOptionStyle}>Categories</option>
            <option className={selectOptionStyle}>Data</option>
            <option className={selectOptionStyle}>Category Name</option>
            <option className={selectOptionStyle}>Category Name</option>
            <option className={selectOptionStyle}>Category Name</option>
            <option className={selectOptionStyle}>Category Name</option>
          </select>
        </div>
        <div className="hidden md:block ms-10 col-span-1 join-item">
          <button className="btn btn-primary bg-blue-800 w-32">
            <Search />
          </button>
        </div>

        <div className="col-span-1 md:hidden  justify-self-end">
          <button className="btn ">
            <Menu />
          </button>
        </div>
        <div className="col-start-1  col-end-3 join w-full md:hidden pt-6 justify-self-end">
          <div className="w-full flex ">
            <input
              className="input input-bordered join-item w-[121%]"
              placeholder="Search..."
            />
            <div className=" justify-self-end">
              <button className="btn btn-primary bg-blue-800 w-32">
                <Search />
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
