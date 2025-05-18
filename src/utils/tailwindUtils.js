export const createColorClass = (prefix, color) => {
  if (!color) {
    return prefix === 'border' ? 'border-gold-accent' : 'text-dark-green';
  }
  
  if (color?.startsWith('#')) {
    return `${prefix}-[${color}]`;
  }
  
  if (color && ['gold', 'gold-accent', 'dark-green', 'white', 'black', 'ivory'].includes(color)) {
    return `${prefix}-${color}`;
  }
  
  if (color?.startsWith('rgba') || color?.startsWith('rgb')) {
    return `${prefix}-[${color}]`;
  }
  
  return prefix === 'border' ? 'border-gold-accent' : 'text-dark-green';
};

const tailwindUtils = {
  createColorClass
};

export default tailwindUtils;
