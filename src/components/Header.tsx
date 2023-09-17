import { useState } from "react";
import { MdLocationOn, MdSearch, MdOutlineCalendarMonth } from "react-icons/md";

const Header = () => {

    const [distination, setDistination] = useState("");

    return (
        <div className="flex rounded-3xl gap-4 border-gray-200 border mt-4 mx-4 p-2">
            <div className="flex flex-1 justify-start items-center border-r-2 p-2 gap-2">
                <MdLocationOn color="red" size={30} />
                <input type="text" placeholder="Where to go?" value={distination} onChange={(e) => setDistination(e.target.value)} />
            </div>
            <div className="flex flex-1 justify-start items-center border-r-2 p-2 gap-2">
                <MdOutlineCalendarMonth color="blue" size={30} />
                <span className="flex justify-center items-center">2023/06/34</span>
            </div>
            <div className="flex flex-1 justify-start items-center border-r-2 p-2">
                <span>1 adalt &bull; 2 children &bull; 1 room</span>
            </div>
            <div className="flex flex-none justify-start items-center p-2">
                <button className="bg-blue-600 p-2 rounded-2xl"><MdSearch color="#FFFFFF" size={30} /></button>
            </div>
        </div>
    );
}

export default Header;  