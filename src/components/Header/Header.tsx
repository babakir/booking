import { useState } from "react";
import { MdLocationOn, MdSearch, MdOutlineCalendarMonth } from "react-icons/md";
import GuestOptionList from "./GuestOptionList";
import { IOptions } from "./Interfaces";
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range';

interface IDateRange {
    startDate: Date,
    endDate: Date,
    key: string,
}

const Header = () => {

    const [distination, setDistination] = useState("");
    const [openOption, setOpenOption] = useState(false);
    const [options, setOptions] = useState<IOptions>({
        adult: 1,
        children: 0,
        room: 1
    });

    const setOptionHandler = (name: string, operation: string = "inc") => {
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "inc" ? options[name as keyof typeof options] + 1 : options[name as keyof typeof options] - 1
            }
        });
    }

    const [dateRange, setDateRange] = useState<IDateRange>(
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'traveling-date-range',
        }
    );

    const [openDateRange, setOpenDateRange] = useState(false);

    return (
        <div className="flex rounded-3xl gap-4 border-gray-200 border mt-4 mx-8 p-1">
            <div className="flex flex-1 justify-start items-center border-r-2 p-2 gap-2">
                <MdLocationOn color="red" size={30} />
                <input type="text" placeholder="Where to go?" value={distination} onChange={(e) => setDistination(e.target.value)} />
            </div>
            <div className="flex flex-1 justify-start items-center border-r-2 p-2 gap-2">
                <MdOutlineCalendarMonth color="blue" size={30} />
                <span onClick={() => setOpenDateRange(!openDateRange)} className="flex justify-center items-center">{dateRange.startDate.toJSON().slice(0, 10)} to {dateRange.endDate.toJSON().slice(0, 10)}</span>
                {
                    openDateRange && <DateRange ranges={[dateRange]} onChange={(item) => setDateRange(item['traveling-date-range'] as IDateRange)} minDate={new Date()} moveRangeOnFirstSelection={true} className="absolute top-20" />
                }
            </div>
            <div className="flex flex-1 justify-start items-center border-r-2 p-2">
                <span id="optionDropDown" onClick={() => setOpenOption(!openOption)}>{options.adult} adalt &bull; {options.children} children &bull; {options.room} room</span>
                {
                    openOption &&
                    <div className="absolute w-60 top-20">
                        <GuestOptionList options={options} handleOptions={setOptionHandler} setOpenOption={setOpenOption} />
                    </div>
                }
            </div>
            <div className="flex flex-none justify-start items-center p-2">
                <button className="bg-blue-600 p-2 rounded-2xl"><MdSearch color="#FFFFFF" size={30} /></button>
            </div>
        </div>
    );
}

export default Header;  