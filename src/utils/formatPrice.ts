export const formatPrice = (
  price: number,
  currency: string = 'USD',
  locale: string = 'en-US',
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price)
}

export const formatPriceRange = (
  minPrice: number,
  maxPrice: number,
  currency: string = 'USD',
  locale: string = 'en-US',
): string => {
  if (minPrice === maxPrice) {
    return formatPrice(minPrice, currency, locale)
  }

  const min = formatPrice(minPrice, currency, locale)
  const max = formatPrice(maxPrice, currency, locale)

  return `${min} - ${max}`
}

export const formatPriceCompact = (
  price: number,
  currency: string = 'USD',
  locale: string = 'en-US',
): string => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(price)
}

export const formatDiscount = (originalPrice: number, discountedPrice: number): string => {
  const discount = ((originalPrice - discountedPrice) / originalPrice) * 100
  return `${Math.round(discount)}% off`
}

export const calculateTax = (price: number, taxRate: number = 0.08): number => {
  return price * taxRate
}

export const calculateTotal = (price: number, taxRate: number = 0.08): number => {
  return price + calculateTax(price, taxRate)
}
