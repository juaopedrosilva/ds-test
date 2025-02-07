import * as React from "react";

import * as ReactSelect from "@radix-ui/react-select";

import { selectCva } from "./select.styles";

import { CaretSortIcon } from "../../icons";

export type SelectProps = ReactSelect.SelectProps & {
  ref?: React.ComponentProps<typeof ReactSelect.Trigger>["ref"];
  placeholder?: React.ReactNode;
  invalid?: boolean;
};

export function Select({ children, placeholder, invalid = false, ref, ...props }: SelectProps) {
  const selectStyles = selectCva({ invalid });

  return (
    <ReactSelect.Root {...props}>
      <ReactSelect.Trigger className={selectStyles} ref={ref}>
        <ReactSelect.Value placeholder={placeholder} />
        <ReactSelect.Icon className="-mr-1.5">
          <CaretSortIcon className="h-5 w-5 text-gray-200" />
        </ReactSelect.Icon>
      </ReactSelect.Trigger>

      <ReactSelect.Portal>
        <ReactSelect.Content
          sideOffset={4}
          className="bg-app-foreground z-50 w-full overflow-hidden border border-gray-400 py-1"
        >
          <ReactSelect.Viewport>{children}</ReactSelect.Viewport>
        </ReactSelect.Content>
      </ReactSelect.Portal>
    </ReactSelect.Root>
  );
}
