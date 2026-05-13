import { useRef, useEffect } from "react";

export const useTestimonialsScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isPaused = useRef(false);
  const isVisible = useRef(false); // Controla si está en el viewport
  const position = useRef(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animId: number;

    // 1. Configuramos el Intersection Observer
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          // Si el componente está a 300px o menos de entrar, es true
          isVisible.current = entry.isIntersecting;
        });
      },
      {
        root: null,
        rootMargin: "100px 0px 0px 0px", // Se activa 300px antes en el eje Y
        threshold: 0,
      },
    );

    // 2. Empezamos a observar el contenedor del carrusel
    observer.observe(el);

    const init = () => {
      position.current = el.scrollWidth / 2;
      el.scrollLeft = position.current;
    };

    setTimeout(init, 50);

    const scroll = () => {
      // 3. Condicionamos la animación: solo avanza si no está pausado Y es visible
      if (!isPaused.current && isVisible.current && el) {
        position.current += 0.6;

        // Reset seamless: vuelve al medio sin salto visible
        if (position.current >= el.scrollWidth / 2 + el.clientWidth * 2) {
          position.current = el.scrollWidth / 2;
        }

        el.scrollLeft = position.current;
      }
      animId = requestAnimationFrame(scroll);
    };

    animId = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect(); // 4. Limpiamos el observer al desmontar
    };
  }, []);

  const handleMouseEnter = () => {
    isPaused.current = true;
  };
  const handleMouseLeave = () => {
    isPaused.current = false;
  };

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
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
    };

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
  };

  return {
    scrollRef,
    handleMouseEnter,
    handleMouseLeave,
    handleMouseDown,
  };
};
