import { SunIcon, MoonIcon } from '@heroicons/react/24/outline';
import { useColorStore } from '../../../../store/useColorStore';
import { useEffect } from 'react';

interface ThemeToggleButtonProps {
  className?: string;
}

export const ThemeToggleButton = ({ className = "" }: ThemeToggleButtonProps) => {
  const themeMode = useColorStore((state) => state.themeMode);
  const toggleTheme = useColorStore((state) => state.toggleTheme);
  const setColor = useColorStore((state) => state.setColor);

  useEffect(() => {
    if (themeMode === 'light') {
      setColor('background', '#FFFFFF');
      setColor('text', '#000000');
    } else {
      setColor('background', '#1a1a2e');
      setColor('text', '#FFFFFF');
    }
  }, [themeMode, setColor]);

  return (
    <button
      className={`flex flex-col items-center justify-center gap-1 px-4 h-full hover:bg-white/5 transition-colors ${className}`}
      onClick={toggleTheme}
      aria-label={`Switch to ${themeMode === 'light' ? 'dark' : 'light'} mode`}
    >
      {themeMode === 'light' ? (
        <MoonIcon className="w-6 h-6 text-white" />
      ) : (
        <SunIcon className="w-6 h-6 text-white" />
      )}
      <span className="text-[12px] text-white tracking-wide">
        {themeMode === 'light' ? 'Dark' : 'Light'}
      </span>
    </button>
  );
};