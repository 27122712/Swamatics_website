import { useEffect, useRef, useState } from "react";

// Custom hook for scroll-triggered animations
export const useScrollAnimation = (options = {}) => {
  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Optional: disconnect after first trigger for performance
          if (options.once !== false) {
            observer.disconnect();
          }
        } else if (!options.once) {
          setIsVisible(false);
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
      }
    );

    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [options.threshold, options.rootMargin, options.once]);

  return [elementRef, isVisible];
};

// Hook for animated counters
export const useCounterAnimation = (
  endValue,
  duration = 2000,
  startOnVisible = true
) => {
  const [count, setCount] = useState(0);
  const [elementRef, isVisible] = useScrollAnimation({ threshold: 0.5 });
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    if (isVisible && startOnVisible && !hasAnimated) {
      setHasAnimated(true);
      let startTime = null;

      const animate = (currentTime) => {
        if (startTime === null) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentCount = Math.floor(easeOutQuart * endValue);

        setCount(currentCount);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isVisible, endValue, duration, startOnVisible, hasAnimated]);

  return [elementRef, count, isVisible];
};

// Hook for parallax scrolling
export const useParallax = (speed = 0.5) => {
  const elementRef = useRef(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const scrolled = window.pageYOffset;
        const rate = scrolled * -speed;
        setOffset(rate);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [speed]);

  return [elementRef, offset];
};

// Hook for staggered animations
export const useStaggeredAnimation = (itemCount, delay = 100) => {
  const [elementRef, isVisible] = useScrollAnimation({ threshold: 0.2 });
  const [visibleItems, setVisibleItems] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timers = [];

      for (let i = 0; i < itemCount; i++) {
        const timer = setTimeout(() => {
          setVisibleItems((prev) => prev + 1);
        }, i * delay);
        timers.push(timer);
      }

      return () => {
        timers.forEach((timer) => clearTimeout(timer));
      };
    } else {
      setVisibleItems(0);
    }
  }, [isVisible, itemCount, delay]);

  return [elementRef, visibleItems, isVisible];
};
