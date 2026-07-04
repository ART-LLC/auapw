import { PART_CATEGORIES } from '@/lib/data'
import CategoryPage from './page-client'

export function generateStaticParams() {
  return PART_CATEGORIES.map((cat) => ({ category: cat.id }))
}

export default CategoryPage
