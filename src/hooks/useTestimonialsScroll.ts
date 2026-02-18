// src/hooks/useTestimonialsScroll.ts
import { useRef, useEffect } from 'react';

export const useTestimonialsScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const position = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;

    setTimeout(() => {
      position.current = el.scrollWidth / 2;
      el.scrollLeft = position.current;
    }, 50);

    const scroll = () => {
      if (!isPaused.current && el) {
        position.current += 0.6;
        el.scrollLeft = Math.floor(position.current);
        if (position.current >= el.scrollWidth) {
          position.current = el.scrollWidth / 2;
          el.scrollLeft = position.current;
        }
      }
      animId = requestAnimationFrame(scroll);
    };

    animId = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animId);
  }, []);

  const handleMouseEnter = () => { isPaused.current = true; };
  const handleMouseLeave = () => { isPaused.current = false; };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = scrollRef.current;
    if (!el) return;
    isPaused.current = true;
    const startX = e.pageX - el.offsetLeft;
    const startScroll = el.scrollLeft;

    const onMove = (ev: MouseEvent) => {
      el.scrollLeft = startScroll - (ev.pageX - el.offsetLeft - startX);
      position.current = el.scrollLeft;
    };
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  };

  return {
    scrollRef,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseDown,
  };
};