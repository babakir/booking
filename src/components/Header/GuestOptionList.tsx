import { useRef } from "react";
import GuestOptionItem from "./GuestOptionItem";
import { IOptions } from "./Interfaces";
import useOutsideClick from "../../hook/useOutsideClick";

interface IProp {
    options: IOptions;
    handleOptions: (name: string, operation: string) => void;
    setOpenOption: any;
}

const GuestOptionList = ({ options, handleOptions, setOpenOption }: IProp) => {

    const ref = useRef<HTMLInputElement>(null);

    useOutsideClick(ref, "optionDropDown", () => setOpenOption(false))

    return (
        <div ref={ref} className="flex-col space-y-2 bg-white border-gray-200 border rounded-lg p-3">
            <GuestOptionItem key={1} type="adult" minLimit={1} options={options} handler={handleOptions} />
            <GuestOptionItem key={2} type="children" minLimit={0} options={options} handler={handleOptions} />
            <GuestOptionItem key={3} type="room" minLimit={1} options={options} handler={handleOptions} />
        </div>
    );
}

export default GuestOptionList;