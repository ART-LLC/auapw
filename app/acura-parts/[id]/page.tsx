import { ACURA_PARTS } from '@/lib/acura-parts-data'
import AcuraPartDetailPage from './page-client'

export function generateStaticParams() {
  return ACURA_PARTS.map((part) => ({ id: part.id }))
}

export default AcuraPartDetailPage
