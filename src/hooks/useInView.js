import { useEffect, useRef, useState } from 'react';

/** Returns [ref, inView]. Becomes true once the element scrolls into view. */
export default function useInView(options = { threshold: 0.15 }, once = true) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!('IntersectionObserver' in window)) { setInView(true); return; }
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        if (once) io.disconnect();
      } else if (!once) setInView(false);
    }, options);
    io.observe(el);
    return () => io.disconnect();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return [ref, inView];
}
