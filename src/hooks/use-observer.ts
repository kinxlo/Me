"use client";

import { useCallback, useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Type definitions
interface UseIntersectionToggleOptions {
  threshold?: number | number[];
  rootMargin?: string;
  triggerOnce?: boolean;
  skip?: boolean;
  initialInView?: boolean;
  fallbackInView?: boolean;
  trackVisibility?: boolean;
  delay?: number;
}

interface UseIntersectionToggleReturn {
  ref: (node?: Element | null) => void;
  isIntersecting: boolean;
}

// Main hook
export const useIntersectionToggle = (
  toggleFunction: (isIntersecting: boolean) => void,
  options: UseIntersectionToggleOptions = {},
): UseIntersectionToggleReturn => {
  // Default options
  const defaultOptions: UseIntersectionToggleOptions = {
    threshold: 0.7,
    rootMargin: "0px",
    triggerOnce: false,
    ...options,
  };

  const { ref, inView } = useInView(defaultOptions);

  // Call toggle function whenever inView changes
  useEffect(() => {
    toggleFunction(inView);
  }, [inView, toggleFunction]);

  return {
    ref,
    isIntersecting: inView,
  };
};

// Alternative version with more explicit callback handling
export const useIntersectionToggleWithState = (
  toggleFunction?: (isIntersecting: boolean) => void,
  options: UseIntersectionToggleOptions = {},
) => {
  const defaultOptions: UseIntersectionToggleOptions = {
    threshold: 0.7,
    rootMargin: "0px",
    triggerOnce: false,
    ...options,
  };

  const { ref, inView } = useInView(defaultOptions);

  // Call optional toggle function whenever inView changes
  useEffect(() => {
    toggleFunction?.(inView);
  }, [inView, toggleFunction]);

  return {
    ref,
    isIntersecting: inView,
  };
};

// Version with enter/exit callbacks
export const useIntersectionCallbacks = (
  callbacks: {
    onEnter?: () => void;
    onExit?: () => void;
    onChange?: (isIntersecting: boolean) => void;
  },
  options: UseIntersectionToggleOptions = {},
) => {
  const defaultOptions: UseIntersectionToggleOptions = {
    threshold: 0.7,
    rootMargin: "0px",
    triggerOnce: false,
    ...options,
  };

  const { ref, inView, entry } = useInView(defaultOptions);

  // Track previous state to detect enter/exit
  const handleIntersectionChange = useCallback(() => {
    if (entry) {
      const isIntersecting = entry.isIntersecting;

      // Call onChange callback
      callbacks.onChange?.(isIntersecting);

      // Call specific enter/exit callbacks
      if (isIntersecting) {
        callbacks.onEnter?.();
      } else {
        callbacks.onExit?.();
      }
    }
  }, [entry, callbacks]);

  useEffect(() => {
    handleIntersectionChange();
  }, [handleIntersectionChange]);

  return {
    ref,
    isIntersecting: inView,
    entry,
  };
};

// Simplified version that returns both ref and state
export const useIntersection = (options: UseIntersectionToggleOptions = {}) => {
  const defaultOptions: UseIntersectionToggleOptions = {
    triggerOnce: false,
    ...options,
  };

  const { ref, inView, entry } = useInView(defaultOptions);

  return {
    ref,
    isIntersecting: inView,
    entry,
  };
};
