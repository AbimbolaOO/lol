import { useEffect } from 'react';

const useIntersectionAnimate = (
  ref: React.RefObject<Element>,
  animateClass: string,
  options: IntersectionObserverInit = { threshold: 1 }
) => {
  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          console.log("entry.isIntersecting", entry.isIntersecting);
          entry.target.classList.add(animateClass);
          observer.unobserve(entry.target); // Unobserve after the animation is triggered
        }
      });
    }, options);

    observer.observe(element);

    return () => {
      observer.disconnect(); // Cleanup the observer
    };
  }, [ref, animateClass, options]);
};

export default useIntersectionAnimate;
