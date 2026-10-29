export const easeOut = [0.22, 1, 0.36, 1] as const;

export function motionTransition(reduce: boolean | null, duration = 0.32) {
  if (reduce) return { duration: 0 };
  return { duration, ease: easeOut };
}
