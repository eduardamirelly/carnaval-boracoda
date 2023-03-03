import { MapPin } from 'phosphor-react';

interface SelectInputProps {
  placeholder: string;
  options: string[];
}

export function SelectInput({ placeholder, options }: SelectInputProps) {
  return (
    <div className="bg-gray-300 flex-1 flex items-center justify-between p-3 gap-1 relative rounded after:pointer-events-none">
      <MapPin size={24} className="text-red-500" />
      <select 
        id="sel" 
        name="sel" 
        className="placeholder:text-gray-700  outline-none bg-gray-300 min-w-[150px] w-full cursor-pointer" 
        defaultValue="0"
      >
        <option value="0" disabled selected>{placeholder}</option>
        {options.map((option, index) => (
          <option value={index + 1}>{option}</option>
        ))}
      </select>
    </div>
  ) 
}