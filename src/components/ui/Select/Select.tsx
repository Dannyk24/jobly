import * as RadixSelect from "radix-ui/select";
import type { ComponentType } from "react";
import "./Select.css";

type SelectProps = {
  TriggerIcon?: ComponentType;
  placeholder: string;
  options: {
    value: string;
    label: string;
  }[];
};

export function Select({ TriggerIcon, placeholder, options }: SelectProps) {
  return (
    <RadixSelect.Root>
      <RadixSelect.Trigger className="dropdown-trigger">
        <RadixSelect.Icon asChild>
          {TriggerIcon && <TriggerIcon />}
        </RadixSelect.Icon>
        <RadixSelect.Value placeholder={placeholder} />
      </RadixSelect.Trigger>

      <RadixSelect.Portal>
        <RadixSelect.Content
          className="dropdown-content"
          position="popper"
          sideOffset={5}
        >
          <RadixSelect.Viewport>
            {options.map((option, index) => {
              return (
                <RadixSelect.Item
                  value={option.value}
                  className="dropdown-item"
                  key={index}
                >
                  <RadixSelect.ItemText>{option.label}</RadixSelect.ItemText>
                </RadixSelect.Item>
              );
            })}
          </RadixSelect.Viewport>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}
