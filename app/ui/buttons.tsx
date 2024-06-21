'use client';

const InsertMatrix = ({ onButtonClick, disabled }: { onButtonClick: any, disabled: boolean }) => {
    
  return (
    <button
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
      onClick={onButtonClick}
      disabled={disabled}
    >
      <span className="hidden md:block">Rotar matriz</span>{' '}      
    </button>
  );
};

export default InsertMatrix;