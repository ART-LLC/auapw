import { CAR_MAKES } from '@/lib/data'
import BrandPage from './page-client'

export function generateStaticParams() {
  return CAR_MAKES.map((brand) => ({
    brand: brand.toLowerCase().replace(/\s+/g, '-'),
  }))
}

export default BrandPage
