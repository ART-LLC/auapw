import { PART_CATEGORIES } from '@/lib/data'
import IndividualPartPage from './page-client'

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '')
}

export function generateStaticParams() {
  return PART_CATEGORIES.flatMap((cat) =>
    cat.parts.map((part) => ({
      category: cat.id,
      part: slugify(part),
    }))
  )
}

export default IndividualPartPage
