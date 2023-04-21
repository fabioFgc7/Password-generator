import React from "react";
import { FaCheck } from "react-icons/fa";

export const TextCopy = ({ isActiveTranslate }) => {
  return (
    <div
      className={`absolute flex items-center space-x-5  top-0 ${
        !isActiveTranslate ? "-translate-y-[100vh]" : "translate-y-5"
      }  text-white `}>
      <FaCheck className='text-green-500 ' />
      <p> Copyted</p>
    </div>
  );
};
