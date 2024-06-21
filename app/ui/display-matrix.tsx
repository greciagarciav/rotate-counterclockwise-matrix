'use client';

const DisplayMatrix = ({ matrix }: {matrix: any[][]}) => {

  return (
    <div className="grid ">
      <div className="p-4 grid">
        {                 
          matrix.map((fila, i) => (
            <div key={i} className="flex">
                {fila.map((cell, j) => (
                    <div key={j} className=" border-gray-300 px-4 py-2 w-24 h-24 flex items-center justify-center border">
                        {cell}
                    </div>
                ))}                  
            </div>                    
          ))                
        }        
      </div>
    </div>
  );
};

export default DisplayMatrix;