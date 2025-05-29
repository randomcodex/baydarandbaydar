/**
 * Application constants and configuration values
 * Centralizes hardcoded values used throughout the application
 */

// Animation durations (in milliseconds)
export const ANIMATION_DURATION = {
  FAST: 150,
  NORMAL: 250,
  SLOW: 500,
  FADE_IN: 600,
  SLIDE_IN: 800,
  WINE_SWAY: 2000,
  WINE_FILL: 1500,
  TOAST_PROGRESS: 5000,
  MODAL_ENTER: 300,
  MODAL_EXIT: 200,
} as const;

// Animation timing values
export const ANIMATION_TIMING = {
  EASE_OUT: 'easeOut',
  EASE_IN: 'easeIn',
  EASE_IN_OUT: 'easeInOut',
  LINEAR: 'linear',
} as const;

// Stagger animation delays
export const STAGGER_DELAYS = {
  FAST: 0.05,
  NORMAL: 0.1,
  SLOW: 0.2,
  CHILDREN: 0.2,
  CHILDREN_FAST: 0.1,
  CHILDREN_SLOW: 0.3,
} as const;

// Performance thresholds
export const PERFORMANCE_THRESHOLDS = {
  SLOW_RESOURCE: 1000, // ms
  PAGE_LOAD_WARNING: 2000, // ms
  MEMORY_CHECK_DELAY: 2000, // ms
} as const;

// API configuration
export const API_CONFIG = {
  TIMEOUT: 10000, // 10 seconds
  DEFAULT_CURRENCY: 'USD',
  DEFAULT_LOCALE: 'en-US',
  FRACTION_DIGITS: 2,
} as const;

// Date calculations (in days)
export const DATE_CONSTANTS = {
  DAYS_IN_WEEK: 7,
  DAYS_IN_MONTH: 30,
  DAYS_IN_YEAR: 365,
} as const;

// UI component sizes
export const COMPONENT_SIZES = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
  EXTRA_LARGE: 'xl',
} as const;

// Toast configuration
export const TOAST_CONFIG = {
  DEFAULT_DURATION: 5000, // ms
  MAX_TOASTS: 5,
  PROGRESS_ANIMATION_DURATION: 5000, // ms
  POSITIONS: {
    TOP_RIGHT: 'top-right',
    TOP_LEFT: 'top-left',
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM_LEFT: 'bottom-left',
    TOP_CENTER: 'top-center',
    BOTTOM_CENTER: 'bottom-center',
  },
} as const;

// Modal configuration
export const MODAL_CONFIG = {
  SIZES: {
    SMALL: 'sm',
    MEDIUM: 'md',
    LARGE: 'lg',
    EXTRA_LARGE: 'xl',
    FULL: 'full',
  },
  VARIANTS: {
    DEFAULT: 'default',
    CENTERED: 'centered',
    DRAWER: 'drawer',
  },
} as const;

// Form configuration
export const FORM_CONFIG = {
  VARIANTS: {
    DEFAULT: 'default',
    CARD: 'card',
    INLINE: 'inline',
    STACKED: 'stacked',
  },
} as const;

// Button variants
export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  OUTLINE: 'outline',
  GHOST: 'ghost',
  DANGER: 'danger',
} as const;

// Grid configuration
export const GRID_CONFIG = {
  DEFAULT_COLUMNS: 3,
  DEFAULT_ITEMS_PER_PAGE: 12,
  MIN_COLUMN_WIDTH: 250, // pixels
} as const;

// Cache control values (in seconds)
export const CACHE_DURATION = {
  STATIC_ASSETS: 31536000, // 1 year
  HTML: 0, // No cache for HTML
  IMAGES: 31536000, // 1 year
  FONTS: 31536000, // 1 year
} as const;

// Z-index layers
export const Z_INDEX = {
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070,
  TOAST: 1080,
} as const;

// Breakpoints (pixels)
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
} as const;

// Spacing values (pixels)
export const SPACING = {
  XS: 4,
  SM: 8,
  MD: 16,
  LG: 24,
  XL: 32,
  XXL: 40,
  XXXL: 48,
  XXXXL: 64,
  XXXXXL: 96,
  XXXXXXL: 128,
} as const;

// Wine grid layouts
export const WINE_GRID_LAYOUTS = {
  GRID: 'grid',  LIST: 'list',
} as const;

// Toast types
export const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
} as const;

// Loader variants
export const LOADER_VARIANTS = {
  SPINNER: 'spinner',
  DOTS: 'dots',
  PULSE: 'pulse',
  WINE: 'wine',
  SKELETON: 'skeleton',
} as const;

// Card variants
export const CARD_VARIANTS = {
  DEFAULT: 'default',
  WINE: 'wine',
  FEATURE: 'feature',
  OUTLINE: 'outline',
  ELEVATED: 'elevated',
} as const;

// Animation scale values
export const ANIMATION_SCALE = {
  HOVER: 1.02,
  TAP: 0.98,
  SMALL_HOVER: 1.05,
  SMALL_TAP: 0.95,
  BUTTON_HOVER: 1.05,
  BUTTON_TAP: 0.95,
} as const;

// Icon sizes
export const ICON_SIZES = {
  XS: 12,
  SM: 16,
  MD: 20,
  LG: 24,
  XL: 32,
} as const;

// Common CSS transition values
export const CSS_TRANSITIONS = {
  FAST: '150ms ease',
  NORMAL: '250ms ease',
  SLOW: '500ms ease',
} as const;

// Form validation
export const VALIDATION = {
  EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_PATTERN: /^\+?[\d\s\-\(\)]+$/,
} as const;

// Error codes
export const ERROR_CODES = {
  NETWORK_ERROR: 0,
  TIMEOUT: 408,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
} as const;
