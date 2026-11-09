import { useEffect, useState } from 'react';

/** Animates a number from 0 to `end` once `start` becomes true. */
export default function useCountUp(end, start, duration = 1800, decimals = 0) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!start || typeof end !== 'number') return;
    let raf;
    const t0 = performance.now();
    const tick = (now) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(end * eased);
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, end, duration]);

  return Number(value).toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}
