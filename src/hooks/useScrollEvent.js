import { useEffect, useState } from "react";

export default function useScrollEvent() {
  const [down, setDown] = useState(false);
  const [Yposition, setYposition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > Yposition) {
        // scroll down
        setDown(true);
        setYposition(window.scrollY);
      } else {
        // scroll up
        setDown(false);
        setYposition(window.scrollY);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return function cleanUp() {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [Yposition]);

  return [down];
}
