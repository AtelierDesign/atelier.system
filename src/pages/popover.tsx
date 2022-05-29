import * as React from 'react';
import * as PopoverPrimitive from '@radix-ui/react-popover';
import { Popover } from '../components/Popover';

export default function PopoverPage() {
  return (
    <Popover>
      <PopoverTrigger>open</PopoverTrigger>
      <PopoverContent sideOffset={5}>
        <PopoverClose>close</PopoverClose>
        <PopoverArrow width={20} height={10} />
      </PopoverContent>
    </Popover>
  );
}
