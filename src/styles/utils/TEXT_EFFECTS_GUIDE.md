# Text Effects Utility

A comprehensive set of text highlighting effects that can be applied globally throughout the project.

## Location
`src/styles/utils/_text-effects.scss`

## Usage

### 1. Sass Mixins (Recommended)

```scss
.my-text {
  &:hover {
    @include text-highlight(medium);
  }
}

// Using primary color instead of secondary
.my-primary-text {
  &:hover {
    @include text-highlight-primary(strong);
  }
}

// Using custom color
.my-custom-text {
  &:hover {
    @include text-highlight-custom(#ff6b6b, subtle);
  }
}
```

### 2. Utility Classes (Direct Application)

```html
<!-- Always highlighted -->
<h1 class="text-highlight--medium">Always glowing text</h1>
<p class="text-highlight--subtle">Subtle glow text</p>

<!-- Highlight on hover -->
<button class="text-highlight-hover--strong">Hover me!</button>
<a class="text-highlight-primary-hover--medium">Primary color hover</a>
```

## Intensity Levels

### `subtle`
- 80% original color + 20% white
- Minimal glow effect
- 5% brightness boost
- Perfect for: Navigation links, secondary text

### `medium` (Default)
- 60% original color + 40% white
- Moderate glow effect
- 10% brightness boost
- Perfect for: Headings, call-to-action buttons

### `strong`
- 40% original color + 60% white
- Intense glow effect
- 20% brightness boost
- Perfect for: Hero titles, important highlights

## Color Variants

### Secondary Color (Default)
- Uses `var(--secondary-color)`
- `@include text-highlight(medium)`
- `.text-highlight--medium`

### Primary Color
- Uses `var(--primary-color)`
- `@include text-highlight-primary(medium)`
- `.text-highlight-primary--medium`

### Custom Color
- Any color you specify
- `@include text-highlight-custom(#your-color, medium)`

## Examples

```scss
// Logo hover effect
.logo:hover .logo__text {
  @include text-highlight(medium);
}

// Button with primary color glow
.btn-primary:hover {
  @include text-highlight-primary(strong);
}

// Custom brand color highlight
.brand-text:hover {
  @include text-highlight-custom(var(--brand-color), subtle);
}
```

```html
<!-- Direct class usage -->
<h1 class="text-highlight--strong">Always Glowing Title</h1>
<button class="text-highlight-hover--medium">Hover Button</button>
<nav class="text-highlight-primary-hover--subtle">Navigation</nav>
```

## Browser Support

- Uses modern `color-mix()` function
- Requires browsers that support CSS Color Module Level 5
- Chrome 111+, Firefox 113+, Safari 16.2+
- For older browsers, consider providing fallbacks

## Performance Notes

- Uses hardware-accelerated CSS filters
- Smooth 0.3s transitions included
- Optimized for 60fps animations
- Minimal performance impact
