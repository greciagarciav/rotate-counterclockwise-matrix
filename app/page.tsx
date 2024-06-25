'use client'

import  React from 'react';
import InputMatrix from "./ui/insert-matrix";
import InsertMatrix  from "./ui/buttons";
import DisplayMatrix from './ui/display-matrix';
import { rotateImageAntihorario } from './lib/utils';

const defaultValue = JSON.stringify([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
]);

const Home = ()  => {

  const [inputValue, setInputValue] = React.useState<string>(defaultValue);
  const [parsedMatrix, setParsedMatrix] = React.useState<number[][]>(JSON.parse(inputValue));
  const [isValid, setIsValid] = React.useState<boolean>(true);
  const [message, setMessage] = React.useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value;

    if (value.length === 0) {
      setMessage("Input vacío");
      setIsValid(false);
      return;
    }

    try {

      const jsonParse = JSON.parse(value);      

      if (!Array.isArray(jsonParse)) {
        setIsValid(false);
        setMessage("Lo que ingresaste no es una matriz");
        return;
      }

      if (jsonParse.length === 0) {
        setIsValid(false);
        setMessage("Tu matriz está vacía");
        return;
      }

      const areAllRowsNonEmpty = jsonParse.every((fila: any) => fila.length > 0);
      const isLengthEqual = jsonParse.every((fila: any) => fila.length === jsonParse.length);
      const areAllNumbers = jsonParse.every((fila: any) => fila.every((cell: any) => typeof cell === 'number'));

      if (!areAllRowsNonEmpty) {
        setIsValid(false);
        setMessage("Tu matriz contiene arrays vacíos");
        return;
      }

      if (!isLengthEqual) {
        setIsValid(false);
        setMessage("Tu matriz debe ser una matriz de NxN");
        return;
      }

      if (!areAllNumbers) {
        setIsValid(false);
        setMessage("Todos los valores de la matriz deben ser números");
        return;
      }

      setIsValid(true);
      setParsedMatrix(jsonParse);
      setInputValue(JSON.stringify(jsonParse));
      setMessage('');

    } catch {
      setIsValid(false);
      setMessage("Input inválido");
    }
  };

  const handleButtonClick = () => {
    const rotatedMatrix = rotateImageAntihorario([...parsedMatrix]);
    setParsedMatrix(rotatedMatrix);
    setInputValue(JSON.stringify(rotatedMatrix));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">      
      <div className="w-full">
        <div className="flex w-full items-center justify-center">
          <h1 className="text-2xl">Rotar matriz en sentido antihorario</h1>
        </div>
        <div className="mt-4 flex items-center justify-between gap-2 md:mt-8">
          <InputMatrix 
            placeholder="Inserta matriz..." 
            onInputChange={handleInputChange}
            defaultInput={inputValue}      
          />
          <InsertMatrix onButtonClick={handleButtonClick} disabled={!isValid}/>
        </div>
        <div className="mt-5 flex w-full justify-center">
            { 
                isValid ? (
                  <DisplayMatrix matrix={parsedMatrix.length > 0 ? parsedMatrix : JSON.parse(inputValue)} />
                ) : (
                  <p>{message}</p>
                )
            }
        </div>      
      </div>
    </main>
  );
}

export default Home;