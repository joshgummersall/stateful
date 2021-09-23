import { useRef } from "react";

export const useRenderCount = (name, initialCount = 0) => {
  const count = useRef(initialCount);
  console.log(`[${name}]: Render ${count.current}`);

  count.current++;

  return count;
};
