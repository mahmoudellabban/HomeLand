import React, { useContext } from "react";
import { HouseContext } from "./HouseContext";
import CountryDropDown from "./CountryDropdown";
import PropertyDropDown from "./PropertyDropdown";
import PriceRangeDropDown from "./PriceRangeDropdown";
import { RiSearch2Line } from "react-icons/ri";
const Search = () => {
  const { handleClick } = useContext(HouseContext);
  return (
    <div className="px-[30px] py-3 max-w-[1170px] mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 shadow-1 mt-5 rounded-lg">
      <CountryDropDown />
      <PropertyDropDown />
      <PriceRangeDropDown />
      <button
        onClick={() => handleClick()}
        className="bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[162px] h-16 rounded-lg flex justify-center items-center text-white text-lg"
      >
        <RiSearch2Line />
      </button>
    </div>
  );
};

export default Search;
