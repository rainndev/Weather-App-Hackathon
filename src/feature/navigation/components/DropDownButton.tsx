import { motion } from "motion/react";
import type { Dispatch, SetStateAction } from "react";

interface DropDownButtonProps {
  isDropdownOpen: boolean;
  setDropdownOpen: Dispatch<SetStateAction<boolean>>;
}
const DropDownButton = ({
  setDropdownOpen,
  isDropdownOpen,
}: DropDownButtonProps) => {
  return (
    <button
      onClick={() => setDropdownOpen(!isDropdownOpen)}
      className="bg-WEATHER-neutral-800 hover:bg-WEATHER-neutral-700 flex cursor-pointer items-center justify-between gap-2 rounded-md p-2 px-4 transition-colors ease-in-out"
    >
      <img
        src="/public/images/icon-units.svg"
        alt="icon-units"
        className="size-3"
      />
      <p className="text-sm">Units</p>
      <motion.img
        initial={{ rotate: 0 }}
        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
        src="/public/images/icon-dropdown.svg"
        alt="icon-dropdown"
        className="size-2.5"
      />
    </button>
  );
};

export default DropDownButton;
