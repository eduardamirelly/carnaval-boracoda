import { MapPin } from 'phosphor-react';
import { Text } from '../Text';

interface BlockProps {
  imgSrc: string;
  title: string;
  description: string;
  location: string;
}

export function Block({ imgSrc, title, description, location }: BlockProps) {
  return (
    <div className="border border-gray-200 rounded-lg max-w-[384px] overflow-hidden mx-auto">
      <div className="max-h-[153px]">
        <img src={`/assets/${imgSrc}`} alt={imgSrc} />
      </div>

      <div className="p-4 flex flex-col gap-4">
        <h4 className="font-bold text-lg">{title}</h4>
        <Text>
          {description}
        </Text>

        <div className="flex items-center gap-2">
          <MapPin className="text-red-500" size={24} />
          <Text>
            {location}
          </Text>
        </div>
      </div>
    </div>
  )
}