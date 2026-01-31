// // src/features/Toolbar/hooks/useToolbarMobileLogic.ts
// import { useState } from 'react';
// import type { ColorKey } from '../../../types';

// export const useToolbarMobileLogic = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleToolbar = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleColorSelectAndClose = (
//     key: ColorKey,
//     onSelect: (key: ColorKey) => void
//   ) => {
//     onSelect(key);
//     setIsOpen(false);
//   };

//   return {
//     isOpen,
//     toggleToolbar,
//     handleColorSelectAndClose,
//   };
// };