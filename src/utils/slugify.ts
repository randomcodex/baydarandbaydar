export const slugify = (text: string): string => {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/\s+/g, '-')
    .replace(/[^\w\-]+/g, '')
    .replace(/\-\-+/g, '-')
    .replace(/^-+/, '')
    .replace(/-+$/, '')
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

  if (/^\d{4}$/.test(lastPart)) {
    const vintage = lastPart
    const nameParts = parts.slice(0, -1)
    const name = unslugify(nameParts.join('-'))
    return { name, vintage }
  }

  return { name: unslugify(slug) }
}
