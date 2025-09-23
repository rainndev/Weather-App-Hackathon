import { AnimatePresence } from "motion/react";
import { useState } from "react";
import DropDownContent from "./components/DropDownContent";
import DropDownButton from "./components/DropDownButton";

const NavigationBar = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="text-WEATHER-neutral-0 flex w-full justify-between">
      <img src="images/logo.svg" alt="logo" className="w-30 sm:w-40 md:w-50" />

      <div className="relative">
        <DropDownButton
          isDropdownOpen={isDropdownOpen}
          setDropdownOpen={setDropdownOpen}
        />

        {/* Drop Down Content */}
        <AnimatePresence>
          {isDropdownOpen && <DropDownContent />}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default NavigationBar;
