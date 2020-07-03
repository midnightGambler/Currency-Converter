import { useEffect, RefObject } from "react";

// Hook that handles click outsidethe component;
export const useOuterClick = (
  ref: RefObject<HTMLDivElement>,
  callback: () => void
) => {
  const handleClickOutside = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  };

  useEffect(() => {
    // Bind the event listener
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
};
