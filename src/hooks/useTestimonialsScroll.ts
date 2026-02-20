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

    const init = () => {
      position.current = el.scrollWidth / 2;
      el.scrollLeft = position.current;
    };

    setTimeout(init, 50);

    const scroll = () => {
      if (!isPaused.current && el) {
        position.current += 0.6;

        // Reset seamless: vuelve al medio sin salto visible
        if (position.current >= (el.scrollWidth / 2) + el.clientWidth * 2) {
          position.current = el.scrollWidth / 2;
        }

        el.scrollLeft = position.current;
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
      const walked = ev.pageX - el.offsetLeft - startX;
      const newPos = startScroll - walked;
      el.scrollLeft = newPos;
      position.current = newPos;
    };

    const onUp = () => {
      // Reactiva el auto-scroll al soltar
      isPaused.current = false;
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