import { ColorInput } from './ColorInput';

export const PalettePanel = () => {
  return (
    <div className="space-y-4">
      <ColorInput label="Background" colorKey="background" />
      <ColorInput label="Text" colorKey="text" />
      <ColorInput label="Primary" colorKey="primary" />
      <ColorInput label="Secondary" colorKey="secondary" />
      <ColorInput label="Accent" colorKey="accent" />
    </div>
  );
};