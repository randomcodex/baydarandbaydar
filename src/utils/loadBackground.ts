const loadedImages = new Set<string>();

export interface BackgroundOptions {  classNames?: string;
  size?: 'cover' | 'contain' | 'auto' | string;
  position?: string;
  repeat?: 'no-repeat' | 'repeat' | 'repeat-x' | 'repeat-y';
}

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

function applyBackground(
  element: HTMLElement,
  imageUrl: string,
  options: BackgroundOptions
): void {
  const {
    classNames = 'bg-polish',
    size = 'cover',
    position = 'center',
    repeat = 'no-repeat'  } = options;

  element.style.backgroundImage = `url(${imageUrl})`;
  element.style.backgroundSize = size;
  element.style.backgroundPosition = position;
  element.style.backgroundRepeat = repeat;

  if (classNames) {
    element.classList.add(...classNames.split(' '));
  }
}

export function preloadBackgroundImages(imageUrls: string[]): Promise<void[]> {  const promises = imageUrls.map(url => {
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

export function lazyLoadBackground(
  elementId: string,
  imageUrl: string,
  options: BackgroundOptions = {},
  threshold: number = 0.1
): void {
  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found`);
    return;  }

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

export function removeBackground(elementId: string): void {
  const element = document.getElementById(elementId);
  if (!element) {
    console.warn(`Element with ID "${elementId}" not found`);
    return;  }

  element.style.backgroundImage = '';
  element.style.backgroundSize = '';
  element.style.backgroundPosition = '';
  element.style.backgroundRepeat = '';

  element.classList.remove('bg-polish');
}
