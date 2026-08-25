// src/features/Toolbar/components/ColorPicker/ColorPickerModal/ColorPickerModal.tsx
import * as Popover from "@radix-ui/react-popover";
import { ColorPickerContent } from "./ColorPickerContent";
import { useColorPickerLogic } from "./useColorPickerLogic";
import { useToolbarTextContent } from "../../../hooks/useToolbarTextContent";
import type { ColorKey } from "../../../../../types";

interface ColorPickerModalProps {
  colorKey: ColorKey;
  open: boolean;
  onClose: () => void;
  triggerElement?: HTMLElement | null;
}

export const ColorPickerModal = ({
  colorKey,
  open,
  onClose,
  triggerElement,
}: ColorPickerModalProps) => {
  const {
    currentColor,
    format,
    formattedColor,
    handleColorChange,
    handleCopy,
    toggleFormat,
  } = useColorPickerLogic(colorKey);
  const label = useToolbarTextContent().colorKeys[colorKey];

  return (
    <Popover.Root open={open} onOpenChange={(isOpen) => !isOpen && onClose()}>
      {triggerElement && (
        <Popover.Anchor virtualRef={{ current: triggerElement }} />
      )}
      <Popover.Portal>
        <Popover.Content
          side="right"
          sideOffset={20}
          align="start"
          collisionPadding={20}
          className="z-90 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95"
        >
          <ColorPickerContent
            colorKey={colorKey}
            label={label}
            currentColor={currentColor}
            formattedColor={formattedColor}
            format={format}
            onColorChange={handleColorChange}
            onCopy={handleCopy}
            onToggleFormat={toggleFormat}
            onClose={onClose}
          />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};
