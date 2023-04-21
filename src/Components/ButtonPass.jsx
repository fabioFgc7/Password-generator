import React from "react";
import {
  letrasMayusculas,
  letrasMinusculas,
  numeros,
  simbolos,
} from "./arrayPasswords";
export const ButtonPass = ({
  array,
  setPassword,
  valuesRange,
  uppercase1,
  lowercase2,
  numbers3,
  symbols4,
  setUppercase,
}) => {
  const passwordRandom = (e) => {
    e.preventDefault();
    // Si no se ha seleccionado ningún tipo de caracteres, se incluyen letras mayúsculas por defecto

    if (!uppercase1 && !lowercase2 && !numbers3 && !symbols4) {
      setUppercase(() => true);
      array.push(...letrasMayusculas);
    } else {
      if (uppercase1) {
        console.log(array.push(...letrasMayusculas));
      } else {
        array = array.filter((el) => !letrasMayusculas.includes(el));
      }
      if (lowercase2) {
        array.push(...letrasMinusculas);
      } else {
        array = array.filter((el) => !letrasMinusculas.includes(el));
      }
      if (numbers3) {
        array.push(...numeros);
      } else {
        array = array.filter((el) => !numeros.includes(el));
      }
      if (symbols4) {
        array.push(...simbolos);
      } else {
        array = array.filter((el) => !simbolos.includes(el));
      }
    }
    let pass = "";
    // Generar la contraseña aleatoria

    for (let i = 0; i < valuesRange; i++) {
      const ramdonPassword = Math.floor(Math.random() * array.length);
      pass += array[ramdonPassword];
    }
    // Si no se ha establecido un rango para la longitud de la contraseña, mostrar una alerta

    if (valuesRange === 0) {
      alert(
        "Pone el rango y los tipos de caracteres que quieres generar la contrasena"
      );
    } else {
      setPassword(pass);
    }

    console.log(valuesRange);
  };
  return (
    <button
      onClick={passwordRandom}
      className='bg-blue-500 text-lg p-[1px] mt-6 rounded-md font-heebo hover:bg-blue-400 hover:cursor-pointer '>
      Generate Password
    </button>
  );
};
