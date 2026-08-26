import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { useColorStore } from '../../../store/useColorStore';
import { ToolbarDesktop } from './ToolbarDesktop';
import { ToolbarMobile } from './ToolbarMobile';

export const Toolbar = () => {
  const isDesktop = useMediaQuery('(min-width: 999px)');
  
  const isShaking = useColorStore((state) => state.isToolbarShaking);

  const animationClass = isDesktop ? 'animate-desktop-feedback' : 'animate-mobile-feedback';

  return (
    <div id="toolbar" style={{ fontFamily: '"Figtree", sans-serif' }} className={isShaking ? animationClass : ''}>
      {isDesktop ? <ToolbarDesktop /> : <ToolbarMobile />}
    </div>
  );
};