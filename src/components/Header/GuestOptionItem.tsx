import { MdOutlineAdd, MdOutlineHorizontalRule } from "react-icons/md";
import { IOptions } from "./Interfaces";

interface IProp {
    type: string,
    minLimit: number,
    options: IOptions,
    handler: (name: string, operation: string) => void
}

enum operations {
    inc = "inc",
    dec = "dec"
}

const GuestOptionItem = ({ type, minLimit, options, handler }: IProp) => {

    return (
        <div className="flex justify-between space-x-2 items-center text-sm">
            <span className="basis-1/4 capitalize">{type}</span>
            <div className="flex justify-between space-x-2 basis-2/4">
                <button disabled={options[type as keyof IOptions] <= minLimit} className="p-1 bg-gray-200 rounded-lg" onClick={() => handler(type, operations.dec)}><MdOutlineHorizontalRule /></button>
                <span>{options[type as keyof IOptions]}</span>
                <button className="p-1 bg-gray-200 rounded-lg" onClick={() => handler(type, operations.inc)}><MdOutlineAdd /></button>
            </div>
        </div>
    );
}



export default GuestOptionItem;