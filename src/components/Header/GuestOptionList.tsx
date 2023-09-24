import GuestOptionItem from "./GuestOptionItem";
import { IOptions } from "./Interfaces";

interface IProp {
    options: IOptions;
    handleOptions: (name: string, operation: string) => void
}

const GuestOptionList = ({ options, handleOptions }: IProp) => {
    return (
        <div className="flex-col space-y-2 bg-white border-gray-200 border rounded-lg p-3">
            <GuestOptionItem key={1} type="adult" minLimit={1} options={options} handler={handleOptions} />
            <GuestOptionItem key={2} type="children" minLimit={0} options={options} handler={handleOptions} />
            <GuestOptionItem key={3} type="room" minLimit={1} options={options} handler={handleOptions} />
        </div>
    );
}

export default GuestOptionList;