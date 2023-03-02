import { MapPin } from 'phosphor-react';

export function SelectInput() {
  return (
    <label htmlFor="sel" className="bg-gray-300 flex-1 flex items-center justify-between p-3 gap-1 relative rounded after:pointer-events-none">
      <MapPin size={24} className="text-red-500" />
      <select id="sel" name="sel" className="outline-none bg-gray-300 min-w-[150px] w-full cursor-pointer">
        <option value="1">Text</option>
      </select>
    </label>
  ) 
}