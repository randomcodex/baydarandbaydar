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

export const ANIMATION_TIMING = {
  EASE_OUT: 'easeOut',
  EASE_IN: 'easeIn',
  EASE_IN_OUT: 'easeInOut',
  LINEAR: 'linear',
} as const;

export const STAGGER_DELAYS = {
  FAST: 0.05,
  NORMAL: 0.1,
  SLOW: 0.2,
  CHILDREN: 0.2,
  CHILDREN_FAST: 0.1,
  CHILDREN_SLOW: 0.3,
} as const;

export const PERFORMANCE_THRESHOLDS = {
  SLOW_RESOURCE: 1000,
  PAGE_LOAD_WARNING: 2000,
  MEMORY_CHECK_DELAY: 2000,
} as const;

export const API_CONFIG = {
  TIMEOUT: 10000,
  DEFAULT_CURRENCY: 'USD',
  DEFAULT_LOCALE: 'en-US',
  FRACTION_DIGITS: 2,
} as const;

export const DATE_CONSTANTS = {
  DAYS_IN_WEEK: 7,
  DAYS_IN_MONTH: 30,
  DAYS_IN_YEAR: 365,
} as const;

export const COMPONENT_SIZES = {
  SMALL: 'sm',
  MEDIUM: 'md',
  LARGE: 'lg',
  EXTRA_LARGE: 'xl',
} as const;

export const TOAST_CONFIG = {
  DEFAULT_DURATION: 5000,
  MAX_TOASTS: 5,
  PROGRESS_ANIMATION_DURATION: 5000,
  POSITIONS: {
    TOP_RIGHT: 'top-right',
    TOP_LEFT: 'top-left',
    BOTTOM_RIGHT: 'bottom-right',
    BOTTOM_LEFT: 'bottom-left',
    TOP_CENTER: 'top-center',
    BOTTOM_CENTER: 'bottom-center',
  },
} as const;

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

export const FORM_CONFIG = {
  VARIANTS: {
    DEFAULT: 'default',
    CARD: 'card',
    INLINE: 'inline',
    STACKED: 'stacked',
  },
} as const;

export const BUTTON_VARIANTS = {
  PRIMARY: 'primary',
  SECONDARY: 'secondary',
  OUTLINE: 'outline',
  GHOST: 'ghost',
  DANGER: 'danger',
} as const;

export const GRID_CONFIG = {
  DEFAULT_COLUMNS: 3,
  DEFAULT_ITEMS_PER_PAGE: 12,
  MIN_COLUMN_WIDTH: 250,
} as const;

export const CACHE_DURATION = {
  STATIC_ASSETS: 31536000,
  HTML: 0,
  IMAGES: 31536000,
  FONTS: 31536000,
} as const;

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

export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  XXL: 1536,
} as const;

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

export const WINE_GRID_LAYOUTS = {
  GRID: 'grid',  LIST: 'list',
} as const;

export const TOAST_TYPES = {
  SUCCESS: 'success',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
} as const;

export const LOADER_VARIANTS = {
  SPINNER: 'spinner',
  DOTS: 'dots',
  PULSE: 'pulse',
  WINE: 'wine',
  SKELETON: 'skeleton',
} as const;

export const CARD_VARIANTS = {
  DEFAULT: 'default',
  WINE: 'wine',
  FEATURE: 'feature',
  OUTLINE: 'outline',
  ELEVATED: 'elevated',
} as const;

export const ANIMATION_SCALE = {
  HOVER: 1.02,
  TAP: 0.98,
  SMALL_HOVER: 1.05,
  SMALL_TAP: 0.95,
  BUTTON_HOVER: 1.05,
  BUTTON_TAP: 0.95,
} as const;

export const ICON_SIZES = {
  XS: 12,
  SM: 16,
  MD: 20,
  LG: 24,
  XL: 32,
} as const;

export const CSS_TRANSITIONS = {
  FAST: '150ms ease',
  NORMAL: '250ms ease',
  SLOW: '500ms ease',
} as const;

export const VALIDATION = {
  EMAIL_PATTERN: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE_PATTERN: /^\+?[\d\s\-\(\)]+$/,
} as const;

export const ERROR_CODES = {
  NETWORK_ERROR: 0,
  TIMEOUT: 408,
  NOT_FOUND: 404,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  INTERNAL_SERVER_ERROR: 500,
} as const;
