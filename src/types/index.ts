import { ReactNode } from 'react';
import { MotionProps } from 'framer-motion';

export interface BaseMotionProps {
  asMotion?: boolean;
  motionProps?: MotionProps;
}

export type SizeVariant = 'sm' | 'md' | 'lg' | 'xl';
export type ExtendedSizeVariant = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type CardVariant = 'default' | 'wine' | 'feature' | 'outline' | 'elevated';
export type FormVariant = 'default' | 'card' | 'inline';
export type InputVariant = 'default' | 'filled' | 'outline';
export type ModalVariant = 'default' | 'centered' | 'drawer';
export type LoaderVariant = 'spinner' | 'dots' | 'pulse' | 'wine' | 'skeleton';
export type ToastVariant = 'success' | 'error' | 'warning' | 'info';

export type Position =
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'top-left'
  | 'top-right'
  | 'bottom-left'
  | 'bottom-right'
  | 'top-center'  | 'bottom-center';

export interface WithChildren {
  children: ReactNode;
}

export interface WithClassName {
  className?: string;
}

export interface WithLoading {
  isLoading?: boolean;
}

export interface WithDisabled {
  disabled?: boolean;
}

export interface WithError {
  error?: string;
}

export interface WithFullWidth {
  fullWidth?: boolean;
}

export interface BaseComponentProps
  extends WithChildren,
          WithClassName,
          BaseMotionProps {
  size?: SizeVariant;
}

export interface FormGroupProps extends BaseComponentProps {
  variant?: 'default' | 'inline' | 'stacked';
  required?: boolean;
  error?: string;
}

export interface FormActionsProps extends BaseComponentProps {
  variant?: 'default' | 'center' | 'space-between';
}

export interface ModalHeaderProps extends WithChildren, WithClassName {
  title?: string;
  subtitle?: string;
  onClose?: () => void;
  showCloseButton?: boolean;
}

export interface ModalFooterProps extends WithChildren, WithClassName {
  variant?: 'default' | 'center' | 'space-between';
}

export interface CardHeaderProps extends BaseComponentProps {}
export interface CardBodyProps extends BaseComponentProps {}
export interface CardFooterProps extends BaseComponentProps {}

export interface CardImageProps extends WithClassName, BaseMotionProps {
  src: string;
  alt: string;
  aspectRatio?: 'square' | 'video' | 'portrait' | 'landscape';
  objectFit?: 'cover' | 'contain' | 'fill';
  overlay?: ReactNode;
}

export interface ToastAction {
  label: string;
  onClick: () => void;
}

export interface ToastBaseProps {
  id?: string;
  title?: string;
  message: string;
  type?: ToastVariant;
  duration?: number;
  position?: Position;
  showCloseButton?: boolean;
  showIcon?: boolean;
  persistent?: boolean;
  action?: ToastAction;
  onClose?: () => void;
}

export interface AnimationConfig {
  duration?: number;
  ease?: string;
  delay?: number;
  staggerChildren?: number;
  delayChildren?: number;
}

export interface StaggerAnimation {
  staggerChildren: number;
  delayChildren: number;
}

export interface TransitionConfig {
  duration: number;
  ease: string;
}

export interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  onPageChange?: (page: number) => void;
}

export interface FilterState {
  [key: string]: any;
}

export interface WineRegion {
  id: string;
  name: string;
  country: string;
}

export interface WineProducer {
  id: string;
  name: string;
  region: WineRegion;
}

export interface Wine {
  id: string;
  name: string;
  producer: WineProducer;
  vintage?: number;
  type: 'red' | 'white' | 'rosé' | 'sparkling' | 'dessert';
  price: number;
  rating?: number;
  description?: string;
  image?: string;
  inStock: boolean;
  organic?: boolean;
  featured?: boolean;
}

export interface ApiResponse<T = any> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface ApiError {
  message: string;
  code: number;
  data?: any;
}

export type ClickHandler = () => void;
export type ChangeHandler<T = any> = (value: T) => void;
export type SubmitHandler = (data: any) => void | Promise<void>;

export type PropsWithMotion<T> = T & BaseMotionProps;
export type PropsWithSize<T> = T & { size?: SizeVariant };
export type PropsWithVariant<T, V> = T & { variant?: V };

export interface PageMetadata {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
}

export interface PerformanceMetric {
  name: string;
  value: number;
  timestamp: number;
}

export interface WebVitals {
  lcp?: number;
  fid?: number;
  cls?: number;
  fcp?: number;
  ttfb?: number;
}

export interface NavigationItem {
  name: string;
  path: string;
  icon?: string;
  external?: boolean;
  children?: NavigationItem[];
}

export interface AppConfig {
  apiBaseUrl: string;
  siteUrl: string;
  companyEmail: string;
  companyPhone: string;
  googleAnalyticsId?: string;
  isDevelopment: boolean;
  isProduction: boolean;
}

export interface BaseStore {
  loading: boolean;
  error: string | null;
}

export interface WindowSize {
  width: number;
  height: number;
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  isLarge: boolean;
}

export type EventHandler<T = Event> = (event: T) => void;
export type AsyncEventHandler<T = Event> = (event: T) => Promise<void>;

export interface MediaFile {
  id: string;
  name: string;
  url: string;
  type: string;
  size: number;
  alt?: string;
}

export interface ValidationRule {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
  pattern?: RegExp;
  custom?: (value: any) => boolean | string;
}

export interface ValidationErrors {
  [field: string]: string;
}

export interface FetchState<T> {
  data: T | null;
  loading: boolean;
  error: string | null;
}

export interface InfiniteScrollState<T> {
  items: T[];
  hasMore: boolean;
  loading: boolean;
  error: string | null;
  page: number;
}

export type SortOrder = 'asc' | 'desc';

export interface SortConfig {
  field: string;
  order: SortOrder;
}

export interface CrudOperations<T> {
  create: (item: Omit<T, 'id'>) => Promise<T>;
  read: (id: string) => Promise<T>;
  update: (id: string, item: Partial<T>) => Promise<T>;
  delete: (id: string) => Promise<void>;
  list: (filters?: FilterState) => Promise<T[]>;
}
