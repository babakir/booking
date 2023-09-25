import { useEffect } from "react";

export default function useOutsideClick(ref, exceptionId, cb) {
    useEffect(() => {
        const handleClickOutside = (event: PointerEvent) => {
            if (ref.current && !ref.current.contains(event.target) && event.target.id != exceptionId) {
                cb();
            }
        };
        document.addEventListener('mousedown', handleClickOutside, true);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside, true);
        };
    }, [ref, cb]);
}