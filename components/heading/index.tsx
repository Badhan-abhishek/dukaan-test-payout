"use client";

import * as Select from "@radix-ui/react-select";
import { ChevronDown } from "lucide-react";

export const Heading = () => {
  return (
    <div className="flex justify-between items-center">
      <span className="text-xl">Overview</span>
      <div>
        <Select.Root defaultValue="lastMonth">
          <Select.Trigger className="px-[14px] py-[6px] flex gap-2 border rounded-4 border-grayMute">
            Last Month <ChevronDown />
          </Select.Trigger>
          <Select.Content className="bg-white border rounded-4 p-1 min-w-[100px]">
            <Select.Item className="px-2 py-1 cursor-pointer" value="lastMonth">
              Last Month
            </Select.Item>
            <Select.Item
              className="px-2 py-1 cursor-pointer"
              value="currentMonth"
            >
              Current Month
            </Select.Item>
          </Select.Content>
        </Select.Root>
      </div>
    </div>
  );
};
