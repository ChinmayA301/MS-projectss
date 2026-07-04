import { useCallback, useEffect, useRef } from 'react';

export function useAnimationFrame(
  callback: (deltaMs: number) => void,
  isRunning: boolean
) {
  const callbackRef = useRef(callback);
  const frameRef = useRef<number>(0);
  const lastTimeRef = useRef<number>(0);

  callbackRef.current = callback;

  const loop = useCallback((time: number) => {
    if (lastTimeRef.current !== 0) {
      const delta = time - lastTimeRef.current;
      callbackRef.current(delta);
    }
    lastTimeRef.current = time;
    frameRef.current = requestAnimationFrame(loop);
  }, []);

  useEffect(() => {
    if (isRunning) {
      lastTimeRef.current = 0;
      frameRef.current = requestAnimationFrame(loop);
    } else {
      cancelAnimationFrame(frameRef.current);
      lastTimeRef.current = 0;
    }
    return () => cancelAnimationFrame(frameRef.current);
  }, [isRunning, loop]);
}
