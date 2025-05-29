export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with -
    .replace(/[^\w\-]+/g, '') // Remove all non-word chars
    .replace(/\-\-+/g, '-') // Replace multiple - with single -
    .replace(/^-+/, '') // Trim - from start of text
    .replace(/-+$/, '') // Trim - from end of text
}

export const unslugify = (slug: string): string => {
  return slug
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')
}

export const createWineSlug = (name: string, vintage?: string): string => {
  let slug = slugify(name)
  if (vintage) {
    slug += `-${vintage}`
  }
  return slug
}

export const parseWineSlug = (slug: string): { name: string; vintage?: string } => {
  const parts = slug.split('-')
  const lastPart = parts[parts.length - 1]

  // Check if last part is a year (4 digits)
  if (/^\d{4}$/.test(lastPart)) {
    const vintage = lastPart
    const nameParts = parts.slice(0, -1)
    const name = unslugify(nameParts.join('-'))
    return { name, vintage }
  }

  return { name: unslugify(slug) }
}
