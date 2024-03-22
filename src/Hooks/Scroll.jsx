import { useCallback } from 'react';

function useScrollToElement() {
  const scrollToElement = useCallback((id) => {
    console.log(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    console.log("NO ANDA");
  }, []);

  return scrollToElement;
}

export default useScrollToElement;
