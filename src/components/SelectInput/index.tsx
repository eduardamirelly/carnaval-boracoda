import * as Select from '@radix-ui/react-select';
import { CaretDown, Check, MapPin } from 'phosphor-react';

export function SelectInput() {
  return (
    <>
      <MapPin size={24} />
      <Select.Root>
        <Select.Trigger className="flex items-center gap-1 bg-gray-300 px-3 py-3 rounded">
          <Select.Value placeholder="Selecione uma cidade" />
          <Select.Icon className="">
            <CaretDown size={24} />
          </Select.Icon>
        </Select.Trigger>

        <Select.Portal>
          <Select.Content className="w-32 bg-black">
            <Select.ScrollUpButton />
            
            <Select.Viewport>
              <Select.Group>
                <Select.Item value="1">
                  <Select.ItemText>
                    Option
                  </Select.ItemText>
                  <Select.ItemIndicator>
                    <Check size={24} />
                  </Select.ItemIndicator>
                </Select.Item>
              </Select.Group>
            </Select.Viewport>

            <Select.ScrollDownButton />
            <Select.Arrow />
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </>
  ) 
}