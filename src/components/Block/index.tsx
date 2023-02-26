import { Text } from '../Text';

export function Block() {
  return (
    <div className="border border-gray-200 rounded-lg min-w-[384px] overflow-hidden">
      <div className="max-h-[153px]">
        <img src="/assets/example-block.jpg" alt="example-block" />
      </div>

      <div className="p-4">
        <h4 className="font-bold text-lg">Title Block</h4>
        <Text>
          Description
        </Text>
      </div>
    </div>
  )
}