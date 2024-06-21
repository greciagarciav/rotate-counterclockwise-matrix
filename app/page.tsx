'use client'

import  React from 'react';
import InputMatrix from "./ui/insert-matrix";
import InsertMatrix  from "./ui/buttons";
import DisplayMatrix from './ui/display-matrix';
import { rotateImageAntihorario } from './lib/utils';

const Home = ()  => {

  const [inputValue, setInputValue] = React.useState<any>('');
  const [parsedMatrix, setParsedMatrix] = React.useState<number[][]>([]);
  const [isValid, setIsValid] = React.useState<boolean>(false);
  const [message, setMessage] = React.useState<string>('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    const value = e.target.value;
    
    if (value.length === 0) {
      setMessage("Input vacío");
      setIsValid(false);
    }

    try {

      const jsonParse = JSON.parse(value);      

      if (!Array.isArray(jsonParse)) {
        setIsValid(false);
        setMessage("Lo que ingresaste no es una matriz");
      } else if (jsonParse.length === 0) {
        setIsValid(false);
        setMessage("Tu matriz está vacía");
      } else {
        const areAllRowsNonEmpty = jsonParse.every((fila: any) => fila.length > 0);
        const isLengthEqual = jsonParse.every((fila: any) => fila.length === jsonParse.length);
        const areAllNumbers = jsonParse.every((fila: any) => fila.every((cell: any) => typeof cell === 'number'));

        if (!areAllRowsNonEmpty) {
          setMessage("Tu matriz contiene arrays vacíos");
          setIsValid(false);
        } else if (!isLengthEqual) {
          setMessage("Tu matriz debe ser una matriz de NxN");
          setIsValid(false);
        } else if (!areAllNumbers) {
          setMessage("Todos los valores de la matriz deben ser números");
          setIsValid(false);
        } else {
          setIsValid(true);
          setParsedMatrix(jsonParse);
          setInputValue(jsonParse);
          setMessage('');
        }        
      }
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
          />
          <InsertMatrix onButtonClick={handleButtonClick} disabled={!isValid}/>
        </div>
        <div className="mt-5 flex w-full justify-center">
            { 
                parsedMatrix.length > 0 || inputValue.length > 0 ? (
                <DisplayMatrix matrix={ parsedMatrix ? parsedMatrix : inputValue } />
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