import React from "react";
import {
  letrasMayusculas,
  letrasMinusculas,
  numeros,
  simbolos,
} from "./arrayPasswords";

// Esta función recibe los valores de los checkboxes y setea un array según las opciones seleccionadas
export const generarArrayPassword = (
  incluyeMayusculas,
  incluyeMinusculas,
  incluyeNumeros,
  incluyeSimbolos
) => {
  let arrayPassword = [];
  if (incluyeMayusculas) arrayPassword.push(...letrasMayusculas);
  if (incluyeMinusculas) arrayPassword.push(...letrasMinusculas);
  if (incluyeNumeros) arrayPassword.push(...numeros);
  if (incluyeSimbolos) arrayPassword.push(...simbolos);

  // Si no se ha seleccionado ninguna opción, por defecto se incluyen mayúsculas
  if (arrayPassword.length === 0) {
    arrayPassword = [...letrasMayusculas];
    incluyeMayusculas = true;
  }

  return { arrayPassword, incluyeMayusculas };
};

// Esta función genera una contraseña aleatoria a partir del array de opciones y la longitud elegida
export const generarPassword = (arrayPassword, longitud) => {
  let password = "";
  for (let i = 0; i < longitud; i++) {
    const randomIndex = Math.floor(Math.random() * arrayPassword.length);
    password += arrayPassword[randomIndex];
  }
  return password;
};

// Esta función maneja los cambios en el rango de longitud de la contraseña
export const handleRange = (
  event,
  setValuesRange,
  setPassword,
  setLong,
  setBg,
  incluyeMayusculas,
  incluyeMinusculas,
  incluyeNumeros,
  incluyeSimbolos,
  setIncluyeMayusculas
) => {
  const longitud = parseInt(event.target.value);
  setValuesRange(longitud);

  const { arrayPassword, incluyeMayusculas: nuevaIncluyeMayusculas } =
    generarArrayPassword(
      incluyeMayusculas,
      incluyeMinusculas,
      incluyeNumeros,
      incluyeSimbolos
    );
  setIncluyeMayusculas(nuevaIncluyeMayusculas);

  const password = generarPassword(arrayPassword, longitud);
  setPassword(password);

  // Cambia el color de fondo según la longitud de la contraseña
  if (longitud < 5) {
    setLong(longitud * 5);
    setBg("bg-red-600");
  } else if (longitud < 6) {
    setLong(longitud * 5);
    setBg("bg-orange-400");
  } else if (longitud < 9) {
    setLong(longitud * 5);
    setBg("bg-yellow-400");
  } else if (longitud < 12) {
    setLong(longitud * 5);
    setBg("bg-green-400");
  } else if (longitud <= 20) {
    setLong(longitud * 5);
    setBg("bg-green-600");
  }
};

// Esta función maneja los cambios en los checkboxes
export const handleOnChange = (event, setValuesInput) => {
  setValuesInput((prevValues) => ({
    ...prevValues,
    [event.target.name]: [event.target.checked],
  }));
};

// Esta función copia la contraseña al portapapeles y muestra una alerta

export const handleCopy = async (array, setIsActiveTranslate, textRef) => {
  try {
    if (array.length === 0) {
      alert("No hay texto para copiar");
    } else {
      await navigator.clipboard.writeText(textRef.current.textContent);
      setIsActiveTranslate(true);

      setTimeout(() => {
        setIsActiveTranslate(false);
      }, 2000);
    }
    console.log(array);
  } catch (err) {
    alert(err);
  }
};
