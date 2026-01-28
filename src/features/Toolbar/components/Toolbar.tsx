import { useMediaQuery } from '../../../hooks/useMediaQuery';
import { ToolbarDesktop } from './ToolbarDesktop';
import { ToolbarMobile } from './ToolbarMobile';

export const Toolbar = () => {
  const isDesktop = useMediaQuery('(min-width: 768px)');

  return isDesktop ? <ToolbarDesktop /> : <ToolbarMobile />;
};