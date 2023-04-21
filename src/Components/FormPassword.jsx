import React, { useEffect, useReducer, useRef, useState } from "react";
import { FaCopy } from "react-icons/fa";
import { handleCopy, handleRange } from "./PasswordFuntion";
import { TextCopy } from "./TextCopy";
import { ButtonPass } from "./ButtonPass";

export const FormPassword = () => {
  const [isActiveTranslate, setIsActiveTranslate] = useState(false);

  const [uppercase1, setUppercase] = useState(false);
  const [lowercase2, setLowercase] = useState(false);
  const [numbers3, setNumbers] = useState(false);
  const [symbols4, setSymbols] = useState(false);
  const [bg, setBg] = useState("");
  const [long, setLong] = useState(0);
  const [valuesRange, setValuesRange] = useState(1);
  const [password, setPassword] = useState("A");
  const [array, setArray] = useState([]);

  const textRef = useRef(null);

  return (
    <div className='font-heebot flex flex-col justify-center items-center md:justify-items-center h-full md:h-screen bg-[#0d1a2d] w-full p-10'>
      <h1 className='md:text-2xl text-xl mb-5 text-slate-200 font-heebo'>
        PASSWORD GENERATOR
      </h1>
      <div className='md:w-1/2 w-full '>
        <div className='px-6 bg-slate-950 w-auto text-center font-bold p-2 text-slate-100 flex justify-between items-center'>
          <h1
            ref={textRef}
            className='text-left font-heebo text-clip overflow-hidden text-md md:text-lg '>
            {password}
          </h1>
          <FaCopy
            className=' right-[4px]  hover:cursor-pointer top-1/2 bottom-1/2 text-green-500 z-30 text-2xl'
            onClick={() => handleCopy(array, setIsActiveTranslate, textRef)}
          />
        </div>
        <div
          style={{ width: `${long}%` }}
          className={`h-3  ${bg} rounded-full mt-[1px]`}></div>
      </div>

      <form className='md:w-1/2 w-full flex flex-col bg-slate-950 text-slate-200 p-10 mt-5'>
        <div className='flex flex-col space-y-2 '>
          <div className='flex justify-between justify-items-center'>
            <label
              className='text-xl font-heebo'
              htmlFor='lenght'>
              Character Length
            </label>
            <span className='text-2xl  text-green-500'>{valuesRange}</span>
          </div>
          <input
            type='range'
            name='lenght'
            min='0'
            max='40'
            onChange={(e) =>
              handleRange(
                e,
                setValuesRange,
                setPassword,
                setLong,
                setBg,
                uppercase1,
                lowercase2,
                numbers3,
                symbols4,
                setUppercase
              )
            }
            value={valuesRange}
          />
        </div>
        <div className='flex flex-row justify-start space-x-10'>
          <input
            className='w-4'
            type='checkbox'
            name='uppercase'
            checked={uppercase1}
            onChange={(e) => setUppercase(e.target.checked)}
          />
          <label
            className=' text-lg'
            htmlFor='uppercase'>
            Include Uppercase Letters
          </label>
        </div>
        <div className='flex flex-row justify-start space-x-10'>
          <input
            className='w-4'
            type='checkbox'
            name='lowercase'
            checked={lowercase2}
            onChange={(e) => setLowercase(e.target.checked)}
          />
          <label
            className=' text-lg'
            htmlFor='lowercase'>
            Include Lowercase Letters
          </label>
        </div>
        <div className='flex flex-row justify-start space-x-10'>
          <input
            className='w-4'
            type='checkbox'
            name='numbers'
            checked={numbers3}
            onChange={(e) => setNumbers(e.target.checked)}
          />
          <label htmlFor='numbers'>Include Numbers</label>
        </div>
        <div className='flex flex-row justify-start space-x-10'>
          <input
            className='w-4'
            type='checkbox'
            name='symbols'
            checked={symbols4}
            onChange={(e) => setSymbols(e.target.checked)()}
          />
          <label
            className='font-serif '
            htmlFor='symbols'>
            Include Symbols
          </label>
        </div>{" "}
        <ButtonPass
          array={array}
          setPassword={setPassword}
          valuesRange={valuesRange}
          uppercase1={uppercase1}
          lowercase2={lowercase2}
          numbers3={numbers3}
          symbols4={symbols4}
          setUppercase={setUppercase}
          setValuesRange={setValuesRange}
        />
      </form>

      <TextCopy isActiveTranslate={isActiveTranslate} />
    </div>
  );
};
