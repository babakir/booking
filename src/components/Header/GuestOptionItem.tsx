import { MdOutlineAdd, MdOutlineHorizontalRule } from "react-icons/md";

enum operations {
    inc = "inc",
    dec = "dec"
}

const GuestOptionItem = ({ type, minLimit, options, handler }) => {

    return (
        <div className="flex justify-between space-x-2 items-center text-sm">
            <span className="basis-1/4 capitalize">{type}</span>
            <div className="flex justify-between space-x-2">
                <button disabled={options[type] <= minLimit} className="p-1 bg-gray-200 rounded-lg" onClick={() => handler(type, operations.dec)}><MdOutlineHorizontalRule /></button>
                <span>{options[type]}</span>
                <button className="p-1 bg-gray-200 rounded-lg" onClick={() => handler(type, operations.inc)}><MdOutlineAdd /></button>
            </div>
        </div>
    );
}



export default GuestOptionItem;