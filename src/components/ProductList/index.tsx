/* eslint-disable @next/next/no-img-element */

import { Rating } from '../Rating'

interface ProductItemList {
  id: string
  name: string
  image: string
  rate: number
  price: number
  discount: number
}

interface ProductListProps {
  products: ProductItemList[]
}

export function ProductList({ products }: ProductListProps) {
  function formatCurrency(value: number) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value)
  }

  return (
    <div className="flex w-full justify-between">
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.image} alt="" />
          <div>
            <p className="mt-5 font-body text-xl font-bold capitalize">
              {product.name}
            </p>
            <div className="mt-2 flex items-center gap-3">
              <Rating />
              <div className="font-body">{product.rate}/5</div>
            </div>
            <p className="mt-2 font-body text-2xl font-bold capitalize">
              {formatCurrency(product.price)}
            </p>
          </div>
        </div>
      ))}
    </div>
  )
}
