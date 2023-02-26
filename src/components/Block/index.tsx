import { MapPin } from 'phosphor-react';
import { Text } from '../Text';

export function Block() {
  return (
    <div className="border border-gray-200 rounded-lg w-[384px] overflow-hidden">
      <div className="max-h-[153px]">
        <img src="/assets/example-block.jpg" alt="example-block" />
      </div>

      <div className="p-4 flex flex-col gap-4">
        <h4 className="font-bold text-lg">Title Block</h4>
        <Text>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.
        </Text>

        <div className="flex items-center gap-2">
          <MapPin className="text-red-500" size={24} />
          <Text>
            São Paulo - SP
          </Text>
        </div>
      </div>
    </div>
  )
}