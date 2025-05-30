/**
 * Background Image Loader Utility
 * Provides type-safe background image loading with automatic styling
 */

// Track loaded images to prevent duplicate loading
const loadedImages = new Set<string>();

export interface BackgroundOptions {
  /** CSS classes to apply (space-separated) */
  classNames?: string;
  /** Background size property */
  size?: 'cover' | 'contain' | 'auto' | string;
  /** Background position property */
  position?: string;
  /** Background repeat property */
  repeat?: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y';
}

/**
 * Load background image on an element by ID
 * @param elementId - ID of the target element
 * @param imageUrl - URL of the background image
 * @param options - Configuration options
 */
export function loadBackground(
  elementId: string,
  imageUrl: string,
  options: BackgroundOptions = {}
): void {
  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found`);
    return;
  }

  applyBackground(element, imageUrl, options);
}

/**
 * Load background image on an element by selector
 * @param selector - CSS selector for the target element
 * @param imageUrl - URL of the background image
 * @param options - Configuration options
 */
export function loadBackgroundBySelector(
  selector: string,
  imageUrl: string,
  options: BackgroundOptions = {}
): void {
  const element = document.querySelector(selector) as HTMLElement;
  if (!element) {
    console.warn(`Element with selector "${selector}" not found`);
    return;
  }

  applyBackground(element, imageUrl, options);
}

/**
 * Load background images on multiple elements
 * @param selector - CSS selector for target elements
 * @param imageUrl - URL of the background image
 * @param options - Configuration options
 */
export function loadBackgroundMultiple(
  selector: string,
  imageUrl: string,
  options: BackgroundOptions = {}
): void {
  const elements = document.querySelectorAll(selector) as NodeListOf<HTMLElement>;
  
  elements.forEach(element => {
    applyBackground(element, imageUrl, options);
  });
}

/**
 * Apply background styling to an element
 * @param element - Target HTML element
 * @param imageUrl - URL of the background image
 * @param options - Configuration options
 */
function applyBackground(
  element: HTMLElement,
  imageUrl: string,
  options: BackgroundOptions
): void {
  const {
    classNames = 'bg-polish',
    size = 'cover',
    position = 'center',
    repeat = 'no-repeat'
  } = options;

  // Apply background image and properties
  element.style.backgroundImage = `url(${imageUrl})`;
  element.style.backgroundSize = size;
  element.style.backgroundPosition = position;
  element.style.backgroundRepeat = repeat;

  // Apply CSS classes
  if (classNames) {
    element.classList.add(...classNames.split(' '));
  }
}

/**
 * Preload background images for better performance
 * @param imageUrls - Array of image URLs to preload
 */
export function preloadBackgroundImages(imageUrls: string[]): Promise<void[]> {
  const promises = imageUrls.map(url => {
    // Skip if already loaded
    if (loadedImages.has(url)) {
      return Promise.resolve();
    }
    
    return new Promise<void>((resolve, reject) => {
      const img = new Image();
      img.onload = () => {
        loadedImages.add(url);
        resolve();
      };
      img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
      img.src = url;
    });
  });

  return Promise.all(promises);
}

/**
 * Lazy load background image using Intersection Observer
 * @param elementId - ID of the target element
 * @param imageUrl - URL of the background image
 * @param options - Configuration options
 * @param threshold - Intersection threshold (0-1)
 */
export function lazyLoadBackground(
  elementId: string,
  imageUrl: string,
  options: BackgroundOptions = {},
  threshold: number = 0.1
): void {
  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found`);
    return;
  }

  // Create intersection observer
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          applyBackground(entry.target as HTMLElement, imageUrl, options);
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold }
  );

  observer.observe(element);
}

/**
 * Remove background image and related classes
 * @param elementId - ID of the target element
 */
export function removeBackground(elementId: string): void {
  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found`);
    return;
  }

  // Remove background styles
  element.style.backgroundImage = '';
  element.style.backgroundSize = '';
  element.style.backgroundPosition = '';
  element.style.backgroundRepeat = '';
  
  // Remove background-related classes
  element.classList.remove('bg-polish');
}
