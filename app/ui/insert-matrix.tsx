'use client';

const InputMatrix =({ placeholder, onInputChange, defaultInput }: { placeholder: string, onInputChange: any, defaultInput: string })=> {

  return (
    <div className="relative flex flex-1 flex-shrink-0">
      <label htmlFor="insert" className="sr-only">
        Insert
      </label>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-6 text-sm outline-2 placeholder:text-gray-500"
        placeholder={placeholder}
        onChange={onInputChange}
        defaultValue={defaultInput}     
      />
    </div>
  );
}

export default InputMatrix;